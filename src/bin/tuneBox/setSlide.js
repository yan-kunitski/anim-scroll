import setStyle from '../../libs/setStyle';

export default (box, options) => {
	const wrapper = document.createElement('div');
	const childs = [...box.children];

	setStyle(box, options.targetStyle);
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
		if (i === options.whereToBegin) childs[i].style.transition = options.slideAnimation.active[0].transition;
		else setStyle(childs[i], options.slideAnimation.next[0]);
		wrapper.appendChild(childs[i]);
	}

	return wrapper;
};
