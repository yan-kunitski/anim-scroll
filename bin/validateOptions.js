let config = require('../config'),
    OptionsError = require('../errors').OptionsError

function validateFields(options, config) {
    for(let el in config) {
        if(!options[el]) {
            options[el] = config[el]
            continue
        }
        
        if(el === 'active' || el === 'next') {
            if(options[el].length < 2) throw new OptionsError('The minimum number of animation steps is 2')
            if(options[el].length > 0) continue
        }

        if(options[el] instanceof Object) {
            validateFields(options[el], config[el])
        }
    }
}

function setPrev(options) {

    let active = JSON.parse(JSON.stringify(options.slideAnimation.active)),
        next = JSON.parse(JSON.stringify(options.slideAnimation.next))

    function reverse(arr, tr) {
        let s = ''

        arr.reverse().map((el, i) => {
            if(!tr[i]) s = tr[1].transition
            else s = tr[i].transition
            
            el.transition = s
            
            return el
        })
	}   
    
    reverse(active, options.slideAnimation.next)
    reverse(next, options.slideAnimation.active)
    
    options.slideAnimationRev = {
        active: next,
        next: active
	}
}

module.exports = (options) => {
    validateFields(options, config)

	setPrev(options)
	
	return options
}
