import scroll from './scroll';
import click from './click';
import touch from './touch';
import hover from './hover';

export default (elements, options, activeSlide) => {
	try {
		if (options.isMobile) touch(elements, options, activeSlide);
		else scroll(elements, options, activeSlide);

		hover(elements, options, activeSlide);
		click(elements, options, activeSlide);
	} catch (err) {
		console.warn('Event error.');
		console.error(err);
	}
};
