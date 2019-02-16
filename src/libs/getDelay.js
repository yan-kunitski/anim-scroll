import { OptionsError } from '../errors/index';

export default arr => {
	let delay = 0;
	try {
		if (!arr) return 0;
		if (typeof arr === 'string') arr = [{ transition: arr }];

		arr.forEach(el => { el.transition.match(/(\d*\.?\d+(s|ms))/g).forEach(d => { delay += parseFloat(d) * (/ms/.test(d) ? 1 : 1000); }); });
	} catch (err) { throw new OptionsError(`Error in transition options ${err}`); }

	return delay;
};
