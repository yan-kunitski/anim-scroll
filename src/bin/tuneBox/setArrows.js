const setStyle = require('../../libs/setStyle');
const getElement = require('../../libs/getElement');
const setSsClick = require('./setSsClick');

module.exports = (box, options) => {
	const arrow = getElement(options.arrowsStyle.arrows.shape);
	const arrowNext = document.createElement('div');
	const prevTransform = options.arrowsStyle.arrows.usual.transform;
	let arrowPrev = {};

	setStyle(arrow, options.arrowsStyle.arrows.usual);
	arrowNext.appendChild(arrow);
	setStyle(arrowNext, options.arrowsStyle.wrapper);
	arrowNext.style.position = 'absolute';
	arrowPrev = arrowNext.cloneNode(true);
	arrowPrev.style.transform = `rotate(180deg) ${prevTransform || ''}`;
	setStyle(arrowNext, options.arrowsStyle.arrowsPositions.next);
	setStyle(arrowPrev, options.arrowsStyle.arrowsPositions.prev);
	box.appendChild(arrowPrev);
	box.appendChild(arrowNext);
	setSsClick(arrowPrev, 'prev');
	setSsClick(arrowNext, 'next');

	const block = document.createElement('div');

	block.style.height = `${arrowNext.offsetHeight}px`;
	block.style.width = `${arrowNext.offsetWidth}px`;
	block.style.position = 'absolute';
	block.style.top = '0';
	block.style.display = 'none';
	arrowNext.appendChild(block.cloneNode());
	arrowPrev.appendChild(block);

	return {
		arrowNext,
		arrowPrev,
	};
};
