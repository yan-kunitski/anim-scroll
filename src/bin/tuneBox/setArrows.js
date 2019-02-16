import setStyle from '../../libs/setStyle';
import getElement from '../../libs/getElement';
import setSsClick from './setSsClick';

export default (box, options) => {
	const arrow = getElement(options.arrowStyle.arrows.shape);
	const arrowNext = document.createElement('div');
	const prevTransform = options.arrowStyle.arrows.usual.transform;
	let arrowPrev = {};

	setStyle(arrow, options.arrowStyle.arrows.usual);
	arrowNext.appendChild(arrow);
	setStyle(arrowNext, options.arrowStyle.wrapper);
	arrowNext.style.position = 'absolute';
	arrowPrev = arrowNext.cloneNode(true);
	arrowPrev.style.transform = `rotate(180deg) ${prevTransform || ''}`;
	setStyle(arrowNext, options.arrowStyle.arrowsPositions.next);
	setStyle(arrowPrev, options.arrowStyle.arrowsPositions.prev);
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
