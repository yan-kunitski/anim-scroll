const setSlides = require('./setSlide');
const setNavBar = require('./setNavBar');
const setArrows = require('./setArrows');
const sendInfo = require('../../libs/sendInfoToUser');

module.exports = (box, options) => {
	let slides = {};
	let navBar = null;
	let arrows = null;

	try {
		slides = setSlides(box, options);

		if (options.navBar) navBar = setNavBar(box, options, slides.children.length);
		if (options.navBarArrows) arrows = setArrows(box, options);
	} catch (err) { sendInfo(`Error during setup of slides and/or navbar ${err}`); }

	return {
		slides,
		navBar,
		arrows,
	};
};
