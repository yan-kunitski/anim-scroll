Anim-scroll
===========
![anim](https://github.com/vazaio/anim-scroll/tree/master/other/main.gif)
Anim-scroll is a library for easy creation of animated page scrolling. Works on mobile devices as well as on all desktop browsers.

**How it comes:**

There are two arrays: the first for the active slide, the second for the next.
Each of the arrays is filled with style objects (or class names // read below), which describe the state of the slides at different points in time.
Anim-scroll starts simultaneous sequential receiving of styles, taken from arrays of objects, to the corresponding slides.

### Usage
#### Terminal
To install the library:
```terminal
npm i anim-scroll
```
#### HTML
Here is the basic structure:
```html
<div id="anim-box">
  <div>First slide</div>
  <div>Second slide</div>
  <div>Third slide</div>
  <div>Fourth slide</div>
</div>
```
If you need full-screen usage, just add classes to your blocks:
```css
#anim-box, div {
  width: 100%;
  height: 100%;
}
```
Or add the necessary styles to the options object.
#### JS
The class constructor takes two parameters as input. The first is the `target`, it is required. The `target type` can be a 'String' or an ['Element'](https://developer.mozilla.org/ru/docs/Web/API/Element) (HTMLElement). The second is `options object`, it is optional:
```js
import AnimScroll from 'anim-scroll';

const anim = new AnimScroll('#anim-box'/*, { your options here }*/)
```
#### Script
You can also connect the file downloaded from the ["build"](https://github.com/vazaio/anim-scroll/tree/master/build) folder.
```html
<script src="anim.min.js"></script>
<script>
  const anim = new AnimScroll('#anim-box');
</script>
```
### Options
#### Main
>You can see (and/or use) a couple of examples in the ["templates"](https://github.com/vazaio/anim-scroll/tree/master/templates) folder of this repository.

The main options in which the AnimScroll object is configured:
```js
{
  navBar: true, // enable / disable navigation bar
  navArrows: true, // enable / disable arrow navigation
  autoScroll: false, //ms, enable / disable automatic scrolling;
  infinite: false,
  scrollSensitivity: 100, // px
  delayBetweenSlides: 400, // ms
  whereToBegin: 0, // this slide will open first after page load
  hints: [ 'first', 'second', /* ... */]
}
```
`infinite`: allows you to jump from first to last slide and vice versa when you click on the navigation arrows.

`scrollSensitivity`: sets up how much you need to scroll the page for the animation to begin.

`delayBetweenSlides`: sets the delay between the animations of the current slide and the next slide.

`hints`: an array of hints that pop up when you hover over a navigation pointer.

`autoScroll`: in order to activate autoscrolling the value of the field must be "true" or "number". The number sets the delay between slides scrolling.
#### Styles
All style fields support either an object with styles or a CSS class name.
In addition, the 'shape' field also supports an object of type ['DOM Element'](https://developer.mozilla.org/ru/docs/Web/API/Element)
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
Here are the style fields:
```js
{
  targetStyle: { // default, recommended not to change
    display: 'flex', // default
    justifyContent: 'center', // default
    alignItems: 'center' // default
  },
  hintStyle: {
	indent: '10px' // custom option!!
  }, 
  slideStyle: {},
  arrowStyle: {
    wrapper: {}, // sets the arrows wrapper
    arrows: {
      shape: {}, // sets the arrows shape
      usual: {}, // sets the default arrows style
      hover: {}, // sets the style of the arrow when you hover
      active: {} // sets the style of the activated arrow
    },
    arrowsPositions: { // sets the location of the arrows
      next: { // forward arrow (next slide)
		bottom: '2vh', 
	    right: '10px'
	  },
      prev: { // back arrow (previous slide)
		top: '2vh',
	    right: '10px'
	  }
	},
},
  navBarStyle: {
    wrapper: { // sets navigation bar wrapper
		direction: 'column' // or 'row'; custom option!!
	},
    dots: {
      shape: {}, // sets the dots shape
      usual: {}, // sets the default dots style
      hover: {}, // sets the style of the dot when you hover
      active: {} // sets the style of the activated dot
      wrapper: {} // sets dot wrapper
	}
  }
}
```
`hintStyle.indent`: sets the gap in 'px' between the hint and the navigation link.
`navBarStyle.wrapper.direction`: it makes navBar vertical or horizontal. This option also determines the type of swipe on mobile devices (**row - horizontal swipe**, **column - vertical swipe**)
#### Slide animation
Slides animation is defined by two arrays. Each of the arrays must contain style objects or class names (you can also combine objects and class names in the same array). **The minimum number** of style objects in an array is 2.
The first object in the array must contain the initial state of the slide. This state **should not be animated**, it means:
```js
{ transition: '0s 0s' }
```
The second and subsequent style objects can contain absolutely any CSS options.
>You can see (and/or use) a couple of examples in the ["templates"](https://github.com/vazaio/anim-scroll/tree/master/templates) folder of this repository.

For example:
```js
{
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
}
```
### API
#### Getters
```js
console.log(anim.target); // returns your target

console.log(anim.options); // returns validated options

console.log(anim.activeSlide); // returns the index of the active slide
```
#### Setters
```js
anim.target = '#new-target'; // destroys '#previous-target' and builds '#new-target'

anim.options = { /* options */ }; // rebuilds with new options

anim.goTo(slideIndex /* number */); // goes to slide with given index (countdown starts from 0);

anim.next(); // goes to the next slide;

anim.prev(); // goes to the previous slide;

anim.auto(delay /* ms */); // starts autoscrolling.

```
Methods 'goTo()', 'next()', 'prev()' return a `promise` that will be resolved at the end of the animation. Method 'auto()' also returns a promise, but it will be resolved only if `options.infinite: false`. The parameter that accepts the method 'auto()' sets the delay between the transitions to the next slides.
### Support
The transpiled library uses ES6 features such as: generators, classes, arrow functions, for of. Therefore:
* Chrome: 50
* Opera: 37
* Firefox: 53
* Safari: 10
* Edge: 13

If you need ES5 support you can use polyfill file from the ["build"](https://github.com/vazaio/anim-scroll/tree/master/build) folder. The polyfill file is supported by **Internet Explorer 10** and higher. You can also always use Babel in your project.
