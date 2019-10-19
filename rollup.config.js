import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/component.ts",
  output: {
    file: "dist/index.js",
    format: "esm"
  },
  plugins: [typescript()]
};
