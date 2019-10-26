import typescript from "rollup-plugin-typescript";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "./src/component.ts",
  output: {
    file: "dist/index.js",
    format: "esm"
  },
  plugins: [resolve({ dedupe: ["lit-element", "lit-html"] }), , typescript()]
};
