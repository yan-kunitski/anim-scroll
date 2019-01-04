Snap-scroll
================
```json
{
	"navBar":true,
	"navBarArrows":true,
	"autoScroll":false,
	"infinite":false,
	"scrollSensitivity":100,
	"delayBetweenSlides": 1000,
	"targetStyle":{
		"display":"flex",
		"justifyContent":"center",
		"alignItems":"center"
	},
	"hints":[
		"first",
		"second",
		"third",
		"fourth",
		"fivth",
		"sixth",
		"seventh"
	],
	"hintStyle":{
		"color":"#fafafa",
		"fontSize":"18px",
		"transition":".2s ease",
		"indent":"10px"
	},
	"slideStyle":{
		"width":"100%",
		"height":"100%"
	},
	"arrowStyle":{
		"wrapper":{
			"display":"block"
		},
		"arrows":{
			"shape":{
				"width":"50px",
				"height":"50px",
				"backgroundColor":"#fafafa",
				"clipPath":"polygon(50% 90%, 100% 50%, 50% 100%, 0% 50%)",
				"webkitClipPath":"polygon(50% 90%, 100% 50%, 50% 100%, 0% 50%)"
			},
			"usual":{
				"transition":".2s",
				"clipPath":"polygon(50% 90%, 100% 50%, 50% 100%, 0% 50%)"
			},
			"hover":{
				"transition":".2s",
				"clipPath":"polygon(50% 80%, 100% 50%, 50% 100%, 0% 50%)"
			},
			"active":{
				"transition":".2s",
				"clipPath":"polygon(50% 70%, 100% 50%, 50% 100%, 0% 50%)"
			}
		},
		"arrowsPositions":{
			"next":{
				"bottom":"2vh",
				"right":"3px"
			},
			"prev":{
				"top":"2vh",
				"right":"3px"
			}
		}
	},
	"navBarStyle":{
		"wrapper":{
			"position":"absolute",
			"direction":"column",
			"right":"22px"
		},
		"dots":{
			"shape":{
				"width":"12px",
				"height":"12px",
				"border":"3px solid #fafafa",
				"borderRadius":"50%",
				"boxSizing":"border-box"
			},
			"usual":{
				"transition":".15s",
				"transform":"scale(1)",
				"border":"3px solid red"
			},
			"hover":{
				"transition":".15s",
				"transform":"scale(1)",
				"border":"5px solid #fafafa"
			},
			"active":{
				"transition":".15s 1s",
				"border":"5px solid #fafafa",
				"transform":"scale(1.3)"
			},
			"wrapper":{
				"marginTop":"4px",
				"marginBottom":"4px"
			}
		}
	},
	"slideAnimation":{
		"active":[
			{
				"top":"0%",
				"transition":"0s",
				"transform":"scale(1)",
				"opacity":"1"
			},
			{
				"top":"0%",
				"transition":".8s ease",
				"transform":"scale(0.7)",
				"opacity":"0.3"
			},
			{
				"top":"-100%",
				"transition":".2s ease",
				"transform":"scale(0.4)",
				"opacity":"0"
			}
		],
		"next":[
			{
				"top":"100%",
				"transition":"0s",
				"transform":"scale(0.8)",
				"opacity":"0"
			},
			{
				"top":"0%",
				"transition":".2s ease",
				"transform":"scale(0.9)",
				"opacity":"0.3"
			},
			{
				"top":"0%",
				"transition":".8s ease",
				"transform":"scale(1)",
				"opacity":"1"
			}
		]
	}
}
```
