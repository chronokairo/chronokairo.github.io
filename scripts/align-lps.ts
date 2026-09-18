// Run with `deno task align:lps` after editing a canonical page in lp/.
const pages = [
  ["audiomed", ["audiomed", "showcase/audiomed"]],
  ["educacional", ["educacional", "showcase/educacional"]],
  ["marketing", ["marketing"]],
  ["inteligencia", ["ia", "inteligencia"]],
  ["missao-critica", ["engenharia", "missao-critica"]],
  ["automacao-processos", []],
] as const;

function align(html: string): string {
  let result = html
    .replaceAll("ChronoKairo", "Chronokairo")
    .replaceAll("Software House", "Engenharia de Software e IA")
    .replaceAll("software house", "boutique de engenharia")
    .replaceAll("PANTONE 2026 B&amp;W", "TECNOLOGIA NO TEMPO CERTO")
    .replaceAll("https://chronokairo.com.br/#contato", "https://chronokairo.com.br/#contact")
    .replaceAll('content="#299675"', 'content="#0a0a0a"')
    .replace(/[ \t]+$/gm, "");
  if (!result.includes('href="/lp/boutique.css"')) {
    result = result.replace("</head>", '  <link rel="stylesheet" href="/lp/boutique.css">\n</head>');
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
