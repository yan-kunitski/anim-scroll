const config = require('./config');
const validateOptions = require('./bin/validateOptions');
const init = require('./bin/init');
const tuneBox = require('./bin/tuneBox');
const onEvent = require('./bin/onEvent');
const animation = require('./bin/animation');

class SnapScroll {
	constructor(target, options = config) {
		this._target = target;
		this._activeSlide = { value: 0 };
		this._options = validateOptions(options);
		this._box = init(this._target, this._options.targetStyle);
		this._ss = tuneBox(this._box, this._options);

		onEvent(this._ss, this._options, this._activeSlide);
	}

	goTo(slideIndex) {
		return new Promise(resolve => {
			animation(slideIndex, this._ss, this._options, this._activeSlide)
				.then(() => resolve());
		});
	}

	next() { return this.goTo(this._activeSlide.value + 1); }

	prev() { return this.goTo(this._activeSlide.value - 1); }
}

module.exports = SnapScroll;
