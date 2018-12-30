class OptionsError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}

class RenderError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}

module.exports.OptionsError = OptionsError;
module.exports.RenderError = RenderError;
