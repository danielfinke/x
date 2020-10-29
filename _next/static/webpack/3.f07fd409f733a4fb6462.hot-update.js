webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height, maximized) {\n  var defaultWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var defaultHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n  var lockAspectRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"];\n    console.log(maxWidth, // 917\n    maxHeight // 592\n    );\n    console.log(width, // 640\n    height // 422\n    );\n\n    if (lockAspectRatio) {\n      // (original height / original width) x new width = new height\n      var aspectLockedHeight = Math.min(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n        console.log('maxWidth', maxWidth);\n      } else {\n        maxHeight = aspectLockedHeight;\n        console.log('maxHeight', maxHeight);\n      }\n    } //     // if maximized is important\n    // console.log(\n    //   maxHeight,\n    //   WINDOW_PADDING,\n    //   height\n    // )\n\n\n    return {\n      height: Math.floor(Math[maximized ? 'max' : 'min'](maxHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, height)),\n      width: Math.floor(Math.min(maxWidth - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm1heGltaXplZCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiY29uc29sZSIsImxvZyIsImFzcGVjdExvY2tlZEhlaWdodCIsIk1hdGgiLCJtaW4iLCJmbG9vciIsIldJTkRPV19QQURESU5HIiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJwcm9jZXNzZXMiLCJzdGFja09yZGVyIiwidmlzaWJsZVByb2Nlc3NJZCIsImZpbmQiLCJzdGFja0lkIiwicHJvY2VzcyIsImlkIiwibWluaW1pemVkIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QkMsS0FEOEIsRUFFOUJDLE1BRjhCLEVBRzlCQyxTQUg4QixFQU9RO0FBQUEsTUFIdENDLFlBR3NDLHVFQUh2QixDQUd1QjtBQUFBLE1BRnRDQyxhQUVzQyx1RUFGdEIsQ0FFc0I7QUFBQSxNQUR0Q0MsZUFDc0MsdUVBRHBCLEtBQ29COztBQUN0QyxNQUFJTCxLQUFLLEtBQUtHLFlBQVYsSUFBMEJGLE1BQU0sS0FBS0csYUFBekMsRUFBd0Q7QUFDdEQsUUFBSUUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQVAsR0FBcUJDLCtEQUFyQztBQUNKQyxXQUFPLENBQUNDLEdBQVIsQ0FDRVAsUUFERixFQUNZO0FBQ1ZHLGFBRkYsQ0FFWTtBQUZaO0FBSUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUNFYixLQURGLEVBQ1M7QUFDUEMsVUFGRixDQUVTO0FBRlQ7O0FBSUksUUFBSUksZUFBSixFQUFxQjtBQUNuQjtBQUNBLFVBQU1TLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1YsUUFBVCxFQUFtQk4sS0FBbkIsS0FBNkJDLE1BQU0sR0FBR0QsS0FBdEMsQ0FBM0I7O0FBRUEsVUFBSWMsa0JBQWtCLEdBQUdMLFNBQXpCLEVBQW9DO0FBQ2xDSCxnQkFBUSxHQUFHRyxTQUFTLElBQUlSLE1BQU0sR0FBR0QsS0FBYixDQUFwQjtBQUNBWSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUCxRQUF4QjtBQUNELE9BSEQsTUFHTztBQUNMRyxpQkFBUyxHQUFHSyxrQkFBWjtBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixTQUF6QjtBQUNEO0FBQ0YsS0F0QnFELENBd0IxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLFdBQU87QUFDTFIsWUFBTSxFQUFFYyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDYixTQUFTLEdBQUcsS0FBSCxHQUFXLEtBQXJCLENBQUosQ0FBZ0NPLFNBQVMsR0FBR1MsK0RBQWMsR0FBRyxDQUE3RCxFQUFnRWpCLE1BQWhFLENBQVgsQ0FESDtBQUVMRCxXQUFLLEVBQUVlLElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFJLENBQUNDLEdBQUwsQ0FBU1YsUUFBUSxHQUFHWSwrREFBYyxHQUFHLENBQXJDLEVBQXdDbEIsS0FBeEMsQ0FBWDtBQUZGLEtBQVA7QUFJRDs7QUFFRCxTQUFPO0FBQUVDLFVBQU0sRUFBTkEsTUFBRjtBQUFVRCxTQUFLLEVBQUxBO0FBQVYsR0FBUDtBQUNELENBN0NNO0FBK0NBLElBQU1tQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQ2xDQyxTQURrQyxFQUVsQ0MsVUFGa0MsRUFHdkI7QUFDWCxNQUFNQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUN2Q0osU0FBUyxDQUFDRyxJQUFWLENBQWUsVUFBQ0UsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlRixPQUFmLElBQTBCLENBQUNDLE9BQU8sQ0FBQ0UsU0FBaEQ7QUFBQSxLQUFmLENBRHVDO0FBQUEsR0FBaEIsQ0FBekI7QUFJQSxTQUFPTCxnQkFBZ0IsSUFBSSxFQUEzQjtBQUNELENBVE0iLCJmaWxlIjoiLi91dGlscy93aW5kb3dtYW5hZ2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9jZXNzZXMgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2Nlc3NtYW5hZ2VyJztcblxuaW1wb3J0IHsgVEFTS0JBUl9IRUlHSFQsIFdJTkRPV19QQURESU5HIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4RGltZW5zaW9ucyA9IChcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIG1heGltaXplZDogYm9vbGVhbixcbiAgZGVmYXVsdFdpZHRoID0gMCxcbiAgZGVmYXVsdEhlaWdodCA9IDAsXG4gIGxvY2tBc3BlY3RSYXRpbyA9IGZhbHNlXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gPT4ge1xuICBpZiAod2lkdGggPT09IGRlZmF1bHRXaWR0aCAmJiBoZWlnaHQgPT09IGRlZmF1bHRIZWlnaHQpIHtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQ7XG5jb25zb2xlLmxvZyhcbiAgbWF4V2lkdGgsIC8vIDkxN1xuICBtYXhIZWlnaHQgLy8gNTkyXG4pXG5jb25zb2xlLmxvZyhcbiAgd2lkdGgsIC8vIDY0MFxuICBoZWlnaHQgLy8gNDIyXG4pXG4gICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgLy8gKG9yaWdpbmFsIGhlaWdodCAvIG9yaWdpbmFsIHdpZHRoKSB4IG5ldyB3aWR0aCA9IG5ldyBoZWlnaHRcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21heFdpZHRoJywgbWF4V2lkdGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhIZWlnaHQgPSBhc3BlY3RMb2NrZWRIZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXhIZWlnaHQnLCBtYXhIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuXG4vLyAgICAgLy8gaWYgbWF4aW1pemVkIGlzIGltcG9ydGFudFxuLy8gY29uc29sZS5sb2coXG4vLyAgIG1heEhlaWdodCxcbi8vICAgV0lORE9XX1BBRERJTkcsXG4vLyAgIGhlaWdodFxuLy8gKVxuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IE1hdGguZmxvb3IoTWF0aFttYXhpbWl6ZWQgPyAnbWF4JyA6ICdtaW4nXShtYXhIZWlnaHQgLSBXSU5ET1dfUEFERElORyAqIDIsIGhlaWdodCkpLFxuICAgICAgd2lkdGg6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4V2lkdGggLSBXSU5ET1dfUEFERElORyAqIDIsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})