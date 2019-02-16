const f = (box, value) => {
	box.ssClick = value;
	if (box.children[0]) for (const el of box.children) f(el, value);
};

export default f;
