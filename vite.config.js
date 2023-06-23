// vite.config.js
const { defineConfig } = require('vite');
export default defineConfig({
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './src/index.ts',
    },
  },
})