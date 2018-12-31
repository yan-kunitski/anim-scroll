const setStyle = require('../../libs/setStyle');

module.exports = (wrapper, options, activeSlide) => {
	const evOver = options.isMobile ? 'touchstart' : 'mouseover';
	const evOut = options.isMobile ? 'touchend' : 'mouseout';
	const nB = wrapper.navBar ? wrapper.navBar.children : {};
	const nS = wrapper.navBar ? options.navBarStyle.dots : {};
	const aR = wrapper.arrows || {};
	const aS = wrapper.arrows ? options.arrowsStyle.arrows : {};
	let state = '';
	let zIndex = '';
	let opacity = 0;

	function handler(i) {
		if (typeof i === 'number' && wrapper.navBar) {
			nB[i].children[options.dotIndex].style.transition = nS[state].transition;
			setStyle(nB[i].children[options.dotIndex], nS[state]);
			nB[i].children[options.hintIndex].style.zIndex = zIndex;
			nB[i].children[options.hintIndex].style.opacity = opacity;
		}
		if (typeof i === 'string' && wrapper.arrows) {
			aR[`arrow${i === 'next' ? 'Next' : 'Prev'}`].firstChild.style.transition = aS[state].transition;
			setStyle(aR[`arrow${(i === 'next' ? 'Next' : 'Prev')}`].firstChild, aS[state]);
		}
	}

	function onOver(e) {
		if (e.target.ssClick === activeSlide.value) state = 'active';
		else state = 'hover';

		zIndex = 'auto';
		opacity = 1;
		handler(e.target.ssClick);
	}

	function onOut(e) {
		if (e.target.ssClick === activeSlide.value) state = 'active';
		else state = 'usual';

		zIndex = '-10';
		opacity = 0;
		handler(e.target.ssClick);
	}

	if (wrapper.navBar) {
		for (let i = 0; i < nB.length - 1; i += 1) {
			nB[i].children[options.dotIndex].addEventListener(evOver, onOver);
			nB[i].children[options.dotIndex].addEventListener(evOut, onOut);
		}
	}

	if (wrapper.arrows) {
		aR.arrowNext.addEventListener(evOver, onOver);
		aR.arrowNext.addEventListener(evOut, onOut);
		aR.arrowPrev.addEventListener(evOver, onOver);
		aR.arrowPrev.addEventListener(evOut, onOut);
	}
};
