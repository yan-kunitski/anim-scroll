let setStyle = require('../../libs/setStyle')

module.exports = (direction, wrapper, activeSlide, dotIndex) => {
    let slideNow = wrapper.slides.children[activeSlide.value],
		navBarNow = wrapper.navBar ? wrapper.navBar.children[activeSlide.value].children[dotIndex] : {},
		d = 0,
		obj = {
			tapeDirection: '',
			slideTape: {
				now: {},
				next: {}
			},
			navBarTape: {}
		}

    if(direction === 'next' && activeSlide.value < wrapper.slides.children.length -1) {
        activeSlide.value++
    }
    
    if(direction === 'prev' && activeSlide.value > 0) {
        activeSlide.value--
    }

    if(typeof direction === 'number') {
        d = direction
        
        direction > activeSlide.value ? (direction = 'next') : (direction = 'prev')

		activeSlide.value = d
	}

	obj.tapeDirection = direction
	obj.slideTape.now = slideNow
	obj.slideTape.next = wrapper.slides.children[activeSlide.value]
	
	if(wrapper.navBar) {
		obj.navBarTape.now = navBarNow
		obj.navBarTape.next = wrapper.navBar.children[activeSlide.value].children[dotIndex]
	}
	
    return obj
}
