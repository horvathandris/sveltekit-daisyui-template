import sveltePlugin from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import storybookPlugin from "eslint-plugin-storybook";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...storybookPlugin.configs["flat/recommended"],
  ...tailwindPlugin.configs["flat/recommended"],
  ...sveltePlugin.configs["flat/recommended"],
  prettier,
  ...sveltePlugin.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/"],
  },
];
