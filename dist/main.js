//initialization by tag
//1 step setting div(set css styles)
//2 step get params from options obj to set div
//render divs and add event listeners
//run()
//additional folders:
//logger, errors, setOptions, sendErrors to user, animation of switcher
//(callbacks)
let sendInfo = require('../libs/sendInfoToUser'),
    config = require('../config'),
	{OptionsError, RenderError, RunError} = require('../errors'),
	validateOptions = require('../bin/validateOptions'),
    init = require('../bin/init'),
    tuneBox = require('../bin/tuneBox'),
    onEvent = require('../bin/onEvent'),
    animation = require('../bin/animation')

class SnapScroll {
    constructor(target, options = config) {
        this._target = target
        this._activeSlide = {value: 0}
		
        this._options = validateOptions(options)
        this._box = init(this._target, options.targetStyle),
        this._ss = tuneBox(this._box, this._options)
        
        onEvent(this._ss, this._options, this._activeSlide)
    }

	goTo(slideIndex) {
		return new Promise(resolve => {
			animation(slideIndex, this._ss, this._options, this._activeSlide)
				.then(() => resolve())			
		})
	}

    next() {return this.goTo(this._activeSlide.value + 1)}	
    

    prev() {return this.goTo(this._activeSlide.value - 1)}
}

module.exports = SnapScroll
