module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				edge: '13',
				chrome: '50',
				firefox: '53',
				opera: '37',
				safari: '10',
			},
		}],
	],
};
