module.exports = (element, value) => {
	function setField(box) {
		box.ssClick = value	

		if(box.children) {
			for(let el of box.children) setField(el)
		}
	}

	setField(element)
}
