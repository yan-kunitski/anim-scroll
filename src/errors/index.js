class OptionsError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}

class AnimationError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}

module.exports.OptionsError = OptionsError;
module.exports.AnimationError = AnimationError;
