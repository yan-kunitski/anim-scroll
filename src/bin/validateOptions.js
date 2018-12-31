const config = require('../config');
const { OptionsError } = require('../errors');

function validateFields(options, conf) {
	for (const el in conf) {
		if (Object.prototype.hasOwnProperty.call(conf, el)) {
			if (!options[el]) {
				options[el] = conf[el];
				continue;
			}
			if (el === 'active' || el === 'next') {
				if (options[el].length < 2) throw new OptionsError('The minimum number of animation steps is 2');
				if (options[el].length > 0) continue;
			}
			if (options[el] instanceof Object) {
				validateFields(options[el], conf[el]);
			}
		}
	}
}

function setRev(options) {
	const frames = JSON.parse(JSON.stringify(options));
	const animLength = options.length;
	let index = 0;

	frames.reverse().map((el, i) => {
		index = i === 0 ? i : animLength - i;
		el.transition = options[index].transition;

		return el;
	});

	return frames;
}

const setDelaySlide = (arr, options) => { arr.unshift({ transition: `0s ${options.slideAnimation.delayBetweenSlides}` }); };

module.exports = options => {
	validateFields(options, config);
	options.slideAnimationRev = {
		active: setRev(options.slideAnimation.next),
		next: setRev(options.slideAnimation.active),
	};
	setDelaySlide(options.slideAnimation.next, options);
	setDelaySlide(options.slideAnimationRev.next, options);

	return options;
};
