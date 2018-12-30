const setBlock = require('./setBlock');
const animation = require('../animation');

module.exports = (wrapper, options, activeSlide) => {
	let direction = '',
		key = options.navBarStyle.wrapper.direction === 'column' ? 'pageY' : 'pageX',
		start = 0
	
	function handler(e) {
		if(e.changedTouches[0][key] < start - options.scrollSensitivity) direction = 'next'
		else if(e.changedTouches[0][key] > start + options.scrollSensitivity) direction = 'prev'	
		else return

		if(direction) {
			options.scrollSensitivity += 7680
			
			if(wrapper.navBar) setBlock(wrapper.navBar, 'block')
			
			if(wrapper.arrows) {
				setBlock(wrapper.arrows.arrowNext, 'block')
				setBlock(wrapper.arrows.arrowPrev, 'block')
			}

			animation(direction, wrapper, options, activeSlide)
				.then(() => {
					direction = ''

					if(wrapper.navBar) setBlock(wrapper.navBar, 'none')
					
					if(wrapper.arrows) {
						setBlock(wrapper.arrows.arrowNext, 'none')
						setBlock(wrapper.arrows.arrowPrev, 'none')
					}

					options.scrollSensitivity -= 7680
				})
		}
    }
	
	wrapper.slides.addEventListener('touchstart', (e) => start = e.touches[0][key])
	wrapper.slides.addEventListener('touchend', handler)
}
