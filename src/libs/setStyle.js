export default (box, obj) => {
	box.style.transition = obj.transition || '0s';
	Object.assign(box.style, obj);
};
