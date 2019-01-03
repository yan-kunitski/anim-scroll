module.exports = (box, value) => {
	box.ssClick = value;
	if (box.children[1]) for (const el of box.children) module.exports(el, value);
};
