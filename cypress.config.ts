import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = "http://localhost:3000";
      return config;
    },
  },
  video: true,
});