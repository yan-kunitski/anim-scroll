module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					ie: '9',
				},
			},
		],
	],
	plugins: [
		['@babel/plugin-transform-runtime', {
			helpers: false,
			corejs: false,
			regenerator: true,
			useESModules: false,
		}],
	],
};
