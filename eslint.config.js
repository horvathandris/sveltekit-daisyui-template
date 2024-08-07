import eslintPluginSvelte from "eslint-plugin-svelte";
import js from "@eslint/js";
import tsEslintParser from "@typescript-eslint/parser";

export default [
	{
		ignores: ["**/.svelte-kit/"],
	},
	{
		languageOptions: {
			parser: tsEslintParser,
		},
	},
	js.configs.recommended,
	...eslintPluginSvelte.configs["flat/recommended"],
	...eslintPluginSvelte.configs["flat/prettier"],
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.svelte"],
	},
];
