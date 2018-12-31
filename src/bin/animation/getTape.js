module.exports = (direction, wrapper, activeSlide, dotI) => {
	const slideNow = wrapper.slides.children[activeSlide.value];
	const navNow = wrapper.navBar ? wrapper.navBar.children[activeSlide.value].children[dotI] : {};
	const obj = {
		tapeD: '',
		slideTape: {
			now: {},
			next: {},
		},
		navTape: {},
	};
	let d = 0;

	if (direction === 'next' && activeSlide.value < wrapper.slides.children.length - 1) {
		activeSlide.value += 1;
	}
	if (direction === 'prev' && activeSlide.value > 0) {
		activeSlide.value -= 1;
	}
	if (typeof direction === 'number') {
		d = direction;
		direction = direction > activeSlide.value ? 'next' : 'prev';
		activeSlide.value = d;
	}

	obj.tapeD = direction;
	obj.slideTape.now = slideNow;
	obj.slideTape.next = wrapper.slides.children[activeSlide.value];

	if (wrapper.navBar) {
		obj.navTape.now = navNow;
		obj.navTape.next = wrapper.navBar.children[activeSlide.value].children[dotI];
	}

	return obj;
};
