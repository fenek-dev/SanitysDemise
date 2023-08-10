import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  plugins: [svgr(), react(), eslint()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  // 3. to make use of `TAURI_DEBUG` and other env variables
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
}));
