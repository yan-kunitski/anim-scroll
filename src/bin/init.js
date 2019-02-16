import getElmenet from '../libs/getElement';
import { OptionsError } from '../errors';

export default target => {
	const box = getElmenet(target);

	if (!box) {
		console.warn('There is some error in terget name');
		throw new OptionsError(`Your target [${target}] is not defined`);
	}

	return box;
};
