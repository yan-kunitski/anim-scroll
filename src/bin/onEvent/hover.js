let setStyle = require('../../libs/setStyle')

module.exports = (wrapper, options, activeSlide) => {
	let evOver = options.isMobile ? 'touchstart' : 'mouseover',
		evOut = options.isMobile ? 'touchend' : 'mouseout',
		state = '',
		zIndex = '',
		opacity = 0,
		nB = wrapper.navBar ? wrapper.navBar.children : {},
		nS = wrapper.navBar ? options.navBarStyle.dots : {},
		aR = wrapper.arrows || {},
		aS = wrapper.arrows ? options.arrowsStyle.arrows : {}

	if(wrapper.navBar) {
		for(let i = 0; i < nB.length - 1; i++) {
			nB[i].children[options.dotIndex].addEventListener(evOver, onOver)
			nB[i].children[options.dotIndex].addEventListener(evOut, onOut)
		}
	}

	if(wrapper.arrows) {
		aR.arrowNext.addEventListener(evOver, onOver)
		aR.arrowNext.addEventListener(evOut, onOut)
		aR.arrowPrev.addEventListener(evOver, onOver)
		aR.arrowPrev.addEventListener(evOut, onOut)
	}

	function handler(i) {
		if(typeof i === 'number' && wrapper.navBar) {
			nB[i].children[options.dotIndex].style.transition = nS[state].transition
			setStyle(nB[i].children[options.dotIndex], nS[state])
			
			nB[i].children[options.hintIndex].style.zIndex = zIndex
			nB[i].children[options.hintIndex].style.opacity = opacity
		}
		if(typeof i === 'string' && wrapper.arrows) {
			aR[`arrow${i === 'next' ? 'Next' : 'Prev'}`].firstChild.style.transition = aS[state].transition
			setStyle(aR[`arrow${(i === 'next' ? 'Next' : 'Prev')}`].firstChild, aS[state])
		}
	}
		
	function onOver(e) {
		if(e.target.ssClick === activeSlide.value) state = 'active'
		else state = 'hover'

		zIndex = 'auto'
		opacity = 1

		handler(e.target.ssClick)
	}
	
	function onOut(e) {
		if(e.target.ssClick === activeSlide.value) state = 'active'
		else state = 'usual'

		zIndex = '-10'
		opacity = 0

		handler(e.target.ssClick)
	}
}
