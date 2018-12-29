let frames = require('./frames'),
    promise = require('../../libs/promise'),
	getDelay = require('../../libs/getDelay'),
    getTape = require('./getTape')


module.exports = (direction, wrapper, options, activeSlide) => {
	let {slideTape, navBarTape, tapeDirection} = getTape(direction, wrapper, activeSlide, options.dotIndex),
		delay = getDelay(options.slideAnimation.active, options.slideAnimation.next)
	
    if(slideTape.now === slideTape.next) return promise(0)
	
    frames(slideTape, (tapeDirection === 'next' ? options.slideAnimation : options.slideAnimationRev))
	
	if(wrapper.navBar) {
		frames(navBarTape, {
			active: [options.navBarStyle.dots.usual],
			next: [options.navBarStyle.dots.active]
		})
	}
	
	if(wrapper.arrows) {
		frames({
			now: {style: {}},
			next: wrapper.arrows[`arrow${tapeDirection === 'next' ? 'Next' : 'Prev'}`].firstChild
		}, 
		{
			active: [{'': ''}],
			next: [
				options.arrowsStyle.arrows.active,
				options.arrowsStyle.arrows.usual
			]
		})
	}

    return promise(delay)
}
