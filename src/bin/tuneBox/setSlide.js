const setStyle = require('../../libs/setStyle');

module.exports = (box, options) => {
	const wrapper = document.createElement('div');
	const childs = [...box.children];

	box.appendChild(wrapper);
	box.style.overflow = 'hidden';
	box.style.position = 'relative';
	setStyle(wrapper, options.slideStyle);
	wrapper.style.position = 'relative';
	wrapper.style.overflow = 'hidden';

	for (let i = 0; i < childs.length; i += 1) {
		childs[i].style.height = '100%';
		childs[i].style.width = '100%';
		childs[i].style.position = 'absolute';
		if (i !== 0) setStyle(childs[i], options.slideAnimation.next[1]);
		else childs[i].style.transition = options.slideAnimation.active[0].transition;
		wrapper.appendChild(childs[i]);
	}

	return wrapper;
};
