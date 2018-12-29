class SnapError extends Error {
    constructor(msg){
        super()
        this.message = msg
        Error.captureStackTrace(this)
    }
}
class OptionsError extends SnapError {
    constructor(msg) {
        super(msg)   
    }
}

class RenderError extends SnapError {
    constructor(msg) {
        super(msg)
    }
}
class EventError extends SnapError {
    constructor(msg) {
        super(msg)
    }
}

module.exports.OptionsError = OptionsError
module.exports.RenderError = RenderError
module.exports.EventError = EventError
