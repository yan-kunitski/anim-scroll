import { OptionsError } from '../errors/index';
import setStyle from './setStyle';
import haveRules from './haveCssRules';

export default options => {
	if (options instanceof Element) return options;
	if (typeof options === 'string') {
		let elDOM = document.querySelector(options);

		if (elDOM) return elDOM;
		if (haveRules(options)) {
			elDOM = document.createElement('div');
			elDOM.classList.add(options);

			return elDOM;
		}
	}
	if (typeof options === 'object') {
		const shape = document.createElement('div');

		setStyle(shape, options);

		return shape;
	}
	throw new OptionsError(`Element [${options}] not found`);
};
