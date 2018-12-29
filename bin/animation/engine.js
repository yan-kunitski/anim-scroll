let promise = require('../../libs/promise'),
    getDelay = require('../../libs/getDelay'),
    setStyle = require('../../libs/setStyle') 

function step (box, options) {
    box.style.transition = options.transition
    
    setStyle(box, options)

    return promise(getDelay(options.transition))
}

module.exports = async (box, options) => {
    for(let el of options) await step(box, el)   
}
