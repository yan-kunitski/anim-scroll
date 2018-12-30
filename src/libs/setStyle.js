module.exports = (box, obj) => {
	for (const key of Object.keys(obj)) {
		if (key === 'transition') continue;
		box.style[key] = obj[key];
	}
};
