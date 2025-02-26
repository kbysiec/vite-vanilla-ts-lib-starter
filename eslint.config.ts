import eslint from "@eslint/js";
import type { Linter } from "eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      "**/.history",
      "**/.husky",
      "**/.vscode",
      "**/coverage",
      "**/dist",
      "**/node_modules",
    ],
  },
  {
    plugins: {
      typescriptEslint: tseslint.plugin,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
] satisfies Linter.Config[];
