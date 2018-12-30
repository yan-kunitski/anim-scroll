module.exports = (msg, level = 1) => {
	switch (level) {
	case 1:
		console.warn(msg);
		break;

	case 0:
		console.error(msg);
		break;

	default:
		console.info(msg);
		break;
	}
};
