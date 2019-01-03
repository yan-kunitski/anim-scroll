const { OptionsError } = require('../errors/');
const setStyle = require('./setStyle');

function hasCssRules(options) {
	const className = `.${options}`;

	for (const el of document.styleSheets) {
		for (const rule of el.rules) if (className === rule.selectorText) return true;
	}

	return false;
}

module.exports = options => {
	if (options instanceof Element) return options;
	if (typeof options === 'string') {
		let elDOM = document.querySelector(options);

		if (elDOM) return elDOM;
		if (hasCssRules(options)) {
			elDOM = document.createElement('div');
			elDOM.classList.add(options);

			return elDOM;
		}
	}
	if (typeof options === 'object') {
		const shape = document.createElement('div');

		setStyle(shape, options);

		return shape;
	}
	throw new OptionsError(`Element [${options}] not found`);
};
