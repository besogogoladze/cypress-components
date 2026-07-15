import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // import.meta is available in ESM configs
      return config;
    },
  },
});
