const promise = require('../../libs/promise');
const getDelay = require('../../libs/getDelay');
const setStyle = require('../../libs/setStyle');

function step(box, options) {
	setStyle(box, options);

	return promise(getDelay(options.transition));
}

module.exports = async (box, options) => {
	for (const el of options) await step(box, el);
};
