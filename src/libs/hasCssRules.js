module.exports = (name, styleSheet = document.styleSheets[0]) => {
	const rules = styleSheet.rules || styleSheet.cssRules;
	let rule;
	let mRule;

	for (const r of rules) {
		if (r instanceof CSSMediaRule && window.matchMedia(r.media.mediaText).matches) {
			mRule = module.exports(name, r);
		} else if (r instanceof CSSStyleRule && r.selectorText === name) rule = r.style;
		if (rule && mRule) {
			Object.assign(rule, mRule);
			break;
		}
	}

	return rule;
};
