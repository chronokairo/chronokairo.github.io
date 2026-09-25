// Run with `deno task align:lps` after editing a canonical page in lp/.
const pages = [
  ["audiomed", ["audiomed", "showcase/audiomed"]],
  ["educacional", ["educacional", "showcase/educacional"]],
  ["marketing", ["marketing"]],
  ["inteligencia", ["ia", "inteligencia"]],
  ["missao-critica", ["engenharia", "missao-critica"]],
  ["automacao-processos", []],
] as const;

const THEME_SCRIPT = `<script>(function(){try{var s=localStorage.getItem('chronokairo-theme')||localStorage.getItem('chronokairo-pantone-theme');var t=s;if(!t||t==='auto'||t==='system'){var h=new Date().getHours();t=(h>=6&&h<18)?'light':'dark';}var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);r.style.colorScheme=t;}catch(e){}})();</script>`;

const THEME_TOGGLE = `<button type="button" class="lp-theme-toggle" onclick="(function(){var r=document.documentElement;var next=r.classList.contains('dark')?'light':'dark';r.classList.remove('light','dark');r.classList.add(next);r.style.colorScheme=next;localStorage.setItem('chronokairo-theme',next);})()" aria-label="Alternar tema dia/noite" title="Alternar tema (Dia / Noite)"><svg class="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg><svg class="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button>`;

function align(html: string): string {
  let result = html
    .replaceAll("Software House", "Engenharia de Software e IA")
    .replaceAll("software house", "boutique de engenharia")
    .replaceAll("PANTONE 2026 B&amp;W", "TECNOLOGIA NO TEMPO CERTO")
    .replaceAll("https://chronokairo.com.br/#contato", "https://chronokairo.com.br/#contact")
    .replaceAll('content="#299675"', 'content="#0a0a0a"')
    .replace(/[ \t]+$/gm, "");

  // Injetar script de tema anti-flicker no <head> se ainda não tiver
  if (!result.includes("chronokairo-theme") && result.includes("<head>")) {
    result = result.replace("<head>", `<head>\n  ${THEME_SCRIPT}`);
  }

  // Injetar boutique.css se não existir
  if (!result.includes('href="/lp/boutique.css"')) {
    result = result.replace("</head>", '  <link rel="stylesheet" href="/lp/boutique.css">\n</head>');
  }

  // Injetar toggle de tema solar se não existir
  if (!result.includes("lp-theme-toggle") && result.includes("</body>")) {
    result = result.replace("</body>", `  ${THEME_TOGGLE}\n</body>`);
  }

  return result;
}

for (const [name, aliases] of pages) {
  const canonical = `lp/${name}/index.html`;
  const html = align(await Deno.readTextFile(canonical));
  await Deno.writeTextFile(canonical, html);
  for (const path of [`lp/${name}`, ...aliases]) {
    const target = `public/${path}/index.html`;
    await Deno.writeTextFile(target, html);
  }
  if (name === "marketing") await Deno.writeTextFile("marketing/index.html", html);
}

for await (const entry of Deno.readDir("lp")) {
  if (!entry.isDirectory || !entry.name.startsWith("teste-lp-")) continue;
  const canonical = `lp/${entry.name}/index.html`;
  let html = align(await Deno.readTextFile(canonical));
  if (!html.includes('name="robots"')) {
    html = html.replace("</head>", '  <meta name="robots" content="noindex, nofollow">\n</head>');
  }
  await Deno.writeTextFile(canonical, html);
  await Deno.writeTextFile(`public/lp/${entry.name}/index.html`, html);
}

console.log("Todas as Landing Pages foram alinhadas com sucesso ao design system de luxo!");
