import { build } from "esbuild";
// import { dependencies, peerDependencies } from "./package.json";
const externalPlugin = () => ({
  name: 'external-global-plugin',
  setup(build) {
    build.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'global' }));
    build.onLoad({ filter: /.*/, namespace: 'global' }, () => ({ contents: 'module.exports = window.React;' }));

    build.onResolve({ filter: /^react-dom$/ }, () => ({ path: 'react-dom', namespace: 'global' }));
    build.onLoad({ filter: /.*/, namespace: 'global' }, () => ({ contents: 'module.exports = window.ReactDOM;' }));
  },
});
const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  external: [
    "crypto",
    "react",
    "react-dom",
    "react-router-dom",
    "styled-components",
  ],
  plugins: [externalPlugin()],
  // external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
  ...sharedConfig,
  platform: "browser",
  format: "esm",
  target: "es2022",
  outfile: "dist/index.js",
});
