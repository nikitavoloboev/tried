/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
	semi: false,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 80,
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-packagejson',
		'prettier-plugin-curly',
		'prettier-plugin-jsdoc',
		'prettier-plugin-astro',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	importOrder: [
		'',
		'^react$',
		'^next(-[^/]+)?(/.*)?$',
		'',
		'<TYPES>',
		'<TYPES>^[.]',
		'',
		'<BUILTIN_MODULES>',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@orbitkit/(.*)$',
		'',
		'^@/(.*)$',
		'',
		'^[./]',
		'',
		'^(?!.*[.]css$)[./].*$',
		'.css$',
	],
	importOrderTypeScriptVersion: '5.4.5',
}

export default config
