import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const base = {
	input: 'src/index.js',
	output: {
		format: 'iife',
		file: 'build/anim',
		name: 'AnimScroll',
	},
	plugins: [
		json(),
		resolve(),
	],
};
const babelOpt = {
	babelrc: false,
	comments: false,
	exclude: 'node_modules/**',
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
	plugins: [],
};

export default env => {
	if (/polyfill/.test(env.globals)) {
		base.output.file += '.polyfill';
		babelOpt.presets[0][1].targets = { ie: '10' };
		babelOpt.plugins.push(['@babel/plugin-transform-runtime', { helpers: false }]);
		base.plugins.push(commonjs({ include: 'node_modules/**' }));
	}

	if (/min/.test(env.globals)) {
		base.output.file += '.min';
		base.plugins.push(terser());
	}

	base.output.file += '.js';
	base.plugins.push(babel(babelOpt));

	return base;
};
