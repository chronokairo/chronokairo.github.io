# Configuração do GitHub Pages para https://chronokairo.github.io

## Mudanças necessárias no repositório chronokairo_site:

### 1. Editar vite.config.ts
Mudar a linha:
```typescript
base: '/chronokairo_site/',
```

Para:
```typescript
base: '/',
```

### 2. Fazer commit e push:
```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages root domain"
git push
```

## Neste repositório (chronokairo.github.io):

### 1. Fazer commit do workflow:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### 2. Configurar GitHub Pages:
- Vá em Settings → Pages do repositório chronokairo.github.io
- Em "Source", selecione "GitHub Actions"

### 3. Executar o workflow:
O workflow será executado automaticamente após o push, mas você também pode executá-lo manualmente:
- Vá em Actions → Deploy to GitHub Pages → Run workflow

O site estará disponível em: https://chronokairo.github.io
