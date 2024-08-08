import sveltePlugin from "eslint-plugin-svelte";
import js from "@eslint/js";
import ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import storybookPlugin from "eslint-plugin-storybook";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default [
  {
    ignores: ["**/.svelte-kit/"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...storybookPlugin.configs["flat/recommended"],
  ...tailwindPlugin.configs["flat/recommended"],
  ...sveltePlugin.configs["flat/recommended"],
  ...sveltePlugin.configs["flat/prettier"],
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
];
