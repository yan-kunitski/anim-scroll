const config = require('../config');
const isMobile = require('../libs/isMobile');
const styleSheetToObj = require('../libs/styleSheetToObj');
const sendInfoToUser = require('../libs/sendInfoToUser');
const { OptionsError } = require('../errors');

const concatTr = (tr = '0s', delay = '0s') => `${tr} ${delay}`;

function fieldCorrection(options) {
	if (typeof options === 'string') {
		if (options[0] === '.') options = styleSheetToObj(options);
		else throw new OptionsError(`Expected class name, received string [${options}]`);
	} else if (options instanceof Object && options.transitionDelay) {
		options.transition = concatTr(options.transition, options.transitionDelay);
		delete options.transitionDelay;
	}

	return options;
}

function validateFields(options, conf) {
	for (const key in options) {
		if (options[key] instanceof Object && !/hints|hintStyle|shape|usual|hover|active|next|prev|wrapper/.test(key)) {
			validateFields(options[key], conf[key]);
		} else if (options[key] instanceof Array && key !== 'hints') {
			options[key].forEach((el, i) => { conf[key][i] = fieldCorrection(el); });
		} else conf[key] = fieldCorrection(options[key]);
	}
}

function setRev(options) {
	const frames = JSON.parse(JSON.stringify(options));
	const animLength = options.length;
	let index = 0;

	frames.reverse().map((el, i) => {
		index = i === 0 ? i : animLength - i;
		el.transition = options[index].transition;
		if (options[index].webkitTransition) el.webkitTransition = options[index].webkitTransition;
		return el;
	});

	return frames;
}

const setDelaySlide = (arr, delay) => { arr.splice(1, 0, { transition: `0s ${delay}ms` }); };

module.exports = options => {
	try {
		validateFields(options, config);
		config.slideAnimationRev = {
			active: setRev(config.slideAnimation.next),
			next: setRev(config.slideAnimation.active),
		};
		setDelaySlide(config.slideAnimation.next, config.delayBetweenSlides);
		setDelaySlide(config.slideAnimationRev.next, config.delayBetweenSlides);
		config.isMobile = isMobile();
	} catch (err) { sendInfoToUser(`Error during validation options ${err}`, 0); }

	return config;
};
