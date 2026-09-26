import * as THREE from "three";
import { CUTOVER_THRESHOLD, quotaState, type ArchitectureVisualization } from "@/lib/architecture-visualization";

export type SceneController = {
  select: (id: string) => void;
  dispose: () => void;
};

type SceneCallbacks = {
  onRoute: (id: string) => void;
  onUsage: (usage: Record<string, number>) => void;
};

const ORBIT_RADIUS = 2.7;
const COLUMN_HEIGHT = 1.7;
const COLUMN_SIZE = 0.3;
const CORE_HEIGHT = 0.55;
const PACKETS = 18;

// Staggered starting usage so the first failover happens within a few seconds.
const INITIAL_USAGE = [0.52, 0.18, 0.34, 0.08, 0.26];

export function mountArchitectureScene(
  host: HTMLDivElement,
  visualization: ArchitectureVisualization,
  selectedId: string,
  { onRoute, onUsage }: SceneCallbacks,
): SceneController | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  } catch {
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.className = "h-full w-full";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  // Orthographic, like an architectural drawing: verticals stay vertical.
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 80);
  camera.position.set(0, 10.6, 19);
  camera.lookAt(0, 0.7, 0);
  const pixelRatio = renderer.getPixelRatio();

  // Round, softly antialiased points instead of GL's default squares.
  const discCanvas = document.createElement("canvas");
  discCanvas.width = discCanvas.height = 64;
  const discContext = discCanvas.getContext("2d");
  if (discContext) {
    const gradient = discContext.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.55, "rgba(255,255,255,1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    discContext.fillStyle = gradient;
    discContext.fillRect(0, 0, 64, 64);
  }
  const disc = new THREE.CanvasTexture(discCanvas);

  const world = new THREE.Group();
  scene.add(world);

  const resources: Array<THREE.BufferGeometry | THREE.Material> = [];
  const track = <T extends THREE.BufferGeometry | THREE.Material>(resource: T): T => {
    resources.push(resource);
    return resource;
  };

  // Every material is monochrome and derives its color from the page theme.
  const fgMaterials: Array<{ material: THREE.Material & { color: THREE.Color }; base: number }> = [];
  const tone = <T extends THREE.Material & { color: THREE.Color; opacity: number }>(material: T, opacity: number): T => {
    material.transparent = true;
    material.opacity = opacity;
    material.depthWrite = false;
    fgMaterials.push({ material, base: opacity });
    return track(material);
  };

  // Floor: a field of fine points that fades toward the edge.
  const floorPositions: number[] = [];
  const floorAlpha: number[] = [];
  const FLOOR_RADIUS = 4.6;
  for (let x = -FLOOR_RADIUS; x <= FLOOR_RADIUS; x += 0.28) {
    for (let z = -FLOOR_RADIUS; z <= FLOOR_RADIUS; z += 0.28) {
      const distance = Math.hypot(x, z);
      if (distance > FLOOR_RADIUS) continue;
      floorPositions.push(x, 0, z);
      floorAlpha.push(Math.pow(1 - distance / FLOOR_RADIUS, 1.6));
    }
  }
  const floorGeometry = track(new THREE.BufferGeometry());
  floorGeometry.setAttribute("position", new THREE.Float32BufferAttribute(floorPositions, 3));
  floorGeometry.setAttribute("color", new THREE.Float32BufferAttribute(new Float32Array(floorAlpha.length * 3), 3));
  const floorMaterial = track(new THREE.PointsMaterial({ map: disc, vertexColors: true, transparent: true, depthWrite: false }));
  const floor = new THREE.Points(floorGeometry, floorMaterial);
  floor.renderOrder = -1;
  world.add(floor);

  // Orbits: the provider ring plus two fine concentric guides.
  const orbit = (radius: number, opacity: number, dashed: boolean) => {
    const points = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2).getPoints(160);
    const geometry = track(new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(p.x, 0.001, p.y))));
    const material = dashed
      ? tone(new THREE.LineDashedMaterial({ dashSize: 0.05, gapSize: 0.09 }), opacity)
      : tone(new THREE.LineBasicMaterial(), opacity);
    const line = new THREE.LineLoop(geometry, material);
    if (dashed) line.computeLineDistances();
    world.add(line);
  };
  orbit(ORBIT_RADIUS, 0.34, false);
  orbit(1.25, 0.2, true);
  orbit(3.9, 0.12, true);

  // Core: the provider contract, a faceted crystal on a thin pedestal.
  const coreGroup = new THREE.Group();
  coreGroup.position.set(0, CORE_HEIGHT, 0);
  world.add(coreGroup);
  const coreOuter = new THREE.LineSegments(
    track(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.42, 0))),
    tone(new THREE.LineBasicMaterial(), 0.9),
  );
  const coreInner = new THREE.Mesh(track(new THREE.OctahedronGeometry(0.17)), tone(new THREE.MeshBasicMaterial(), 0.95));
  coreGroup.add(coreOuter, coreInner);
  const pedestal = track(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, CORE_HEIGHT - 0.42, 0)]));
  world.add(new THREE.Line(pedestal, tone(new THREE.LineBasicMaterial(), 0.45)));
  const coreHalo = new THREE.Mesh(track(new THREE.RingGeometry(0.62, 0.635, 96)), tone(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), 0.5));
  coreHalo.rotation.x = -Math.PI / 2;
  coreHalo.position.y = 0.002;
  world.add(coreHalo);

  // Providers: each is a column whose fill shows quota usage.
  type Station = {
    id: string;
    base: THREE.Vector3;
    fill: THREE.Mesh;
    fillMaterial: THREE.MeshBasicMaterial;
    frameMaterial: THREE.LineBasicMaterial;
    ringMaterial: THREE.MeshBasicMaterial;
    routeMaterial: THREE.LineDashedMaterial;
    curve: THREE.QuadraticBezierCurve3;
    usage: number;
  };
  const stations: Station[] = [];
  const hitTargets: THREE.Mesh[] = [];
  const hitMaterial = track(new THREE.MeshBasicMaterial({ visible: false }));
  const count = visualization.providers.length;

  visualization.providers.forEach((provider, index) => {
    // One provider sits behind the core, so none covers it from the camera.
    const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;
    const base = new THREE.Vector3(Math.cos(angle) * ORBIT_RADIUS, 0, Math.sin(angle) * ORBIT_RADIUS);

    const column = new THREE.Group();
    column.position.copy(base);
    world.add(column);

    const frameMaterial = tone(new THREE.LineBasicMaterial(), 0.5);
    const frame = new THREE.LineSegments(
      track(new THREE.EdgesGeometry(new THREE.BoxGeometry(COLUMN_SIZE, COLUMN_HEIGHT, COLUMN_SIZE))),
      frameMaterial,
    );
    frame.position.y = COLUMN_HEIGHT / 2;
    column.add(frame);

    const fillMaterial = tone(new THREE.MeshBasicMaterial(), 0.22);
    const fillGeometry = track(new THREE.BoxGeometry(COLUMN_SIZE * 0.78, 1, COLUMN_SIZE * 0.78));
    fillGeometry.translate(0, 0.5, 0);
    const fill = new THREE.Mesh(fillGeometry, fillMaterial);
    column.add(fill);

    // Cutover threshold: a hairline collar at 85% of capacity.
    const collar = new THREE.LineSegments(
      track(new THREE.EdgesGeometry(new THREE.BoxGeometry(COLUMN_SIZE * 1.18, 0.001, COLUMN_SIZE * 1.18))),
      tone(new THREE.LineBasicMaterial(), 0.4),
    );
    collar.position.y = COLUMN_HEIGHT * CUTOVER_THRESHOLD;
    column.add(collar);

    const ringMaterial = tone(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), 0.35);
    const ring = new THREE.Mesh(track(new THREE.RingGeometry(0.34, 0.35, 64)), ringMaterial);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.002;
    column.add(ring);

    const hit = new THREE.Mesh(track(new THREE.BoxGeometry(0.8, COLUMN_HEIGHT + 0.4, 0.8)), hitMaterial);
    hit.position.set(base.x, COLUMN_HEIGHT / 2, base.z);
    hit.userData.providerId = provider.id;
    hitTargets.push(hit);
    world.add(hit);

    const start = new THREE.Vector3(0, CORE_HEIGHT, 0);
    const end = new THREE.Vector3(base.x, 0.02, base.z);
    const control = new THREE.Vector3(base.x * 0.5, 1.35, base.z * 0.5);
    const curve = new THREE.QuadraticBezierCurve3(start, control, end);
    const routeMaterial = tone(new THREE.LineDashedMaterial({ dashSize: 0.04, gapSize: 0.06 }), 0.18);
    const route = new THREE.Line(track(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64))), routeMaterial);
    route.computeLineDistances();
    world.add(route);

    stations.push({
      id: provider.id,
      base,
      fill,
      fillMaterial,
      frameMaterial,
      ringMaterial,
      routeMaterial,
      curve,
      usage: INITIAL_USAGE[index % INITIAL_USAGE.length],
    });
  });

  // Traffic packets travel along the active route.
  const packetGeometry = track(new THREE.BufferGeometry());
  const packetPositions = new Float32Array(PACKETS * 3);
  packetGeometry.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));
  const packetMaterial = tone(new THREE.PointsMaterial({ map: disc }), 1);
  world.add(new THREE.Points(packetGeometry, packetMaterial));

  // Theme: read colors from the host's computed style and follow the html class.
  const fg = new THREE.Color();
  const bg = new THREE.Color();
  const applyTheme = () => {
    const style = getComputedStyle(host);
    fg.setStyle(style.color || "#ffffff", THREE.SRGBColorSpace);
    const panel = host.closest<HTMLElement>("[data-visualizer]") ?? host;
    const background = getComputedStyle(panel).backgroundColor;
    bg.setStyle(background && !background.startsWith("rgba(0, 0, 0, 0") ? background : "#000000", THREE.SRGBColorSpace);
    for (const { material } of fgMaterials) material.color.copy(fg);
    const colors = floorGeometry.getAttribute("color") as THREE.BufferAttribute;
    const mixed = new THREE.Color();
    floorAlpha.forEach((alpha, i) => {
      mixed.copy(bg).lerp(fg, 0.06 + alpha * 0.34);
      colors.setXYZ(i, mixed.r, mixed.g, mixed.b);
    });
    colors.needsUpdate = true;
  };
  // Re-read after the page's color transition settles, too.
  let themeTimer = 0;
  const themeObserver = new MutationObserver(() => {
    applyTheme();
    render();
    window.clearTimeout(themeTimer);
    themeTimer = window.setTimeout(() => {
      applyTheme();
      render();
    }, 450);
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style"] });

  const point = new THREE.Vector3();
  let activeIndex = Math.max(0, stations.findIndex((station) => station.id === selectedId));

  const paint = () => {
    stations.forEach((station, index) => {
      const active = index === activeIndex;
      const state = quotaState(station.usage);
      station.fill.scale.y = Math.max(station.usage * COLUMN_HEIGHT, 0.001);
      station.fillMaterial.opacity = active ? 0.62 : state === "healthy" ? 0.16 : 0.3;
      station.frameMaterial.opacity = active ? 0.95 : 0.42;
      station.ringMaterial.opacity = active ? 0.85 : 0.28;
      station.routeMaterial.opacity = active ? 0.75 : 0.12;
    });
  };

  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    const aspect = width / height;
    const halfHeight = Math.max(2.7, 4.3 / aspect);
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    // Point sizes are in pixels under an orthographic camera, so scale them with the canvas.
    const scale = Math.min(Math.max(width / 700, 0.55), 1.2) * pixelRatio;
    floorMaterial.size = 2 * scale;
    packetMaterial.size = 3.4 * scale;
    renderer.setSize(width, height, false);
    render();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  const route = (index: number, notify: boolean) => {
    if (index === activeIndex) return;
    activeIndex = index;
    if (notify) onRoute(stations[index].id);
    paint();
    render();
  };

  const select = (id: string) => {
    const index = stations.findIndex((station) => station.id === id);
    if (index >= 0) route(index, false);
  };

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const pick = (event: PointerEvent) => {
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -((event.clientY - bounds.top) / bounds.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(hitTargets, false)[0]?.object.userData.providerId as string | undefined;
  };
  const handleUp = (event: PointerEvent) => {
    const id = pick(event);
    if (!id) return;
    route(stations.findIndex((station) => station.id === id), true);
  };
  const handleMove = (event: PointerEvent) => {
    renderer.domElement.style.cursor = pick(event) ? "pointer" : "default";
  };
  renderer.domElement.addEventListener("pointerup", handleUp);
  renderer.domElement.addEventListener("pointermove", handleMove);

  const reportUsage = () => onUsage(Object.fromEntries(stations.map((station) => [station.id, station.usage])));

  applyTheme();
  paint();
  resize();
  reportUsage();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    world.rotation.y = 0.35;
    render();
  } else {
    let last = performance.now();
    let sinceReport = 0;
    renderer.setAnimationLoop((time) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;

      // The active provider consumes quota; idle providers recover slowly.
      stations.forEach((station, index) => {
        station.usage = index === activeIndex
          ? Math.min(station.usage + delta * 0.075, 1)
          : Math.max(station.usage - delta * 0.018, 0.04);
      });
      if (stations[activeIndex].usage >= CUTOVER_THRESHOLD) {
        let healthiest = 0;
        stations.forEach((station, index) => {
          if (station.usage < stations[healthiest].usage) healthiest = index;
        });
        route(healthiest, true);
      }

      const curve = stations[activeIndex].curve;
      for (let i = 0; i < PACKETS; i++) {
        const t = ((time * 0.00032) + i / PACKETS) % 1;
        curve.getPoint(t, point);
        packetPositions.set([point.x, point.y, point.z], i * 3);
      }
      packetGeometry.attributes.position.needsUpdate = true;

      coreGroup.rotation.y = time * 0.00025;
      coreGroup.rotation.x = Math.sin(time * 0.0004) * 0.12;
      coreInner.rotation.y = -time * 0.0006;
      world.rotation.y = Math.sin(time * 0.00011) * 0.19;

      sinceReport += delta;
      if (sinceReport > 0.2) {
        sinceReport = 0;
        reportUsage();
      }
      paint();
      render();
    });
  }

  return {
    select,
    dispose: () => {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener("pointerup", handleUp);
      renderer.domElement.removeEventListener("pointermove", handleMove);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.clearTimeout(themeTimer);
      resources.forEach((resource) => resource.dispose());
      disc.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
