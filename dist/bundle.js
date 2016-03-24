/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(/*! ./styles/main.css */ 1);
	__webpack_require__(/*! ./scripts/polyfills.js */ 2);
	__webpack_require__(/*! ./scripts/eyes.js */ 3);

/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/*!**********************************!*\
  !*** ./src/scripts/polyfills.js ***!
  \**********************************/
/***/ function(module, exports) {

	// requestAnimationFrame polyfill
	
	(function() {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
	                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
	    }
	 
	    if (!window.requestAnimationFrame)
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	 
	    if (!window.cancelAnimationFrame)
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	}());

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./src/scripts/eyes.js ***!
  \*****************************/
/***/ function(module, exports) {

	// eye movement
	
	var leftEye = document.getElementById('left_eye');
	var rightEye = document.getElementById('right_eye');
	
	var topTeeth = [];
	var bottomTeeth = [];
	for(var i=1; i<=6; i++) { topTeeth.push(document.getElementById('top_tooth'+i)) }
	for(var i=1; i<=8; i++) { bottomTeeth.push(document.getElementById('bottom_tooth'+i)) }
	
	console.log(topTeeth);
	console.log(bottomTeeth);
	
	var mouseX = 0;
	var mouseY = 0;
	var leftRec, rightRec, leftAngle, rightAngle;
	var leftEyePos = {x: 0, y: 0};
	var rightEyePos = {x: 0, y: 0};
	
	document.addEventListener('mousemove', function(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	});
	
	function animate() {
	
		leftRect = leftEye.getBoundingClientRect();
		leftEyePos.x = leftRect.left + leftRect.width/2;
		leftEyePos.y = leftRect.top + leftRect.height/2;
	
		rightRect = rightEye.getBoundingClientRect();
		rightEyePos.x = rightRect.right + rightRect.width/2;
		rightEyePos.y = rightRect.top + rightRect.height/2;
	
		leftAngle = Math.atan2(mouseY - leftEyePos.y, mouseX - leftEyePos.x) * 180 / Math.PI;
		rightAngle = Math.atan2(mouseY - rightEyePos.y, mouseX - rightEyePos.x) * 180 / Math.PI;
		
		leftEye.style.transform = leftEye.style['-webkit-transform'] = 'rotate('+Math.round(leftAngle)+'deg)';
		rightEye.style.transform = rightEye.style['-webkit-transform'] = 'rotate('+Math.round(rightAngle)+'deg)';
	
		for(var i=1; i<=6; i++) {
			var offset = Math.cos((mouseX - i*100)/200)*10 - 10;
			topTeeth[i-1].style.transform = topTeeth[i-1].style['-webkit-transform'] = 'translate(0px, '+offset+'px)';
		}
	
		for(var i=1; i<=8; i++) {
			var offset = Math.sin((mouseX - i*100)/200)*5 - 5;
			bottomTeeth[i-1].style.transform = bottomTeeth[i-1].style['-webkit-transform'] = 'translate(0px, '+offset+'px)';
		}
	
		window.requestAnimationFrame(animate);
	}
	
	animate();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map