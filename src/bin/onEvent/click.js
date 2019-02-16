import setBlock from './setBlock';
import animation from '../animation';

export default (wrapper, options, activeSlide) => {
	const ev = options.isMobile ? 'touchend' : 'click';

	function handler(e) {
		if (e.target.ssClick || e.target.ssClick === 0) {
			options.scrollSensitivity += 7680;

			if (wrapper.arrows) {
				setBlock(wrapper.arrows.arrowNext, 'block');
				setBlock(wrapper.arrows.arrowPrev, 'block');
			}
			if (wrapper.navBar) setBlock(wrapper.navBar, 'block');

			animation(e.target.ssClick, wrapper, options, activeSlide)
				.then(() => {
					if (wrapper.arrows) {
						setBlock(wrapper.arrows.arrowNext, 'none');
						setBlock(wrapper.arrows.arrowPrev, 'none');
					}
					if (wrapper.navBar) setBlock(wrapper.navBar, 'none');

					options.scrollSensitivity -= 7680;
				});
		}
	}

	if (wrapper.navBar) {
		for (let i = 0; i < wrapper.navBar.children.length - 1; i += 1) {
			wrapper.navBar.children[i].addEventListener(ev, handler);
		}
	}
	if (wrapper.arrows) {
		wrapper.arrows.arrowNext.addEventListener(ev, handler);
		wrapper.arrows.arrowPrev.addEventListener(ev, handler);
	}
};
