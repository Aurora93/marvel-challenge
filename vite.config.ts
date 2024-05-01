/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    outDir: "build",
    target: "esnext",
  },
  server: {
    port: 3000,
  },
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "html", "lcov"],
      exclude: ["node_modules/", "src/setupTests.ts"],
    },
  },
});
