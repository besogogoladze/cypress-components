import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // import.meta is available in ESM configs
    },
  },
});
