import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Load `lovable-tagger` only in development via dynamic import so production
// builds don't require the package to be installed.
export default defineConfig(async ({ mode }) => {
  const plugins: Array<any> = [react()];

  if (mode === "development") {
    try {
      const mod = await import("lovable-tagger");
      if (mod?.componentTagger) plugins.push(mod.componentTagger());
    } catch (err) {
      // If lovable-tagger isn't installed, ignore in non-dev environments.
    }
  }

  return {
    base: '/chronokairo_site/',
    root: path.resolve(__dirname, "client"),
    publicDir: path.resolve(__dirname, "public"),
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, "client/index.html"),
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    server: {
      host: "::",
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    },
    plugins: plugins.filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
      },
    },
  };
});
