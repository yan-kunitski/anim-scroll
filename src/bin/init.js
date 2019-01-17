const sendInfo = require('../libs/sendInfoToUser');
const getElmenet = require('../libs/getElement');
const { OptionsError } = require('../errors');

module.exports = target => {
	const box = getElmenet(target);

	if (!box) {
		sendInfo('There is some error in terget name', 0);
		throw new OptionsError(`Your target [${target}] is not defined`);
	}

	return box;
};
