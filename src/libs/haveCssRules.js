const haveRules = (name, styleSheet) => {
	const rules = styleSheet.rules || styleSheet.cssRules;
	let rule;
	let mRule;

	for (const r of rules) {
		if (r instanceof CSSMediaRule && window.matchMedia(r.media.mediaText).matches) {
			mRule = haveRules(name, r);
		} else if (r instanceof CSSStyleRule && r.selectorText === name) rule = r.style;
		if (rule && mRule) {
			Object.assign(rule, mRule);
			break;
		}
	}

	return rule;
};

export default name => {
	let rule;

	for (const styles of document.styleSheets) {
		try {
			rule = haveRules(name, styles);
			if (rule) break;
		} catch (err) { continue; }
	}

	return rule;
};
