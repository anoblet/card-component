import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/Component.ts",
  output: {
    file: "dist/card-component.js",
    format: "esm"
  },
  plugins: [typescript()]
};
