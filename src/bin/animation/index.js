const frames = require('./frames');
const promise = require('../../libs/promise');
const getDelay = require('../../libs/getDelay');
const getTape = require('./getTape');


module.exports = (direction, wrapper, options, activeSlide) => {
	const { slideTape, navTape, tapeD } = getTape(direction, wrapper, activeSlide, options.dotIndex);
	const delay = getDelay(options.slideAnimation.active, options.slideAnimation.next);

	if (slideTape.now === slideTape.next) return promise(0);

	frames(slideTape, (tapeD === 'next' ? options.slideAnimation : options.slideAnimationRev));

	if (wrapper.navBar) {
		frames(navTape, {
			active: [options.navBarStyle.dots.usual],
			next: [options.navBarStyle.dots.active],
		});
	}
	if (wrapper.arrows) {
		frames({
			now: { style: {} },
			next: wrapper.arrows[`arrow${tapeD === 'next' ? 'Next' : 'Prev'}`].firstChild,
		},
		{
			active: [{ '': '' }],
			next: [
				options.arrowsStyle.arrows.active,
				options.arrowsStyle.arrows.usual,
			],
		});
	}

	return promise(delay);
};