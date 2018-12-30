const { OptionsError } = require('../errors/');
const sendInfo = require('../libs/sendInfoToUser');

function compute(options) {
	if (!options) return 0;
	if (typeof options === 'string') options = [{ transition: options }];

	const reg = /(\d+)?(\.)?(\d+)(s|ms)/g;
	let parsedArray = [];
	let multiplier = 0;
	let delay = 0;

	options.forEach(obj => { parsedArray = [...parsedArray, ...obj.transition.match(reg)]; });
	parsedArray.forEach(str => {
		str = str.indexOf('.') === 0 ? `0${str}` : str;
		multiplier = str.indexOf('ms') !== -1 ? 1 : 1000;
		delay += parseFloat(str) * multiplier;
	});

	return delay;
}

module.exports = (...args) => {
	let delay = 0;
	let computed;

	try {
		args.forEach(el => {
			computed = compute(el);
			if (computed > delay) delay = computed;
		});

		return delay;
	} catch (err) {
		sendInfo('Error in transition options', 0);
		throw new OptionsError(err);
	}
};
