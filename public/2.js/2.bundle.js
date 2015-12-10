webpackJsonp([2,4],{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = [__webpack_require__(214), __webpack_require__(215)];

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  path: 'home',
	  getComponent: function getComponent(location, cb) {
	    !/* require.ensure */(function (require) {
	      cb(null, __webpack_require__(211));
	    }(__webpack_require__));
	  }
	};

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  path: 'about',
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      cb(null, __webpack_require__(216));
	    });
	  }
	};

/***/ }

});
//# sourceMappingURL=2.bundle.js.map