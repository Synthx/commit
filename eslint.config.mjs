import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores([".astro", "dist", ".netlify"]),
  js.configs.recommended,
  eslintPluginAstro.configs.recommended,
]);
