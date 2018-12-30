const sendInfo = require('../libs/sendInfoToUser');
const getElmenet = require('../libs/getElement');
const setStyle = require('../libs/setStyle');
const { OptionsError } = require('../errors');

module.exports = (target, options) => {
	const box = getElmenet(target);

	if (!box) {
		sendInfo('There is some error in terget name', 0);
		throw new OptionsError(`Your target ${target} is not defined`);
	} else setStyle(box, options);

	return box;
};
