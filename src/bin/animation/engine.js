const promise = require('../../libs/promise');
const getDelay = require('../../libs/getDelay');
const setStyle = require('../../libs/setStyle');

function step(box, options) {
	box.style.transition = options.transition;
	setStyle(box, options);

	return promise(getDelay(options.transition));
}

module.exports = async (box, options) => {
	for (const el of options) await step(box, el);
};
