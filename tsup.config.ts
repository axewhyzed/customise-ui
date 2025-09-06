import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // your library entry
  format: ["esm", "cjs"], // output both module types
  dts: {
    entry: "src/index.ts" // generate .d.ts files
  },           
  sourcemap: true,
  clean: true,            // clean dist/ before build
  external: ["react", "react-dom"], // don’t bundle peer deps
  minify: false
});
