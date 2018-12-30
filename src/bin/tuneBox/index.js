const setSlides = require('./setSlide');
const setNavBar = require('./setNavBar');
const setArrows = require('./setArrows');
const sendInfo = require('../../libs/sendInfoToUser');
const isMobile = require('./isMobile');

module.exports = (box, options) => {
	let slides = {};
	let navBar = null;
	let arrows = null;

	try {
		options.isMobile = isMobile();
		slides = setSlides(box, options);

		if (options.navBar) navBar = setNavBar(box, options, slides.children.length);
		if (options.navBarArrows) arrows = setArrows(box, options);
	} catch (err) {
		sendInfo('There is errors in options', 0);
		sendInfo(err, 0);
	}

	return {
		slides,
		navBar,
		arrows,
	};
};
