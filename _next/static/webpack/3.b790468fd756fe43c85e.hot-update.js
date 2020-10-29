webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2;\n    var maxWidth = window.innerWidth - PADDING;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"] - PADDING;\n\n    if (lockAspectRatio) {\n      // console.log(maxWidth, maxHeight) // 887, 578\n      // if locked aspect ratio and we have max possible window height and width\n      // we also have the requested width and height\n      // do requested width and height unless they are \n      var aspectLockedHeight = height / width * Math.min(maxWidth, width); // // floor nums\n\n      if (aspectLockedHeight > maxHeight) {// maxWidth = maxHeight / (height / width);\n        // console.log('maxWidth', maxWidth)\n      } else {\n        console.log(aspectLockedHeight, maxHeight);\n        maxHeight = aspectLockedHeight; // console.log('maxHeight', maxHeight)\n      }\n    } //     // if maximized is important\n    // console.log(\n    //   maxHeight,\n    //   WINDOW_PADDING,\n    //   height\n    // )\n\n\n    return {\n      height: Math.floor(Math.min(maxHeight, height)),\n      width: Math.floor(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJQQURESU5HIiwiV0lORE9XX1BBRERJTkciLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNvbnNvbGUiLCJsb2ciLCJmbG9vciIsImdldE5leHRWaXNpYmxlV2luZG93IiwicHJvY2Vzc2VzIiwic3RhY2tPcmRlciIsInZpc2libGVQcm9jZXNzSWQiLCJmaW5kIiwic3RhY2tJZCIsInByb2Nlc3MiLCJpZCIsIm1pbmltaXplZCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLEtBRDhCLEVBRTlCQyxNQUY4QixFQU1RO0FBQUEsTUFIdENDLFlBR3NDLHVFQUh2QixDQUd1QjtBQUFBLE1BRnRDQyxhQUVzQyx1RUFGdEIsQ0FFc0I7QUFBQSxNQUR0Q0MsZUFDc0MsdUVBRHBCLEtBQ29COztBQUN0QyxNQUFJSixLQUFLLEtBQUtFLFlBQVYsSUFBMEJELE1BQU0sS0FBS0UsYUFBekMsRUFBd0Q7QUFDdEQsUUFBTUUsT0FBTyxHQUFHQywrREFBYyxHQUFHLENBQWpDO0FBQ0EsUUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JKLE9BQW5DO0FBQ0EsUUFBSUssU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQVAsR0FBcUJDLCtEQUFyQixHQUFzQ1AsT0FBdEQ7O0FBRUEsUUFBSUQsZUFBSixFQUFxQjtBQUN6QjtBQUVBO0FBQ0E7QUFDQTtBQUVNLFVBQU1TLGtCQUFrQixHQUFJWixNQUFNLEdBQUdELEtBQVYsR0FBbUJjLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFULEVBQW1CUCxLQUFuQixDQUE5QyxDQVBtQixDQVNuQjs7QUFDQSxVQUFJYSxrQkFBa0IsR0FBR0gsU0FBekIsRUFBb0MsQ0FDbEM7QUFDQTtBQUNELE9BSEQsTUFHTztBQUNMTSxlQUFPLENBQUNDLEdBQVIsQ0FDRUosa0JBREYsRUFFRUgsU0FGRjtBQUlBQSxpQkFBUyxHQUFHRyxrQkFBWixDQUxLLENBTUw7QUFDRDtBQUNGLEtBMUJxRCxDQTRCMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxXQUFPO0FBQ0xaLFlBQU0sRUFBRWEsSUFBSSxDQUFDSSxLQUFMLENBQVdKLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxTQUFULEVBQW9CVCxNQUFwQixDQUFYLENBREg7QUFFTEQsV0FBSyxFQUFFYyxJQUFJLENBQUNJLEtBQUwsQ0FBV0osSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJQLEtBQW5CLENBQVg7QUFGRixLQUFQO0FBSUQ7O0FBRUQsU0FBTztBQUFFQyxVQUFNLEVBQU5BLE1BQUY7QUFBVUQsU0FBSyxFQUFMQTtBQUFWLEdBQVA7QUFDRCxDQWhETTtBQWtEQSxJQUFNbUIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUNsQ0MsU0FEa0MsRUFFbENDLFVBRmtDLEVBR3ZCO0FBQ1gsTUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsV0FDdkNKLFNBQVMsQ0FBQ0csSUFBVixDQUFlLFVBQUNFLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNDLEVBQVIsS0FBZUYsT0FBZixJQUEwQixDQUFDQyxPQUFPLENBQUNFLFNBQWhEO0FBQUEsS0FBZixDQUR1QztBQUFBLEdBQWhCLENBQXpCO0FBSUEsU0FBT0wsZ0JBQWdCLElBQUksRUFBM0I7QUFDRCxDQVRNIiwiZmlsZSI6Ii4vdXRpbHMvd2luZG93bWFuYWdlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJvY2Vzc2VzIH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9jZXNzbWFuYWdlcic7XG5cbmltcG9ydCB7IFRBU0tCQVJfSEVJR0hULCBXSU5ET1dfUEFERElORyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldE1heERpbWVuc2lvbnMgPSAoXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGNvbnN0IFBBRERJTkcgPSBXSU5ET1dfUEFERElORyAqIDI7XG4gICAgbGV0IG1heFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBQQURESU5HO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCAtIFBBRERJTkc7XG5cbiAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4vLyBjb25zb2xlLmxvZyhtYXhXaWR0aCwgbWF4SGVpZ2h0KSAvLyA4ODcsIDU3OFxuXG4vLyBpZiBsb2NrZWQgYXNwZWN0IHJhdGlvIGFuZCB3ZSBoYXZlIG1heCBwb3NzaWJsZSB3aW5kb3cgaGVpZ2h0IGFuZCB3aWR0aFxuLy8gd2UgYWxzbyBoYXZlIHRoZSByZXF1ZXN0ZWQgd2lkdGggYW5kIGhlaWdodFxuLy8gZG8gcmVxdWVzdGVkIHdpZHRoIGFuZCBoZWlnaHQgdW5sZXNzIHRoZXkgYXJlIFxuXG4gICAgICBjb25zdCBhc3BlY3RMb2NrZWRIZWlnaHQgPSAoaGVpZ2h0IC8gd2lkdGgpICogTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKTtcblxuICAgICAgLy8gLy8gZmxvb3IgbnVtc1xuICAgICAgaWYgKGFzcGVjdExvY2tlZEhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICAvLyBtYXhXaWR0aCA9IG1heEhlaWdodCAvIChoZWlnaHQgLyB3aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXhXaWR0aCcsIG1heFdpZHRoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYXNwZWN0TG9ja2VkSGVpZ2h0LFxuICAgICAgICAgIG1heEhlaWdodFxuICAgICAgICApXG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21heEhlaWdodCcsIG1heEhlaWdodClcbiAgICAgIH1cbiAgICB9XG5cbi8vICAgICAvLyBpZiBtYXhpbWl6ZWQgaXMgaW1wb3J0YW50XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgbWF4SGVpZ2h0LFxuLy8gICBXSU5ET1dfUEFERElORyxcbi8vICAgaGVpZ2h0XG4vLyApXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogTWF0aC5mbG9vcihNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCkpLFxuICAgICAgd2lkdGg6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})