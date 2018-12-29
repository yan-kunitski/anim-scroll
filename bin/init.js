let sendInfo = require('../libs/sendInfoToUser'),
	getElmenet = require('../libs/getElement'),
	setStyle = require('../libs/setStyle')

module.exports = (target, options) => {
	let box = getElmenet(target)
	
    if(!box) {
        sendInfo('There is some error in terget name', 0)
        throw new OptionsError(`Your target ${target} is not defined`)
	}
	else setStyle(box, options)

    return box
}
