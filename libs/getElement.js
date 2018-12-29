let OptionsError = require('../errors/index').OptionsError,
    setStyle = require('./setStyle')

function hasCssRules(options) {
	let className = '.' + options

	for(let el of document.styleSheets) {
		for(let rule of el.rules) {
			if(className === rule.selectorText) return true
		}
	}

	return false
}

module.exports = (options) => {
    if(options instanceof Element) {
        return options
    }
    else if(typeof options === 'string') {
        let elDOM = document.querySelector(options)

		if(elDOM) return elDOM

		else if(hasCssRules(options)) {
			elDOM = document.createElement('div')
			elDOM.classList.add(options)

			return elDOM
		}

        else throw new OptionsError(`Element [${options}] not found`)
    }
    else {
        let shape = document.createElement('div')
		setStyle(shape, options)

		return shape
    }
}
