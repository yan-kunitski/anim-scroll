let setSlides = require('./setSlide'),
    setNavBar = require('./setNavBar'),
    setArrows = require('./setArrows'),
	sendInfo = require('../../libs/sendInfoToUser'),
	isMobile = require('./isMobile')

module.exports = (box, options) => {
    let slides = {},
        navBar = null,
        arrows = null

    try {
		options.isMobile = isMobile()

        slides = setSlides(box, options)
        
        if(options.navBar) navBar = setNavBar(box, options, slides.children.length)
        
        if(options.navBarArrows) arrows = setArrows(box, options)
    }
    catch(err) {
        sendInfo('There is errors in options', 0)
        sendInfo(err, 0)
    }

    return {
        slides,
		navBar,
		arrows
    }
}
