export class OptionsError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}

export class AnimationError extends Error {
	constructor(msg) {
		super();
		this.message = msg;
		Error.captureStackTrace(this);
	}
}
