let scroll = require('./scroll'),
    click = require('./click'),
	touch = require('./touch'),
	hover = require('./hover')

module.exports = (elements, options, activeSlide) => {
	if(options.isMobile) touch(elements, options, activeSlide)
	else scroll(elements, options, activeSlide) 
	
	hover(elements, options, activeSlide)

	click(elements, options, activeSlide)
}
