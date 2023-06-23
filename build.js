const { build } = require("esbuild");
const { dependencies, peerDependencies } = require('./package.json');

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  // external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
  ...sharedConfig,
  platform: 'browser',
  format: 'esm',
  target: 'es2022',
  outfile: "dist/index.js",
});
