import eslintPluginSvelte from "eslint-plugin-svelte";
import js from "@eslint/js";
import tsEslintParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import eslintPluginStorybook from "eslint-plugin-storybook";

export default [
  {
    ignores: ["**/.svelte-kit/"],
  },
  js.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  ...eslintPluginSvelte.configs["flat/prettier"],
  ...eslintPluginStorybook.configs["flat/recommended"],
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslintParser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsEslintParser,
    },
  },
];
