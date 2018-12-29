let setBlock = require('./setBlock'),
	animation = require('../animation')

module.exports = (wrapper, options, activeSlide) => {
	let direction = ''

    function handler(e) {
		if(e.deltaY > options.scrollSensitivity) direction = 'next'
		else if(e.deltaY < 0 - options.scrollSensitivity) direction = 'prev'
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
    
	wrapper.slides.addEventListener("wheel", handler)
}
