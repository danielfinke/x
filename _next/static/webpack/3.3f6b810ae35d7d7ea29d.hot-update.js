webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height, maximized) {\n  var defaultWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var defaultHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n  var lockAspectRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"];\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.max(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n        console.log('maxWidth', maxWidth);\n      } else {\n        maxHeight = aspectLockedHeight;\n        console.log('maxHeight', maxHeight);\n      }\n    } //     // if maximized is important\n    // console.log(\n    //   maxHeight,\n    //   WINDOW_PADDING,\n    //   height\n    // )\n\n\n    return {\n      height: Math.floor(Math.min(maxHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, height)),\n      width: Math.floor(Math.min(maxWidth - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm1heGltaXplZCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1heCIsImNvbnNvbGUiLCJsb2ciLCJmbG9vciIsIm1pbiIsIldJTkRPV19QQURESU5HIiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJwcm9jZXNzZXMiLCJzdGFja09yZGVyIiwidmlzaWJsZVByb2Nlc3NJZCIsImZpbmQiLCJzdGFja0lkIiwicHJvY2VzcyIsImlkIiwibWluaW1pemVkIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QkMsS0FEOEIsRUFFOUJDLE1BRjhCLEVBRzlCQyxTQUg4QixFQU9RO0FBQUEsTUFIdENDLFlBR3NDLHVFQUh2QixDQUd1QjtBQUFBLE1BRnRDQyxhQUVzQyx1RUFGdEIsQ0FFc0I7QUFBQSxNQUR0Q0MsZUFDc0MsdUVBRHBCLEtBQ29COztBQUN0QyxNQUFJTCxLQUFLLEtBQUtHLFlBQVYsSUFBMEJGLE1BQU0sS0FBS0csYUFBekMsRUFBd0Q7QUFDdEQsUUFBSUUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQVAsR0FBcUJDLCtEQUFyQzs7QUFFQSxRQUFJTixlQUFKLEVBQXFCO0FBQ25CLFVBQU1PLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsUUFBVCxFQUFtQk4sS0FBbkIsS0FBNkJDLE1BQU0sR0FBR0QsS0FBdEMsQ0FBM0I7O0FBRUEsVUFBSVksa0JBQWtCLEdBQUdILFNBQXpCLEVBQW9DO0FBQ2xDSCxnQkFBUSxHQUFHRyxTQUFTLElBQUlSLE1BQU0sR0FBR0QsS0FBYixDQUFwQjtBQUNBZSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCVixRQUF4QjtBQUNELE9BSEQsTUFHTztBQUNMRyxpQkFBUyxHQUFHRyxrQkFBWjtBQUNBRyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCUCxTQUF6QjtBQUNEO0FBQ0YsS0FkcUQsQ0FnQjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksV0FBTztBQUNMUixZQUFNLEVBQUVZLElBQUksQ0FBQ0ksS0FBTCxDQUFXSixJQUFJLENBQUNLLEdBQUwsQ0FBU1QsU0FBUyxHQUFHVSwrREFBYyxHQUFHLENBQXRDLEVBQXlDbEIsTUFBekMsQ0FBWCxDQURIO0FBRUxELFdBQUssRUFBRWEsSUFBSSxDQUFDSSxLQUFMLENBQVdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTWixRQUFRLEdBQUdhLCtEQUFjLEdBQUcsQ0FBckMsRUFBd0NuQixLQUF4QyxDQUFYO0FBRkYsS0FBUDtBQUlEOztBQUVELFNBQU87QUFBRUMsVUFBTSxFQUFOQSxNQUFGO0FBQVVELFNBQUssRUFBTEE7QUFBVixHQUFQO0FBQ0QsQ0FyQ007QUF1Q0EsSUFBTW9CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FDbENDLFNBRGtDLEVBRWxDQyxVQUZrQyxFQUd2QjtBQUNYLE1BQU1DLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLFdBQ3ZDSixTQUFTLENBQUNHLElBQVYsQ0FBZSxVQUFDRSxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVGLE9BQWYsSUFBMEIsQ0FBQ0MsT0FBTyxDQUFDRSxTQUFoRDtBQUFBLEtBQWYsQ0FEdUM7QUFBQSxHQUFoQixDQUF6QjtBQUlBLFNBQU9MLGdCQUFnQixJQUFJLEVBQTNCO0FBQ0QsQ0FUTSIsImZpbGUiOiIuL3V0aWxzL3dpbmRvd21hbmFnZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFByb2Nlc3NlcyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvY2Vzc21hbmFnZXInO1xuXG5pbXBvcnQgeyBUQVNLQkFSX0hFSUdIVCwgV0lORE9XX1BBRERJTkcgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhEaW1lbnNpb25zID0gKFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbWF4aW1pemVkOiBib29sZWFuLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVDtcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWF4KG1heFdpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21heFdpZHRoJywgbWF4V2lkdGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhIZWlnaHQgPSBhc3BlY3RMb2NrZWRIZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXhIZWlnaHQnLCBtYXhIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuXG4vLyAgICAgLy8gaWYgbWF4aW1pemVkIGlzIGltcG9ydGFudFxuLy8gY29uc29sZS5sb2coXG4vLyAgIG1heEhlaWdodCxcbi8vICAgV0lORE9XX1BBRERJTkcsXG4vLyAgIGhlaWdodFxuLy8gKVxuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4SGVpZ2h0IC0gV0lORE9XX1BBRERJTkcgKiAyLCBoZWlnaHQpKSxcbiAgICAgIHdpZHRoOiBNYXRoLmZsb29yKE1hdGgubWluKG1heFdpZHRoIC0gV0lORE9XX1BBRERJTkcgKiAyLCB3aWR0aCkpXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGhlaWdodCwgd2lkdGggfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROZXh0VmlzaWJsZVdpbmRvdyA9IChcbiAgcHJvY2Vzc2VzOiBQcm9jZXNzZXMsXG4gIHN0YWNrT3JkZXI6IHN0cmluZ1tdXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB2aXNpYmxlUHJvY2Vzc0lkID0gc3RhY2tPcmRlci5maW5kKChzdGFja0lkKSA9PlxuICAgIHByb2Nlc3Nlcy5maW5kKChwcm9jZXNzKSA9PiBwcm9jZXNzLmlkID09PSBzdGFja0lkICYmICFwcm9jZXNzLm1pbmltaXplZClcbiAgKTtcblxuICByZXR1cm4gdmlzaWJsZVByb2Nlc3NJZCB8fCAnJztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})