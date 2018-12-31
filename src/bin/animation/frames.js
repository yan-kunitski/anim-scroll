const steps = require('./engine');

module.exports = (tape, options) => Promise.all([
	steps(tape.now, options.active),
	steps(tape.next, options.next),
]);
