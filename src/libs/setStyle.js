module.exports = (box, obj) => {
	box.style.transition = obj.transition;
	Object.assign(box.style, obj);
};
