const source000 = `:root {
	--SystemType: systsem-ui;
	--SystemMonoType: ui-monospace;

	cursor: default;
	line-height: 1.5;
	overflow-wrap: break-word;
	-moz-tab-size: 4;
	tab-size: 4;
	-webkit-tap-highlight-color: transparent;
	-webkit-text-size-adjust: 100%;
}`

const source001 = `.actions a {
	display: inline-block;

	/* Layout */
	align-self: center;
	inline-size: 35--step;

	/* Text */
	text-align: end;
	white-space: nowrap;
	color: var(--Orange600Color);

	--color: Orange;
}`

const expect001 = `.actions a {
	display: inline-block;

	/* Layout */
	align-self: center;
	inline-size: 35--step;

	/* Text */
	text-align: end;
	white-space: nowrap;

	/* Appearance */
	color: var(--Orange600Color);

	--color: Orange;
}`

const source002 = `.example {
	align-self: center;
	display: inline-block;
	inline-size: 8.75em;

	white-space: nowrap;

	text-align: end;
	color: var(--Orange600Color);
}`

const source003 = `.aside::before {
	background-position: top 1rem center;
	background-repeat: no-repeat;
	border-end-start-radius: 0.375rem;
	border-start-start-radius: 0.375rem;
	content: "";
	width: 0.875em;
}`

const source004 = `.visually-hidden {
	all: unset !important;
	clip-path: inset(50%) !important;
	height: 1px !important;
	margin: -1px !important;
	pointer-events: none !important;
	position: fixed !important;
	width: 1px !important;
}`

const expect004 = `.visually-hidden {
	all: unset !important;
	position: fixed !important;

	/* Layout */
	clip-path: inset(50%) !important;
	height: 1px !important;
	margin: -1px !important;
	width: 1px !important;

	/* Behavior */
	pointer-events: none !important;
}`

module.exports = {
	'csstools/devtool-prop-order': [
		{
			source: source000,
			expect: ``,
		},
		// {
		// 	source: source001,
		// 	warnings: [
		// 		'Expected an empty line before property "color" (order/properties-order)',
		// 	],
		// },
		// {
		// 	source: source001,
		// 	expect: expect001,
		// },
		// {
		// 	source: source002,
		// 	warnings: [
		// 		`Expected "display" to come before "align-self" in group "Display" (order/properties-order)`,
		// 		`Expected "text-align" to come before "white-space" in group "Text" (order/properties-order)`,
		// 		`Expected an empty line before property "display" (order/properties-order)`,
		// 		`Expected an empty line before property "inline-size" (order/properties-order)`,
		// 		`Expected an empty line before property "color" (order/properties-order)`,
		// 	],
		// },
		// {
		// 	source: source003,
		// 	warnings: [
		// 		`Expected "content" to come before "border-start-start-radius" in group "Generated" (order/properties-order)`,
		// 		`Expected "width" to come before "content" in group "Layout" (order/properties-order)`,
		// 		`Expected an empty line before property "border-end-start-radius" (order/properties-order)`,
		// 		`Expected an empty line before property "content" (order/properties-order)`,
		// 		`Expected an empty line before property "width" (order/properties-order)`,
		// 	],
		// },
		// {
		// 	source: source004,
		// 	warnings: [
		// 		`Expected "position" to come before "pointer-events" in group "Display" (order/properties-order)`,
		// 		`Expected an empty line before property "clip-path" (order/properties-order)`,
		// 		`Expected an empty line before property "pointer-events" (order/properties-order)`,
		// 		`Expected an empty line before property "position" (order/properties-order)`,
		// 		`Expected an empty line before property "width" (order/properties-order)`,
		// 	],
		// },
		// {
		// 	source: source004,
		// 	expect: expect004,
		// },
	]
};
