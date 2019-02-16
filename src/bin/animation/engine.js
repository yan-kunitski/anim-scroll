import promise from '../../libs/promise';
import setStyle from '../../libs/setStyle';

function step(box, options) {
	setStyle(box, options);

	return promise(options.trms);
}

async function steps(box, options) { for (const el of options) await step(box, el); }

export default (tape, options) => Promise.all([
	steps(tape.now, options.active),
	steps(tape.next, options.next),
]);
