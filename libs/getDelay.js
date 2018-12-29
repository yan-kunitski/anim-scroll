let OptionsError = require('../errors/index').OptionsError,
    sendInfo = require('../libs/sendInfoToUser')

function compute(options) {
    if(!options) return 0
    
    if(typeof options === 'string') options = [{transition: options}]

    let reg = /(\d+)?(\.)?(\d+)(s|ms)/g,
        parsedArray = [],
        multiplier = 0,
        delay = 0

    options.forEach(obj => parsedArray = [...parsedArray, ...obj.transition.match(reg)])

    parsedArray.forEach(str => {
        str.indexOf('.') === 0 ? (str = '0' + str) : ''
        str.indexOf('ms') !== -1 ? (multiplier = 1) : (multiplier = 1000)
        
        delay += parseFloat(str) * multiplier
    })

    return delay
}

module.exports = (...args) => {
    let delay = 0,
        computed

    try {
        args.forEach(el => {
            computed = compute(el)
            
            if(computed > delay) delay = computed 
        })

        return delay
    }
    catch(err) {
        sendInfo('Error in transition options', 0)
        
        throw new OptionsError(err)
    }
}
