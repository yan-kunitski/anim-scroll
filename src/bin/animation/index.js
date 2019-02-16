import engine from './engine';
import promise from '../../libs/promise';
import getTape from './getTape';

export default (direction, wrapper, options, activeSlide) => {
	try {
		const { slideTape, navTape, tapeD } = getTape(direction, wrapper, activeSlide, options.dotIndex, options.infinite);

		if (slideTape.now === slideTape.next) return promise(0);

		engine(slideTape, (tapeD === 'next' ? options.slideAnimation : options.slideAnimationRev));

		if (wrapper.navBar) {
			engine(navTape, {
				active: [options.navBarStyle.dots.usual],
				next: [options.navBarStyle.dots.active],
			});
		}
		if (wrapper.arrows) {
			engine({
				now: { style: {} },
				next: wrapper.arrows[`arrow${tapeD === 'next' ? 'Next' : 'Prev'}`].firstChild,
			},
			{
				active: [{ trms: 0 }],
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
