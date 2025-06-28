import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/carousel.js",
    output: {
      file: "dist/carousel.min.js",
      format: "umd",
      name: "Carousel",
    },
    plugins: [resolve(), commonjs(), terser(), postcss()],
  },
  {
    input: "src/carousel.js",
    output: {
      file: "dist/carousel.esm.js",
      format: "es",
    },
    plugins: [resolve(), commonjs(), postcss()],
  },
  {
    input: "src/carousel.js",
    output: {
      file: "dist/carousel.cjs.js",
      format: "cjs",
    },
    plugins: [resolve(), commonjs(), postcss()],
  },
  {
    input: "src/carousel.js",
    output: {
      file: "dist/carousel.browser.js",
      format: "iife",
      name: "Carousel",
    },
    plugins: [resolve(), commonjs(), postcss()],
  },
];
