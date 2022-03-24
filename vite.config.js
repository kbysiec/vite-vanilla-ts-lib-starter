const packageJson = require("./package.json");
const path = require("path");
const { defineConfig } = require("vite");

const getPackageName = () => {
  try {
    return packageJson.name.replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

module.exports = defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: getPackageName(),
      formats: ["es", "cjs", "iife"],
      fileName: (format) =>
        format === "es" ? "my-lib.mjs" : `my-lib.${format}.js`,
    },
  },
});
