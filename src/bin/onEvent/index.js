const scroll = require('./scroll');
const click = require('./click');
const touch = require('./touch');
const hover = require('./hover');

module.exports = (elements, options, activeSlide) => {
	if (options.isMobile) touch(elements, options, activeSlide);
	else scroll(elements, options, activeSlide);

	hover(elements, options, activeSlide);
	click(elements, options, activeSlide);
};
