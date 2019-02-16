import setBlock from './setBlock';
import animation from '../animation';

export default (wrapper, options, activeSlide) => {
	const key = options.navBarStyle.wrapper.direction === 'column' ? 'pageY' : 'pageX';
	let direction = '';
	let start = 0;

	function handler(e) {
		if (e.changedTouches[0][key] < start - options.scrollSensitivity) direction = 'next';
		else if (e.changedTouches[0][key] > start + options.scrollSensitivity) direction = 'prev';
		else return;

		if (direction) {
			options.scrollSensitivity += 7680;
			if (wrapper.navBar) setBlock(wrapper.navBar, 'block');
			if (wrapper.arrows) {
				setBlock(wrapper.arrows.arrowNext, 'block');
				setBlock(wrapper.arrows.arrowPrev, 'block');
			}
			animation(direction, wrapper, options, activeSlide)
				.then(() => {
					direction = '';
					if (wrapper.navBar) setBlock(wrapper.navBar, 'none');
					if (wrapper.arrows) {
						setBlock(wrapper.arrows.arrowNext, 'none');
						setBlock(wrapper.arrows.arrowPrev, 'none');
					}
					options.scrollSensitivity -= 7680;
				});
		}
	}

	wrapper.slides.addEventListener('touchstart', e => { start = e.touches[0][key]; });
	wrapper.slides.addEventListener('touchend', handler);
};
