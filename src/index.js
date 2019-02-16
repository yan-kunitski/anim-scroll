import config from './config';
import validateOptions from './bin/validateOptions';
import init from './bin/init';
import tuneBox from './bin/tuneBox';
import onEvent from './bin/onEvent';
import animation from './bin/animation';

const build = (instance, target, options) => {
	instance._target = target;
	instance._box = init(instance._target);
	instance._options = validateOptions(options, instance._box);
	instance._initial = instance._box.cloneNode(true);
	instance._parent = instance._initial.parentElement || document.body;
	instance._ss = tuneBox(instance._box, instance._options);
	instance._activeSlide = { value: instance._options.whereToBegin };
	onEvent(instance._ss, instance._options, instance._activeSlide);

	if (options.autoScroll || options.autoScroll === 0) instance.auto(instance._options.autoScroll);
};

const destroy = instance => {
	instance._parent.replaceChild(instance._initial, instance._box);

	if (instance._target instanceof Element) instance._target = instance._initial;
};

class AnimScroll {
	constructor(target, options = config) {
		build(this, target, options);
	}

	get target() {
		return this._target;
	}

	get options() {
		return this._options;
	}

	get activeSlide() {
		return this._activeSlide.value;
	}

	set target(name) {
		destroy(this);
		build(this, name, this._options);
	}

	set options(obj) {
		destroy(this);
		obj.whereToBegin = this._activeSlide.value;
		build(this, this._target, obj);
	}

	goTo(slideIndex) {
		return new Promise(resolve => {
			animation(slideIndex, this._ss, this._options, this._activeSlide)
				.then(() => resolve());
		});
	}

	next() { return this.goTo('next'); }

	prev() { return this.goTo('prev'); }

	auto(delay, direction = 'next') {
		const interval = this._options.animDuration + (delay || 0);

		return new Promise(resolve => {
			const autoScroll = setInterval(() => {
				if (!this._options.infinite && this._activeSlide.value === this._options.lastSI) {
					resolve();
					clearInterval(autoScroll);
				}
				this.goTo(direction);
			}, interval);
		});
	}
}

export default AnimScroll;
