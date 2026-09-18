import * as THREE from "three";
import type { ArchitectureVisualization } from "@/lib/architecture-visualization";

type SceneController = {
  select: (id: string) => void;
  dispose: () => void;
};

export function mountArchitectureScene(
  host: HTMLDivElement,
  visualization: ArchitectureVisualization,
  selectedId: string,
  onSelect: (id: string) => void,
): SceneController | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  } catch {
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.className = "h-full w-full";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);
  const group = new THREE.Group();
  scene.add(group);

  const resources: Array<THREE.BufferGeometry | THREE.Material> = [];
  const track = <T extends THREE.BufferGeometry | THREE.Material>(resource: T): T => {
    resources.push(resource);
    return resource;
  };
  const targetMeshes: THREE.Mesh[] = [];
  const providerMaterials = new Map<string, THREE.MeshBasicMaterial>();
  const pathMaterials = new Map<string, THREE.LineBasicMaterial>();
  const xStep = visualization.providers.length > 1 ? 5.6 / (visualization.providers.length - 1) : 0;
  const center = new THREE.Vector3(0, -0.62, 0.32);

  const gridMaterial = track(new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.055 }));
  for (let i = -3; i <= 3; i++) {
    const horizontal = track(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-3.6, i * 0.55, -0.8),
      new THREE.Vector3(3.6, i * 0.55, -0.8),
    ]));
    group.add(new THREE.Line(horizontal, gridMaterial));
  }

  visualization.providers.forEach((provider, index) => {
    const x = visualization.providers.length > 1 ? -2.8 + index * xStep : 0;
    const y = 0.95 + (index % 2 === 0 ? 0.12 : -0.12);
    const z = index === 2 ? 0.28 : 0;
    const position = new THREE.Vector3(x, y, z);

    const path = track(new THREE.BufferGeometry().setFromPoints([
      position,
      new THREE.Vector3(x * 0.65, 0.22, z + 0.08),
      center,
    ]));
    const pathMaterial = track(new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 }));
    pathMaterials.set(provider.id, pathMaterial);
    group.add(new THREE.Line(path, pathMaterial));

    const material = track(new THREE.MeshBasicMaterial({ color: 0x777777 }));
    const mesh = new THREE.Mesh(track(new THREE.IcosahedronGeometry(0.19, 1)), material);
    mesh.position.copy(position);
    mesh.userData.providerId = provider.id;
    targetMeshes.push(mesh);
    providerMaterials.set(provider.id, material);
    group.add(mesh);

    const halo = new THREE.Mesh(
      track(new THREE.RingGeometry(0.31, 0.32, 48)),
      track(new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, side: THREE.DoubleSide })),
    );
    halo.position.copy(position);
    group.add(halo);
  });

  const core = new THREE.Mesh(
    track(new THREE.OctahedronGeometry(0.39)),
    track(new THREE.MeshBasicMaterial({ color: 0xe8e8e8, wireframe: true })),
  );
  core.position.copy(center);
  group.add(core);

  const coreRing = new THREE.Mesh(
    track(new THREE.RingGeometry(0.63, 0.64, 64)),
    track(new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28, side: THREE.DoubleSide })),
  );
  coreRing.position.copy(center);
  group.add(coreRing);

  const outputPath = track(new THREE.BufferGeometry().setFromPoints([
    center,
    new THREE.Vector3(0, -1.72, 0.32),
  ]));
  group.add(new THREE.Line(outputPath, track(new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }))));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentId = selectedId;
  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    render();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);

  const select = (id: string) => {
    currentId = id;
    for (const [providerId, material] of providerMaterials) {
      material.color.setHex(providerId === id ? 0xffffff : 0x777777);
      pathMaterials.get(providerId)!.opacity = providerId === id ? 0.9 : 0.15;
    }
    render();
  };

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const handlePointer = (event: PointerEvent) => {
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set(
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(targetMeshes, false)[0];
    if (hit?.object.userData.providerId) onSelect(hit.object.userData.providerId as string);
  };
  renderer.domElement.addEventListener("pointerup", handlePointer);

  select(currentId);
  resize();
  if (!reducedMotion) {
    renderer.setAnimationLoop((time) => {
      group.rotation.y = Math.sin(time * 0.0002) * 0.055;
      core.rotation.y = time * 0.00018;
      render();
    });
  }

  return {
    select,
    dispose: () => {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener("pointerup", handlePointer);
      observer.disconnect();
      resources.forEach((resource) => resource.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
