const setStyle = require('../../libs/setStyle');
const getElement = require('../../libs/getElement');
const setSsClick = require('./setSsClick');

module.exports = (box, options, amount) => {
	const navBar = document.createElement('div');
	const dotWrapper = document.createElement('div');
	const dot = getElement(options.navBarStyle.dots.shape);
	let hint = {};

	setStyle(navBar, options.navBarStyle.wrapper);
	navBar.style.display = 'flex';
	navBar.style.flexDirection = options.navBarStyle.wrapper.direction;
	box.appendChild(navBar);
	setStyle(dotWrapper, options.navBarStyle.dots.wrapper);
	dotWrapper.style.display = 'flex';
	dotWrapper.appendChild(dot);

	if (options.hints) {
		hint = document.createElement('span');

		setStyle(hint, options.hintsStyle);
		hint.style.transition = options.hintsStyle.transition;
		hint.style.display = 'block';

		let pos = 0;
		let middle = 0;
		let func = '';
		let indent = '';
		let flexDir = '';
		let jC = '';
		let aI = '';

		options.hintIndex = 1;
		options.dotIndex = 0;

		if (options.navBarStyle.wrapper.direction === 'row') {
			pos = navBar.offsetTop;
			middle = box.offsetHeight / 2;
			hint.style.position = 'absolute';
			flexDir = 'column';
			aI = 'center';
			func = 'appendChild';

			if (pos < middle) indent = 'bottom';
			else indent = 'top';
		} else {
			pos = navBar.offsetLeft;
			middle = box.offsetWidth / 2;
			flexDir = 'row';
			aI = 'center';

			if (pos < middle) {
				func = 'appendChild';
				jC = 'flex-start';
				indent = 'marginLeft';
			} else {
				func = 'insertBefore';
				jC = 'flex-end';
				indent = 'marginRight';
				options.hintIndex = 0;
				options.dotIndex = 1;
			}
		}
		if (indent === 'top' || indent === 'bottom') {
			options.hintsStyle.indent = `${0 - parseFloat(options.hintsStyle.indent)}px`;
		}

		hint.style[indent] = options.hintsStyle.indent;
		hint.style.opacity = '0';
		hint.style.zIndex = '-10';
		dotWrapper.style.flexDirection = flexDir;
		dotWrapper.style.justifyContent = jC;
		dotWrapper.style.alignItems = aI;
		dotWrapper[func](hint, dotWrapper.firstChild);
	}

	let el = {};

	for (let i = 0; i < amount; i += 1) {
		if (i === 0) el = dotWrapper;
		else el = dotWrapper.cloneNode(true);

		setSsClick(el, i);
		el.children[options.hintIndex].textContent = options.hints[i];
		navBar.appendChild(el);
	}

	setStyle(dot, options.navBarStyle.dots.active);

	const block = document.createElement('div');

	block.style.height = `${navBar.offsetHeight}px`;
	block.style.width = `${navBar.offsetWidth}px`;
	block.style.position = 'absolute';
	block.style.display = 'none';
	navBar.appendChild(block);

	return navBar;
};
