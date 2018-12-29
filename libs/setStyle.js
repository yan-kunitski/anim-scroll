module.exports = (box, obj) => {
    for(let key of Object.keys(obj)) {
        if(key === 'transition') continue    

        box.style[key] = obj[key]
    }
}
