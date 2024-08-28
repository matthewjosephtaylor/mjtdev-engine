import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import { terser } from 'rollup-plugin-terser';
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts", // Entry file for your TypeScript source
  output: {
    file: "dist/index.js", // Output file
    format: "esm", // ES module format
    sourcemap: true, // Optional: include sourcemaps for easier debugging
  },
  plugins: [
    resolve(), // Helps Rollup find and bundle node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Transpiles TypeScript to JavaScript
    json(),
    // terser(),               // Optional: minify the output
  ],
  external: [
    "crypto",
    "react",
    "react-dom",
    "react-router-dom",
    "styled-components",
  ], // List any dependencies you want to exclude from the bundle
};
