const setSlides = require('./setSlide');
const setNavBar = require('./setNavBar');
const setArrows = require('./setArrows');

module.exports = (box, options) => {
	let slides = {};
	let navBar = null;
	let arrows = null;

	try {
		slides = setSlides(box, options);

		if (options.navBar) navBar = setNavBar(box, options, slides.children.length);
		if (options.navArrows) arrows = setArrows(box, options);
	} catch (err) {
		console.warn('Error during setup of slides and/or navbar.');
		console.error(err);
	}

	return {
		slides,
		navBar,
		arrows,
	};
};
