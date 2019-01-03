const scroll = require('./scroll');
const click = require('./click');
const touch = require('./touch');
const hover = require('./hover');
const sendInfoToUser = require('../../libs/sendInfoToUser');

module.exports = (elements, options, activeSlide) => {
	try {
		if (options.isMobile) touch(elements, options, activeSlide);
		else scroll(elements, options, activeSlide);

		hover(elements, options, activeSlide);
		click(elements, options, activeSlide);
	} catch (err) { sendInfoToUser(`Event error ${err}`, 0); }
};
