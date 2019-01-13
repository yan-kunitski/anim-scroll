Snap-scroll
-------------
Snap-scroll is a library for easy creation of animated page scrolling. Works on mobile devices as well as on all desktop browsers and IE 9+.
---
`How it comes:`
There are two arrays: the first for the active slide, the second for the next.
Each of the arrays is filled with style objects (or class names // read below), which describe the state of the slides at different points in time.
Snap-scroll starts simultaneous sequential receiving of styles, taken from arrays of objects, to the corresponding slides.
---
###Usage
**Terminal**
To install the library:
    npm i snap-scroll
**HTML**
Here is the basic structure:
```html
<div id="snap-box">
	<div>First slide</div>
	<div>Second slide</div>
	<div>Third slide</div>
	<div>Fourth slide</div>
</div>
```
If you need full-screen usage, just add classes to your blocks:
```css
#snap-box, div {
	width: 100%;
	height: 100%;
}
```
Or add the necessary styles to the options object.
**JS**
The class constructor takes two parameters as input. The first is the `target`, it is required. The second is options object, it is optional:
```js
import SnapScroll from 'snap-scroll';

const snap = new SnapScroll('#snap-box'/*, { your options here }*/)
```
---
###Options###
####Main
The main options in which the snapScroll object is configured:
```js
{
	navBar: true, // enable / disable navigation bar
	navArrows: true, // enable / disable arrow navigation
	autoScroll: false, // enable / disable automatic scrolling
	infinite: false,
	scrollSensitivity: 100, // px
	delayBetweenSlides: 400, // ms
	hints: [ 'first', 'second', /* ... */]
}
```
`infinite`: allows you to jump from first to last slide and vice versa when you click on the navigation arrows
`scrollSensitivity`: sets up how much you need to scroll the page for the animation to work
`delayBetweenSlides`: sets the delay between the animations of the current slide and the next slide
`hints`: an array of hints that pop up when you hover over a navigation pointer
---
####Styles
All style fields support either an object with styles or a CSS class name.
For example:
```js
{
	hintStyle: {
		color: 'red',
		fontSize: '20px',
		display: 'flex'
	},
	// or
	tragetStyle: '.my-target-class'
}
```
`Here are the style fields:`
```js
{
	targetStyle: { // default
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	hintStyle: {
		indent: '10px' // sets the gap in 'px' between the hint and the navigation link 
	}, 
	slideStyle: {},
	arrowStyle: {
		wrapper: {},
		arrowsPositions: {
			next: { bottom: '2vh' },
			prev: { top: '2vh' }
		},
		arrows: {
			shape: {},
			usual: {},
			hover: {},
			active: {}
		}
	},
	navBarStyle: {
		wrapper: {},
		dots: {
			shape: {},
			usual: {},
			hover: {},
			active: {}
			wrapper: {}
		}
	}
}
```
---
####Slide animation
Slides animation is defined by two arrays. Each of the arrays must contain style objects or class names (you can also combine objects and class names in the same array). `The minimum number` of style objects in an array is 2.
The first object in the array must contain the initial state of the slide. This state `should not be animated`, it means:
```js
	{ transition: '0s 0s' }
```
The second and subsequent style objects can contain absolutely any CSS options. You can see (and/or use) a couple of examples in the "templates" folder of this repository.
For example:
```js
	slideAnimation: {
		active: [
			{
				transition: '0s',
				top: '0',
				transform: 'scale(1) rotate(0deg)'
			},
			{
				transition: '.2s ease .1s',
				top: '0',
				transform: 'scale(1.2)'
			},
			{
				transition: '.4s',
				transitionDelay: '.1s',
				top: '-100%',
				transform: 'scale(0.5) rotate(10deg)'
			}
		],
		next: [
			{
				transition: '0s',
				top: '100%',
				transform: 'scale(1) rotate(0deg)'
			},
			'.your-next-slide-animation-class'
		]
	}
```
---
###API
goTo()
next()
prev()
