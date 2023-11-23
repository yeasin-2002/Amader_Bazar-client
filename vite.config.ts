import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./"),
      $src: path.resolve(__dirname, "./src/"),
      $assets: `${path.resolve(__dirname, "./src/assets/")}`,
      $hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      $layout: `${path.resolve(__dirname, "./src/layout/")}`,
      $pages: `${path.resolve(__dirname, "./src/pages/")}`,
      $utils: `${path.resolve(__dirname, "./src/utils/")}`,
      $data: `${path.resolve(__dirname, "./src/data")}`,
      $store: `${path.resolve(__dirname, "./src/store/")}`,
      $style: `${path.resolve(__dirname, "./src/style/")}`,
      $components: `${path.resolve(__dirname, "./src/components/")}`,
      $ui: `${path.resolve(__dirname, "./src/ui/")}`,
      $lib: `${path.resolve(__dirname, "./src/lib/")}`,
      $types: `${path.resolve(__dirname, "./src/interface/")}`,
    },
  },
})
