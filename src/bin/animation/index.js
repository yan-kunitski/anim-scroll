const frames = require('./frames');
const promise = require('../../libs/promise');
const getTape = require('./getTape');

module.exports = (direction, wrapper, options, activeSlide) => {
	try {
		const { slideTape, navTape, tapeD } = getTape(direction, wrapper, activeSlide, options.dotIndex, options.infinite);

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
					options.arrowStyle.arrows.active,
					options.arrowStyle.arrows.usual,
				],
			});
		}
	} catch (err) {
		console.warn('Animation error.');
		console.error(err);
	}

	return promise(options.animDuration);
};
