webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height, maximized) {\n  var defaultWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var defaultHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n  var lockAspectRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2;\n    var maxWidth = window.innerWidth - PADDING;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"] - PADDING;\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.min(maxWidth, width) * ((height + _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"]) / width); // floor nums\n      // 640x422 = 0.659375\n      //482x308 = 0.6390041494\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n        console.log('maxWidth', maxWidth);\n      } else {\n        maxHeight = aspectLockedHeight;\n        console.log('maxHeight', maxHeight);\n      }\n    } //     // if maximized is important\n    // console.log(\n    //   maxHeight,\n    //   WINDOW_PADDING,\n    //   height\n    // )\n\n\n    return {\n      height: Math.floor(Math.min(maxHeight, height)),\n      width: Math.floor(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm1heGltaXplZCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJQQURESU5HIiwiV0lORE9XX1BBRERJTkciLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNvbnNvbGUiLCJsb2ciLCJmbG9vciIsImdldE5leHRWaXNpYmxlV2luZG93IiwicHJvY2Vzc2VzIiwic3RhY2tPcmRlciIsInZpc2libGVQcm9jZXNzSWQiLCJmaW5kIiwic3RhY2tJZCIsInByb2Nlc3MiLCJpZCIsIm1pbmltaXplZCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLEtBRDhCLEVBRTlCQyxNQUY4QixFQUc5QkMsU0FIOEIsRUFPUTtBQUFBLE1BSHRDQyxZQUdzQyx1RUFIdkIsQ0FHdUI7QUFBQSxNQUZ0Q0MsYUFFc0MsdUVBRnRCLENBRXNCO0FBQUEsTUFEdENDLGVBQ3NDLHVFQURwQixLQUNvQjs7QUFDdEMsTUFBSUwsS0FBSyxLQUFLRyxZQUFWLElBQTBCRixNQUFNLEtBQUtHLGFBQXpDLEVBQXdEO0FBQ3RELFFBQU1FLE9BQU8sR0FBR0MsK0RBQWMsR0FBRyxDQUFqQztBQUNBLFFBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CSixPQUFuQztBQUNBLFFBQUlLLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEdBQXFCQywrREFBckIsR0FBc0NQLE9BQXREOztBQUVBLFFBQUlELGVBQUosRUFBcUI7QUFDbkIsVUFBTVMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFULEVBQW1CUixLQUFuQixLQUE2QixDQUFDQyxNQUFNLEdBQUdZLCtEQUFWLElBQTRCYixLQUF6RCxDQUEzQixDQURtQixDQUduQjtBQUNBO0FBQ0E7O0FBQ0EsVUFBSWMsa0JBQWtCLEdBQUdILFNBQXpCLEVBQW9DO0FBQ2xDSCxnQkFBUSxHQUFHRyxTQUFTLElBQUlWLE1BQU0sR0FBR0QsS0FBYixDQUFwQjtBQUNBaUIsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlYsUUFBeEI7QUFDRCxPQUhELE1BR087QUFDTEcsaUJBQVMsR0FBR0csa0JBQVo7QUFDQUcsZUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsU0FBekI7QUFDRDtBQUNGLEtBbEJxRCxDQW9CMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxXQUFPO0FBQ0xWLFlBQU0sRUFBRWMsSUFBSSxDQUFDSSxLQUFMLENBQVdKLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxTQUFULEVBQW9CVixNQUFwQixDQUFYLENBREg7QUFFTEQsV0FBSyxFQUFFZSxJQUFJLENBQUNJLEtBQUwsQ0FBV0osSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJSLEtBQW5CLENBQVg7QUFGRixLQUFQO0FBSUQ7O0FBRUQsU0FBTztBQUFFQyxVQUFNLEVBQU5BLE1BQUY7QUFBVUQsU0FBSyxFQUFMQTtBQUFWLEdBQVA7QUFDRCxDQXpDTTtBQTJDQSxJQUFNb0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUNsQ0MsU0FEa0MsRUFFbENDLFVBRmtDLEVBR3ZCO0FBQ1gsTUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsV0FDdkNKLFNBQVMsQ0FBQ0csSUFBVixDQUFlLFVBQUNFLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNDLEVBQVIsS0FBZUYsT0FBZixJQUEwQixDQUFDQyxPQUFPLENBQUNFLFNBQWhEO0FBQUEsS0FBZixDQUR1QztBQUFBLEdBQWhCLENBQXpCO0FBSUEsU0FBT0wsZ0JBQWdCLElBQUksRUFBM0I7QUFDRCxDQVRNIiwiZmlsZSI6Ii4vdXRpbHMvd2luZG93bWFuYWdlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJvY2Vzc2VzIH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9jZXNzbWFuYWdlcic7XG5cbmltcG9ydCB7IFRBU0tCQVJfSEVJR0hULCBXSU5ET1dfUEFERElORyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldE1heERpbWVuc2lvbnMgPSAoXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBtYXhpbWl6ZWQ6IGJvb2xlYW4sXG4gIGRlZmF1bHRXaWR0aCA9IDAsXG4gIGRlZmF1bHRIZWlnaHQgPSAwLFxuICBsb2NrQXNwZWN0UmF0aW8gPSBmYWxzZVxuKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0+IHtcbiAgaWYgKHdpZHRoID09PSBkZWZhdWx0V2lkdGggJiYgaGVpZ2h0ID09PSBkZWZhdWx0SGVpZ2h0KSB7XG4gICAgY29uc3QgUEFERElORyA9IFdJTkRPV19QQURESU5HICogMjtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIFBBRERJTkc7XG4gICAgbGV0IG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hUIC0gUEFERElORztcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkgKiAoKGhlaWdodCArIFRBU0tCQVJfSEVJR0hUKSAvIHdpZHRoKTtcblxuICAgICAgLy8gZmxvb3IgbnVtc1xuICAgICAgLy8gNjQweDQyMiA9IDAuNjU5Mzc1XG4gICAgICAvLzQ4MngzMDggPSAwLjYzOTAwNDE0OTRcbiAgICAgIGlmIChhc3BlY3RMb2NrZWRIZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgbWF4V2lkdGggPSBtYXhIZWlnaHQgLyAoaGVpZ2h0IC8gd2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWF4V2lkdGgnLCBtYXhXaWR0aClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2coJ21heEhlaWdodCcsIG1heEhlaWdodClcbiAgICAgIH1cbiAgICB9XG5cbi8vICAgICAvLyBpZiBtYXhpbWl6ZWQgaXMgaW1wb3J0YW50XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgbWF4SGVpZ2h0LFxuLy8gICBXSU5ET1dfUEFERElORyxcbi8vICAgaGVpZ2h0XG4vLyApXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogTWF0aC5mbG9vcihNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCkpLFxuICAgICAgd2lkdGg6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})