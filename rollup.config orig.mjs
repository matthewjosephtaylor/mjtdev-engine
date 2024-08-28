// rollup.config.js
// import typescript from "rollup-plugin-typescript2";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
// import json from "@rollup/plugin-json";
// import nodePolyfills from "rollup-plugin-polyfill-node";
// import { nodeResolve } from "@rollup/plugin-node-resolve";

import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    typescript(),
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      // exclude: /node_modules/, // default
      sourceMap: true, // default
      // minify: process.env.NODE_ENV === "production",
      target: "esnext", // default, or 'es20XX', 'esnext'
      jsx: "transform", // default, or 'preserve'
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
      tsconfig: "tsconfig.json", // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        // ".json": "json",
        // Enable JSX in .js files too
        // ".js": "jsx",
      },
    }),
    // commonjs(),
    // babel({ helpers: "bundled" }),
    // nodeResolve(), commonjs(), json(), nodePolyfills()
  ],
  // plugins: [typescript(), nodeResolve(), commonjs(), json(), nodePolyfills()],
};
