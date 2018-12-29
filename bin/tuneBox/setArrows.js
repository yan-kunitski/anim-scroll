let setStyle = require('../../libs/setStyle'),
	getElement = require('../../libs/getElement'),
	setSsClick = require('./setSsClick')

module.exports = (box, options) => {
	let arrow = getElement(options.arrowsStyle.arrows.shape),
		arrowNext = document.createElement('div'),
		arrowPrev = {},
		prevTransform =	options.arrowsStyle.arrows.usual.transform

	arrowNext.appendChild(arrow)

	setStyle(arrowNext, options.arrowsStyle.wrapper)
	arrowNext.style.position = 'absolute'
	
	arrowPrev = arrowNext.cloneNode(true)

	arrowPrev.style.transform = `rotate(180deg) ${prevTransform ? prevTransform : ''}`

	setStyle(arrowNext, options.arrowsStyle.arrowsPositions.next)
	setStyle(arrowPrev, options.arrowsStyle.arrowsPositions.prev)


	box.appendChild(arrowPrev)
	box.appendChild(arrowNext)


	setSsClick(arrowPrev, 'prev')
	setSsClick(arrowNext, 'next')

	let block = document.createElement('div')

	block.style.height = arrowNext.offsetHeight + 'px'
	block.style.width = arrowNext.offsetWidth + 'px'
	block.style.position = 'absolute'
	block.style.top = '0'
	block.style.display = 'none'
	
	arrowNext.appendChild(block.cloneNode())
	arrowPrev.appendChild(block)

	return {
		arrowNext,
		arrowPrev
	}
}
