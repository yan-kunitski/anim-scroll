const getElmenet = require('../libs/getElement');
const { OptionsError } = require('../errors');

module.exports = target => {
	const box = getElmenet(target);

	if (!box) {
		console.warn('There is some error in terget name');
		throw new OptionsError(`Your target [${target}] is not defined`);
	}

	return box;
};
