var AnimScroll = (function () {
	'use strict';

	var navBar = true;
	var navArrows = true;
	var autoScroll = false;
	var infinite = false;
	var scrollSensitivity = 50;
	var delayBetweenSlides = 400;
	var whereToBegin = 0;
	var hints = [
	];
	var hintStyle = {
		color: "#fafafa",
		fontSize: "16px",
		transition: ".2s ease",
		indent: "10px"
	};
	var targetStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	};
	var slideStyle = {
		width: "100%",
		height: "100%"
	};
	var arrowStyle = {
		wrapper: {
			display: "block"
		},
		arrows: {
			shape: {
				width: "0",
				height: "0",
				"border-left": "18px solid transparent",
				"border-right": "18px solid transparent",
				"border-top": "34px solid gray"
			},
			usual: {
				transition: ".2s",
				transform: "scale(1)"
			},
			hover: {
				transition: ".2s",
				transform: "scale(1.2)"
			},
			active: {
				transition: ".2s",
				transform: "scale(0.8)"
			}
		},
		arrowsPositions: {
			next: {
				bottom: "2vh",
				right: "10px"
			},
			prev: {
				top: "2vh",
				right: "10px"
			}
		}
	};
	var navBarStyle = {
		wrapper: {
			position: "absolute",
			direction: "column",
			right: "22px"
		},
		dots: {
			shape: {
				width: "12px",
				height: "12px",
				border: "6px solid gray",
				borderRadius: "50%",
				boxSizing: "border-box"
			},
			usual: {
				transition: ".15s",
				transform: "scale(1)"
			},
			hover: {
				transition: ".15s",
				transform: "scale(1.2)"
			},
			active: {
				transition: ".15s .7s",
				transform: "scale(1.3)"
			},
			wrapper: {
				marginTop: "12px",
				marginBottom: "12px"
			}
		}
	};
	var slideAnimation = {
		active: [
			{
				top: "0%",
				transition: "0s"
			},
			{
				top: "-100%",
				transition: "800ms ease"
			}
		],
		next: [
			{
				top: "100%",
				transition: "0s"
			},
			{
				top: "0%",
				transition: ".8s ease"
			}
		]
	};
	var config = {
		navBar: navBar,
		navArrows: navArrows,
		autoScroll: autoScroll,
		infinite: infinite,
		scrollSensitivity: scrollSensitivity,
		delayBetweenSlides: delayBetweenSlides,
		whereToBegin: whereToBegin,
		hints: hints,
		hintStyle: hintStyle,
		targetStyle: targetStyle,
		slideStyle: slideStyle,
		arrowStyle: arrowStyle,
		navBarStyle: navBarStyle,
		slideAnimation: slideAnimation
	};

	var isMobile = (() => {
	  var isMobile = false;
	  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
	  return isMobile;
	});

	var haveRules = function haveRules(name) {
	  var styleSheet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.styleSheets[0];
	  var rules = styleSheet.rules || styleSheet.cssRules;
	  var rule;
	  var mRule;
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var r = _step.value;

	      if (r instanceof CSSMediaRule && window.matchMedia(r.media.mediaText).matches) {
	        mRule = haveRules(name, r);
	      } else if (r instanceof CSSStyleRule && r.selectorText === name) rule = r.style;

	      if (rule && mRule) {
	        Object.assign(rule, mRule);
	        break;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return != null) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return rule;
	};

	class OptionsError extends Error {
	  constructor(msg) {
	    super();
	    this.message = msg;
	    Error.captureStackTrace(this);
	  }

	}

	var toCamelCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase());

	var styleSheetToObj = (name => {
	  var style = haveRules(name);
	  var styleObj = {};
	  var str = '';
	  var wkStr = '';
	  if (!style) throw new OptionsError(`Element [${name}] not found`);

	  for (var index = 0; index < Object.keys(style).length; index += 1) {
	    if (!style[index]) break;
	    str = style[index];
	    str = toCamelCase(str);
	    wkStr = `webkit${str[0].toUpperCase()}${str.slice(1)}`;
	    if (str.indexOf('transition') !== -1) continue;
	    if (style[wkStr]) styleObj = Object.assign({
	      [wkStr]: style[wkStr]
	    }, styleObj);
	    styleObj = Object.assign({
	      [str]: style[str]
	    }, styleObj);
	  }

	  styleObj = Object.assign({
	    transition: style.transition,
	    webkitTransition: style.webkitTransition
	  }, styleObj);
	  return styleObj;
	});

	var getDelay = (arr => {
	  var delay = 0;

	  try {
	    if (!arr) return 0;
	    if (typeof arr === 'string') arr = [{
	      transition: arr
	    }];
	    arr.forEach(el => {
	      el.transition.match(/(\d*\.?\d+(s|ms))/g).forEach(d => {
	        delay += parseFloat(d) * (/ms/.test(d) ? 1 : 1000);
	      });
	    });
	  } catch (err) {
	    throw new OptionsError(`Error in transition options ${err}`);
	  }

	  return delay;
	});

	var concatTr = function concatTr() {
	  var tr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0s';
	  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0s';
	  return `${tr} ${delay}`;
	};

	function fieldCorrection(options) {
	  if (typeof options === 'string' && options[0] === '.') options = styleSheetToObj(options);

	  if (options instanceof Object && options.transitionDelay) {
	    options.transition = concatTr(options.transition, options.transitionDelay);
	    delete options.transitionDelay;
	  }

	  if (options.transition) options.trms = getDelay(options.transition);
	  return options;
	}

	function validateFields(options, conf) {
	  var _loop = function _loop(key) {
	    if (options[key] instanceof Object && !/hints|hintStyle|shape|usual|hover|active|next|prev|wrapper/.test(key)) {
	      validateFields(options[key], conf[key]);
	    } else if (options[key] instanceof Array && key !== 'hints') {
	      options[key].forEach((el, i) => {
	        conf[key][i] = fieldCorrection(el);
	      });
	    } else conf[key] = fieldCorrection(options[key]);
	  };

	  for (var key in options) {
	    _loop(key);
	  }
	}

	function setRev(options) {
	  var frames = JSON.parse(JSON.stringify(options));
	  var animLength = options.length;
	  var index = 0;
	  frames.reverse().map((el, i) => {
	    index = i === 0 ? i : animLength - i;
	    el.transition = options[index].transition;
	    el.trms = options[index].trms;
	    if (options[index].webkitTransition) el.webkitTransition = options[index].webkitTransition;
	    return el;
	  });
	  return frames;
	}

	var setDelaySlide = (arr, delay) => {
	  arr.splice(1, 0, {
	    transition: `0s ${delay}ms`,
	    trms: delay
	  });
	};

	var validateOptions = ((options, box) => {
	  try {
	    validateFields(options, config);
	    config.slideAnimationRev = {
	      active: setRev(config.slideAnimation.next),
	      next: setRev(config.slideAnimation.active)
	    };

	    if (config.delayBetweenSlides !== 0) {
	      setDelaySlide(config.slideAnimation.next, config.delayBetweenSlides);
	      setDelaySlide(config.slideAnimationRev.next, config.delayBetweenSlides);
	    }

	    config.isMobile = isMobile();
	    config.lastSI = box.children.length - 1;
	    config.animDuration = Math.max(getDelay(config.slideAnimation.active), getDelay(config.slideAnimation.next));
	  } catch (err) {
	    console.warn('Error during validation options.');
	    console.error(err);
	  }

	  return config;
	});

	var setStyle = ((box, obj) => {
	  box.style.transition = obj.transition;
	  Object.assign(box.style, obj);
	});

	var getElement = (options => {
	  if (options instanceof Element) return options;

	  if (typeof options === 'string') {
	    var elDOM = document.querySelector(options);
	    if (elDOM) return elDOM;

	    if (haveRules(options)) {
	      elDOM = document.createElement('div');
	      elDOM.classList.add(options);
	      return elDOM;
	    }
	  }

	  if (typeof options === 'object') {
	    var shape = document.createElement('div');
	    setStyle(shape, options);
	    return shape;
	  }

	  throw new OptionsError(`Element [${options}] not found`);
	});

	var init = (target => {
	  var box = getElement(target);

	  if (!box) {
	    console.warn('There is some error in terget name');
	    throw new OptionsError(`Your target [${target}] is not defined`);
	  }

	  return box;
	});

	var setSlides = ((box, options) => {
	  var wrapper = document.createElement('div');
	  var childs = [...box.children];
	  setStyle(box, options.targetStyle);
	  box.appendChild(wrapper);
	  box.style.overflow = 'hidden';
	  box.style.position = 'relative';
	  setStyle(wrapper, options.slideStyle);
	  wrapper.style.position = 'relative';
	  wrapper.style.overflow = 'hidden';

	  for (var i = 0; i < childs.length; i += 1) {
	    childs[i].style.height = '100%';
	    childs[i].style.width = '100%';
	    childs[i].style.position = 'absolute';
	    if (i === options.whereToBegin) childs[i].style.transition = options.slideAnimation.active[0].transition;else setStyle(childs[i], options.slideAnimation.next[0]);
	    wrapper.appendChild(childs[i]);
	  }

	  return wrapper;
	});

	var f = (box, value) => {
	  box.ssClick = value;

	  if (box.children[0]) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = box.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var el = _step.value;
	        f(el, value);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return != null) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	};

	var setNavBar = ((box, options, amount) => {
	  var navBar = document.createElement('div');
	  var dotWrapper = document.createElement('div');
	  var dot = getElement(options.navBarStyle.dots.shape);
	  var hint = {};
	  setStyle(navBar, options.navBarStyle.wrapper);
	  navBar.style.display = 'flex';
	  navBar.style.flexDirection = options.navBarStyle.wrapper.direction;
	  box.appendChild(navBar);
	  setStyle(dotWrapper, options.navBarStyle.dots.wrapper);
	  dotWrapper.style.display = 'flex';
	  dotWrapper.appendChild(dot);

	  if (options.hints) {
	    hint = document.createElement('span');
	    setStyle(hint, options.hintStyle);
	    hint.style.transition = options.hintStyle.transition;
	    hint.style.display = 'block';
	    var pos = 0;
	    var middle = 0;
	    var func = '';
	    var indent = '';
	    var flexDir = '';
	    var jC = '';
	    var aI = '';
	    options.hintIndex = 1;
	    options.dotIndex = 0;

	    if (options.navBarStyle.wrapper.direction === 'row') {
	      pos = navBar.offsetTop;
	      middle = box.offsetHeight / 2;
	      hint.style.position = 'absolute';
	      flexDir = 'column';
	      aI = 'center';
	      func = 'appendChild';
	      if (pos < middle) indent = 'bottom';else indent = 'top';
	    } else {
	      pos = navBar.offsetLeft;
	      middle = box.offsetWidth / 2;
	      flexDir = 'row';
	      aI = 'center';

	      if (pos < middle) {
	        func = 'appendChild';
	        jC = 'flex-start';
	        indent = 'marginLeft';
	      } else {
	        func = 'insertBefore';
	        jC = 'flex-end';
	        indent = 'marginRight';
	        options.hintIndex = 0;
	        options.dotIndex = 1;
	      }
	    }

	    if (indent === 'top' || indent === 'bottom') {
	      options.hintStyle.indent = `${0 - parseFloat(options.hintStyle.indent)}px`;
	    }

	    hint.style[indent] = options.hintStyle.indent;
	    hint.style.opacity = '0';
	    hint.style.zIndex = '-10';
	    dotWrapper.style.flexDirection = flexDir;
	    dotWrapper.style.justifyContent = jC;
	    dotWrapper.style.alignItems = aI;
	    dotWrapper[func](hint, dotWrapper.firstChild);
	  }

	  var el = {};

	  for (var i = 0; i < amount; i += 1) {
	    if (i === 0) el = dotWrapper;else el = dotWrapper.cloneNode(true);
	    f(el, i);
	    el.children[options.hintIndex].textContent = options.hints[i];
	    navBar.appendChild(el);
	  }

	  setStyle(navBar.children[options.whereToBegin].children[options.dotIndex], options.navBarStyle.dots.active);
	  var block = document.createElement('div');
	  block.style.height = `${navBar.offsetHeight}px`;
	  block.style.width = `${navBar.offsetWidth}px`;
	  block.style.position = 'absolute';
	  block.style.display = 'none';
	  navBar.appendChild(block);
	  return navBar;
	});

	var setArrows = ((box, options) => {
	  var arrow = getElement(options.arrowStyle.arrows.shape);
	  var arrowNext = document.createElement('div');
	  var prevTransform = options.arrowStyle.arrows.usual.transform;
	  var arrowPrev = {};
	  setStyle(arrow, options.arrowStyle.arrows.usual);
	  arrowNext.appendChild(arrow);
	  setStyle(arrowNext, options.arrowStyle.wrapper);
	  arrowNext.style.position = 'absolute';
	  arrowPrev = arrowNext.cloneNode(true);
	  arrowPrev.style.transform = `rotate(180deg) ${prevTransform || ''}`;
	  setStyle(arrowNext, options.arrowStyle.arrowsPositions.next);
	  setStyle(arrowPrev, options.arrowStyle.arrowsPositions.prev);
	  box.appendChild(arrowPrev);
	  box.appendChild(arrowNext);
	  f(arrowPrev, 'prev');
	  f(arrowNext, 'next');
	  var block = document.createElement('div');
	  block.style.height = `${arrowNext.offsetHeight}px`;
	  block.style.width = `${arrowNext.offsetWidth}px`;
	  block.style.position = 'absolute';
	  block.style.top = '0';
	  block.style.display = 'none';
	  arrowNext.appendChild(block.cloneNode());
	  arrowPrev.appendChild(block);
	  return {
	    arrowNext,
	    arrowPrev
	  };
	});

	var tuneBox = ((box, options) => {
	  var slides = {};
	  var navBar = null;
	  var arrows = null;

	  try {
	    slides = setSlides(box, options);
	    if (options.navBar) navBar = setNavBar(box, options, slides.children.length);
	    if (options.navArrows) arrows = setArrows(box, options);
	  } catch (err) {
	    console.warn('Error during setup of slides and/or navbar.');
	    console.error(err);
	  }

	  return {
	    slides,
	    navBar,
	    arrows
	  };
	});

	var setBlock = ((box, val) => {
	  box.lastChild.style.display = val;
	});

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	var promise = (delay => new Promise(resolve => {
	  setTimeout(() => {
	    resolve();
	  }, delay);
	}));

	function step(box, options) {
	  setStyle(box, options);
	  return promise(options.trms);
	}

	function steps(_x, _x2) {
	  return _steps.apply(this, arguments);
	}

	function _steps() {
	  _steps = _asyncToGenerator(function* (box, options) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var el = _step.value;
	        yield step(box, el);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return != null) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  });
	  return _steps.apply(this, arguments);
	}

	var engine = ((tape, options) => Promise.all([steps(tape.now, options.active), steps(tape.next, options.next)]));

	var getTape = ((direction, wrapper, activeSlide, dotI, infinite) => {
	  var slideNow = wrapper.slides.children[activeSlide.value];
	  var navNow = wrapper.navBar ? wrapper.navBar.children[activeSlide.value].children[dotI] : {};
	  var obj = {
	    tapeD: '',
	    slideTape: {
	      now: {},
	      next: {}
	    },
	    navTape: {}
	  };
	  var d = 0;

	  if (direction === 'next') {
	    if (activeSlide.value < wrapper.slides.children.length - 1) activeSlide.value += 1;else if (infinite) activeSlide.value = 0;
	  } else if (direction === 'prev') {
	    if (activeSlide.value > 0) activeSlide.value -= 1;else if (infinite) activeSlide.value = wrapper.slides.children.length - 1;
	  } else {
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
	});

	var animation = ((direction, wrapper, options, activeSlide) => {
	  try {
	    var _getTape = getTape(direction, wrapper, activeSlide, options.dotIndex, options.infinite),
	        slideTape = _getTape.slideTape,
	        navTape = _getTape.navTape,
	        tapeD = _getTape.tapeD;

	    if (slideTape.now === slideTape.next) return promise(0);
	    engine(slideTape, tapeD === 'next' ? options.slideAnimation : options.slideAnimationRev);

	    if (wrapper.navBar) {
	      engine(navTape, {
	        active: [options.navBarStyle.dots.usual],
	        next: [options.navBarStyle.dots.active]
	      });
	    }

	    if (wrapper.arrows) {
	      engine({
	        now: {
	          style: {}
	        },
	        next: wrapper.arrows[`arrow${tapeD === 'next' ? 'Next' : 'Prev'}`].firstChild
	      }, {
	        active: [{
	          '': ''
	        }],
	        next: [options.arrowStyle.arrows.active, options.arrowStyle.arrows.usual]
	      });
	    }
	  } catch (err) {
	    console.warn('Animation error.');
	    console.error(err);
	  }

	  return promise(options.animDuration);
	});

	var scroll = ((wrapper, options, activeSlide) => {
	  var direction = '';

	  function handler(e) {
	    if (e.deltaY > options.scrollSensitivity) direction = 'next';else if (e.deltaY < 0 - options.scrollSensitivity) direction = 'prev';else return;

	    if (direction) {
	      options.scrollSensitivity += 7680;
	      if (wrapper.navBar) setBlock(wrapper.navBar, 'block');

	      if (wrapper.arrows) {
	        setBlock(wrapper.arrows.arrowNext, 'block');
	        setBlock(wrapper.arrows.arrowPrev, 'block');
	      }

	      animation(direction, wrapper, options, activeSlide).then(() => {
	        direction = '';
	        if (wrapper.navBar) setBlock(wrapper.navBar, 'none');

	        if (wrapper.arrows) {
	          setBlock(wrapper.arrows.arrowNext, 'none');
	          setBlock(wrapper.arrows.arrowPrev, 'none');
	        }

	        options.scrollSensitivity -= 7680;
	      });
	    }
	  }

	  wrapper.slides.addEventListener('wheel', handler);
	});

	var click = ((wrapper, options, activeSlide) => {
	  var ev = options.isMobile ? 'touchend' : 'click';

	  function handler(e) {
	    if (e.target.ssClick || e.target.ssClick === 0) {
	      options.scrollSensitivity += 7680;

	      if (wrapper.arrows) {
	        setBlock(wrapper.arrows.arrowNext, 'block');
	        setBlock(wrapper.arrows.arrowPrev, 'block');
	      }

	      if (wrapper.navBar) setBlock(wrapper.navBar, 'block');
	      animation(e.target.ssClick, wrapper, options, activeSlide).then(() => {
	        if (wrapper.arrows) {
	          setBlock(wrapper.arrows.arrowNext, 'none');
	          setBlock(wrapper.arrows.arrowPrev, 'none');
	        }

	        if (wrapper.navBar) setBlock(wrapper.navBar, 'none');
	        options.scrollSensitivity -= 7680;
	      });
	    }
	  }

	  if (wrapper.navBar) {
	    for (var i = 0; i < wrapper.navBar.children.length - 1; i += 1) {
	      wrapper.navBar.children[i].addEventListener(ev, handler);
	    }
	  }

	  if (wrapper.arrows) {
	    wrapper.arrows.arrowNext.addEventListener(ev, handler);
	    wrapper.arrows.arrowPrev.addEventListener(ev, handler);
	  }
	});

	var touch = ((wrapper, options, activeSlide) => {
	  var key = options.navBarStyle.wrapper.direction === 'column' ? 'pageY' : 'pageX';
	  var direction = '';
	  var start = 0;

	  function handler(e) {
	    if (e.changedTouches[0][key] < start - options.scrollSensitivity) direction = 'next';else if (e.changedTouches[0][key] > start + options.scrollSensitivity) direction = 'prev';else return;

	    if (direction) {
	      options.scrollSensitivity += 7680;
	      if (wrapper.navBar) setBlock(wrapper.navBar, 'block');

	      if (wrapper.arrows) {
	        setBlock(wrapper.arrows.arrowNext, 'block');
	        setBlock(wrapper.arrows.arrowPrev, 'block');
	      }

	      animation(direction, wrapper, options, activeSlide).then(() => {
	        direction = '';
	        if (wrapper.navBar) setBlock(wrapper.navBar, 'none');

	        if (wrapper.arrows) {
	          setBlock(wrapper.arrows.arrowNext, 'none');
	          setBlock(wrapper.arrows.arrowPrev, 'none');
	        }

	        options.scrollSensitivity -= 7680;
	      });
	    }
	  }

	  wrapper.slides.addEventListener('touchstart', e => {
	    start = e.touches[0][key];
	  });
	  wrapper.slides.addEventListener('touchend', handler);
	});

	var hover = ((wrapper, options, activeSlide) => {
	  var evOver = options.isMobile ? 'touchstart' : 'mouseover';
	  var evOut = options.isMobile ? 'touchend' : 'mouseout';
	  var nB = wrapper.navBar ? wrapper.navBar.children : {};
	  var nS = wrapper.navBar ? options.navBarStyle.dots : {};
	  var aR = wrapper.arrows || {};
	  var aS = wrapper.arrows ? options.arrowStyle.arrows : {};
	  var state = '';
	  var zIndex = '';
	  var opacity = 0;

	  function handler(i) {
	    if (typeof i === 'number' && wrapper.navBar) {
	      nB[i].children[options.dotIndex].style.transition = nS[state].transition;
	      setStyle(nB[i].children[options.dotIndex], nS[state]);
	      nB[i].children[options.hintIndex].style.zIndex = zIndex;
	      nB[i].children[options.hintIndex].style.opacity = opacity;
	    }

	    if (typeof i === 'string' && wrapper.arrows) {
	      aR[`arrow${i === 'next' ? 'Next' : 'Prev'}`].firstChild.style.transition = aS[state].transition;
	      setStyle(aR[`arrow${i === 'next' ? 'Next' : 'Prev'}`].firstChild, aS[state]);
	    }
	  }

	  function onOver(e) {
	    if (e.target.ssClick === activeSlide.value) state = 'active';else state = 'hover';
	    zIndex = 'auto';
	    opacity = 1;
	    handler(e.target.ssClick);
	  }

	  function onOut(e) {
	    if (e.target.ssClick === activeSlide.value) state = 'active';else state = 'usual';
	    zIndex = '-10';
	    opacity = 0;
	    handler(e.target.ssClick);
	  }

	  if (wrapper.navBar) {
	    for (var i = 0; i < nB.length - 1; i += 1) {
	      nB[i].children[options.dotIndex].addEventListener(evOver, onOver);
	      nB[i].children[options.dotIndex].addEventListener(evOut, onOut);
	    }
	  }

	  if (wrapper.arrows) {
	    aR.arrowNext.addEventListener(evOver, onOver);
	    aR.arrowNext.addEventListener(evOut, onOut);
	    aR.arrowPrev.addEventListener(evOver, onOver);
	    aR.arrowPrev.addEventListener(evOut, onOut);
	  }
	});

	var onEvent = ((elements, options, activeSlide) => {
	  try {
	    if (options.isMobile) touch(elements, options, activeSlide);else scroll(elements, options, activeSlide);
	    hover(elements, options, activeSlide);
	    click(elements, options, activeSlide);
	  } catch (err) {
	    console.warn('Event error.');
	    console.error(err);
	  }
	});

	var build = (instance, target, options) => {
	  instance._target = target;
	  instance._box = init(instance._target);
	  instance._options = validateOptions(options, instance._box);
	  instance._initial = instance._box.cloneNode(true);
	  instance._parent = instance._initial.parentElement || document.body;
	  instance._ss = tuneBox(instance._box, instance._options);
	  instance._activeSlide = {
	    value: instance._options.whereToBegin
	  };
	  onEvent(instance._ss, instance._options, instance._activeSlide);
	  if (options.autoScroll || options.autoScroll === 0) instance.auto(instance._options.autoScroll);
	};

	var destroy = instance => {
	  instance._parent.replaceChild(instance._initial, instance._box);

	  if (instance._target instanceof Element) instance._target = instance._initial;
	};

	class AnimScroll {
	  constructor(target) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config;
	    build(this, target, options);
	  }

	  get target() {
	    return this._target;
	  }

	  get options() {
	    return this._options;
	  }

	  get activeSlide() {
	    return this._activeSlide.value;
	  }

	  set target(name) {
	    destroy(this);
	    build(this, name, this._options);
	  }

	  set options(obj) {
	    destroy(this);
	    obj.whereToBegin = this._activeSlide.value;
	    build(this, this._target, obj);
	  }

	  goTo(slideIndex) {
	    return new Promise(resolve => {
	      animation(slideIndex, this._ss, this._options, this._activeSlide).then(() => resolve());
	    });
	  }

	  next() {
	    return this.goTo('next');
	  }

	  prev() {
	    return this.goTo('prev');
	  }

	  auto(delay) {
	    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'next';
	    var interval = this._options.animDuration + (delay || 0);
	    return new Promise(resolve => {
	      var autoScroll$$1 = setInterval(() => {
	        if (!this._options.infinite && this._activeSlide.value === this._options.lastSI) {
	          resolve();
	          clearInterval(autoScroll$$1);
	        }

	        this.goTo(direction);
	      }, interval);
	    });
	  }

	}

	return AnimScroll;

}());
