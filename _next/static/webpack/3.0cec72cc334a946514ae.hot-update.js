webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, maximized, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: -Math.floor(width / 2) + window.innerWidth * 0.5,\n      y: -Math.floor(height / 2) + window.innerHeight * 0.45\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"7/dVr8p6VaMad/a1eqBeHszT6Xo=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZWZhdWx0WCIsImRlZmF1bHRZIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldmVudCIsInJlbGF0ZWRUYXJnZXQiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsInNsaWNlIiwicmV2ZXJzZSIsImluZGV4T2YiLCJ1c2VFZmZlY3QiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsImZpbHRlciIsInN0YWNrSWQiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJzdHlsZXMiLCJhbmltYXRlZFdpbmRvd3MiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2luZG93TW90aW9uU2V0dGluZ3MiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhGQUFSO0FBQUE7QUFBQSxjQUFRLDBDQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBRU4sSUFBTUUsWUFBWSxHQUFHQywyREFBVSxHQUFHQyxtRUFBa0IsR0FBR0MsZ0VBQXZEOztBQUVBLElBQU1DLGFBQWdDLEdBQUcsU0FBbkNBLGFBQW1DLE9Bb0JuQztBQUFBOztBQUFBLHlCQW5CSkMsTUFtQkk7QUFBQSxNQWxCTUMsR0FrQk4sZUFsQkZELE1Ba0JFO0FBQUEsTUFqQkZFLGdCQWlCRSxlQWpCRkEsZ0JBaUJFO0FBQUEsMENBaEJGQyxhQWdCRTtBQUFBLE1BaEJzQkMsWUFnQnRCLHlCQWhCZUMsS0FnQmY7QUFBQSxNQWhCNENDLGFBZ0I1Qyx5QkFoQm9DQyxNQWdCcEM7QUFBQSxNQWRKQyxPQWNJLFFBZEpBLE9BY0k7QUFBQSxNQWJJQyxhQWFKLFFBYkpGLE1BYUk7QUFBQSxNQVpKRyxJQVlJLFFBWkpBLElBWUk7QUFBQSxNQVhKQyxFQVdJLFFB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QkFBYSxFQUFiQTtBQWJ1QixHQUFELENBUjFCO0FBQUEsY0F3QkdPLFFBQVEsZ0JBQ1AscUVBQUMsTUFBRDtBQUNFLFVBQUksRUFBRVQsSUFEUjtBQUVFLFVBQUksRUFBRU0sSUFGUjtBQUdFLGFBQU8sRUFBRVIsT0FIWDtBQUlFLHFCQUFlLEVBQUVLLGVBSm5CO0FBS0UsZ0JBQVUsRUFBRXdCLElBQUksQ0FBQzFCLEVBQUQ7QUFMbEIsT0FNTXlDLGFBTk47QUFBQSw2QkFRRSxxRUFBQyxHQUFELGtDQUFTbEQsZ0JBQVQsR0FBK0JrRCxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVlQLHFFQUFDLEdBQUQsa0NBQVNsRCxnQkFBVCxHQUErQmtELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQ0osTUFDT3pDLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBcEpEOztHQUFNWixhOztNQUFBQSxhO0FBc0pTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlV2luZG93LCBnZXRNYXhEaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3V0aWxzL21vdGlvbnMnO1xuXG5jb25zdCBXaW5kb3cgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdycpKTtcblxuY29uc3Qgd2luZG93WmluZGV4ID0gYmFzZVppbmRleCArIHdpbmRvd3NaaW5kZXhMZXZlbCAqIHppbmRleExldmVsU2l6ZTtcblxuY29uc3QgUHJvY2Vzc1dpbmRvdzogUmVhY3QuRkM8UHJvY2Vzcz4gPSAoe1xuICBsb2FkZXI6IHtcbiAgICBsb2FkZXI6IEFwcCxcbiAgICBsb2FkZWRBcHBPcHRpb25zLFxuICAgIGxvYWRlck9wdGlvbnM6IHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH1cbiAgfSxcbiAgYmdDb2xvcixcbiAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICBpY29uLFxuICBpZCxcbiAgbGF1bmNoRWxlbWVudCxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBtYXhpbWl6ZWQsXG4gIG1pbmltaXplZCxcbiAgbmFtZSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gIHdpbmRvd2VkLFxuICB4LFxuICB5XG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbbWF4aW1pemVXaW5kb3csIHNldE1heGltaXplV2luZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1gsIHk6IHByZXZpb3VzWSB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgbWF4aW1pemVkLFxuICAgIGRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0LFxuICAgIGxvY2tBc3BlY3RSYXRpb1xuICApO1xuICBjb25zdCB7IHg6IGRlZmF1bHRYLCB5OiBkZWZhdWx0WSB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgeDogLU1hdGguZmxvb3Iod2lkdGggLyAyKSArIHdpbmRvdy5pbm5lcldpZHRoICogMC41LFxuICAgICAgeTogLU1hdGguZmxvb3IoaGVpZ2h0IC8gMikgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjQ1XG4gICAgfSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZShpZCksXG4gICAgb25NYXhpbWl6ZTogKCkgPT4gKG1heGltaXplZCA/IHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKSA6IG1heGltaXplKGlkKSksXG4gICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgc2F2ZVN0YXRlKHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBpZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHg6ICFwcmV2aW91c1ggPyBkZWZhdWx0WCArIHggOiB4LFxuICAgICAgICB5OiAhcHJldmlvdXNZID8gZGVmYXVsdFkgKyB5IDogeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiBmb3JlZ3JvdW5kKGlkKSxcbiAgICBvbkJsdXI6IChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRhc2tiYXJFbGVtZW50KSB7XG4gICAgICAgIGZvcmVncm91bmQoJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uKGlkKSxcbiAgICB6SW5kZXg6IHdpbmRvd1ppbmRleCArIHN0YWNrT3JkZXIuc2xpY2UoKS5yZXZlcnNlKCkuaW5kZXhPZihpZCksXG4gICAgbWF4aW1pemVkOiBtYXhpbWl6ZVdpbmRvdyxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9yZWdyb3VuZElkID09PSBpZCAmJiBtaW5pbWl6ZWQpIHtcbiAgICAgIGZvcmVncm91bmQoXG4gICAgICAgIGdldE5leHRWaXNpYmxlV2luZG93KFxuICAgICAgICAgIHByb2Nlc3NlcyxcbiAgICAgICAgICBzdGFja09yZGVyLmZpbHRlcigoc3RhY2tJZCkgPT4gc3RhY2tJZCAhPT0gaWQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghc3RhY2tPcmRlci5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGZvcmVncm91bmQoZ2V0TmV4dFZpc2libGVXaW5kb3cocHJvY2Vzc2VzLCBzdGFja09yZGVyKSk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZElkLCBpZCwgbWluaW1pemVkLCBwcm9jZXNzZXMsIHN0YWNrT3JkZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXhpbWl6ZWQpIHtcbiAgICAgIHNldE1heGltaXplV2luZG93KHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWF4aW1pemVXaW5kb3cpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHNldE1heGltaXplV2luZG93KGZhbHNlKSxcbiAgICAgICAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMgKiBNSUxMSVNFQ09ORFNfSU5fU0VDT05EXG4gICAgICApO1xuICAgIH1cbiAgfSwgW21heGltaXplZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBrZXk9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0ZWRXaW5kb3dzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgekluZGV4OiBmb3JlZ3JvdW5kSWQgPT09IGlkID8gZm9yZWdyb3VuZFppbmRleCA6IHdpbmRvd09wdGlvbnMuekluZGV4LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9fVxuICAgICAgey4uLndpbmRvd01vdGlvblNldHRpbmdzKHtcbiAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCB8fCBkZWZhdWx0WCxcbiAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSB8fCBkZWZhdWx0WSxcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgbWluaW1pemVkICYmICdtYXhtaW4nKSB8fFxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgJ21heGltaXplZCcpIHx8XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHxcbiAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17c2l6ZShpZCl9XG4gICAgICAgICAgey4uLndpbmRvd09wdGlvbnN9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICAgPC9XaW5kb3c+XG4gICAgICApIDogKFxuICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICl9XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ }),

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height, maximized) {\n  var defaultWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var defaultHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n  var lockAspectRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"];\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.min(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n        console.log('maxWidth', maxWidth);\n      } else {\n        maxHeight = aspectLockedHeight;\n        console.log('maxHeight', maxHeight);\n      }\n    } //     // if maximized is important\n    // console.log(\n    //   maxHeight,\n    //   WINDOW_PADDING,\n    //   height\n    // )\n\n\n    return {\n      height: Math.floor(Math[maximized ? 'min' : 'max'](maxHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, height)),\n      width: Math.floor(Math.min(maxWidth - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm1heGltaXplZCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNvbnNvbGUiLCJsb2ciLCJmbG9vciIsIldJTkRPV19QQURESU5HIiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJwcm9jZXNzZXMiLCJzdGFja09yZGVyIiwidmlzaWJsZVByb2Nlc3NJZCIsImZpbmQiLCJzdGFja0lkIiwicHJvY2VzcyIsImlkIiwibWluaW1pemVkIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QkMsS0FEOEIsRUFFOUJDLE1BRjhCLEVBRzlCQyxTQUg4QixFQU9RO0FBQUEsTUFIdENDLFlBR3NDLHVFQUh2QixDQUd1QjtBQUFBLE1BRnRDQyxhQUVzQyx1RUFGdEIsQ0FFc0I7QUFBQSxNQUR0Q0MsZUFDc0MsdUVBRHBCLEtBQ29COztBQUN0QyxNQUFJTCxLQUFLLEtBQUtHLFlBQVYsSUFBMEJGLE1BQU0sS0FBS0csYUFBekMsRUFBd0Q7QUFDdEQsUUFBSUUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQVAsR0FBcUJDLCtEQUFyQzs7QUFFQSxRQUFJTixlQUFKLEVBQXFCO0FBQ25CLFVBQU1PLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsUUFBVCxFQUFtQk4sS0FBbkIsS0FBNkJDLE1BQU0sR0FBR0QsS0FBdEMsQ0FBM0I7O0FBRUEsVUFBSVksa0JBQWtCLEdBQUdILFNBQXpCLEVBQW9DO0FBQ2xDSCxnQkFBUSxHQUFHRyxTQUFTLElBQUlSLE1BQU0sR0FBR0QsS0FBYixDQUFwQjtBQUNBZSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCVixRQUF4QjtBQUNELE9BSEQsTUFHTztBQUNMRyxpQkFBUyxHQUFHRyxrQkFBWjtBQUNBRyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCUCxTQUF6QjtBQUNEO0FBQ0YsS0FkcUQsQ0FnQjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksV0FBTztBQUNMUixZQUFNLEVBQUVZLElBQUksQ0FBQ0ksS0FBTCxDQUFXSixJQUFJLENBQUNYLFNBQVMsR0FBRyxLQUFILEdBQVcsS0FBckIsQ0FBSixDQUFnQ08sU0FBUyxHQUFHUywrREFBYyxHQUFHLENBQTdELEVBQWdFakIsTUFBaEUsQ0FBWCxDQURIO0FBRUxELFdBQUssRUFBRWEsSUFBSSxDQUFDSSxLQUFMLENBQVdKLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFRLEdBQUdZLCtEQUFjLEdBQUcsQ0FBckMsRUFBd0NsQixLQUF4QyxDQUFYO0FBRkYsS0FBUDtBQUlEOztBQUVELFNBQU87QUFBRUMsVUFBTSxFQUFOQSxNQUFGO0FBQVVELFNBQUssRUFBTEE7QUFBVixHQUFQO0FBQ0QsQ0FyQ007QUF1Q0EsSUFBTW1CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FDbENDLFNBRGtDLEVBRWxDQyxVQUZrQyxFQUd2QjtBQUNYLE1BQU1DLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLFdBQ3ZDSixTQUFTLENBQUNHLElBQVYsQ0FBZSxVQUFDRSxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVGLE9BQWYsSUFBMEIsQ0FBQ0MsT0FBTyxDQUFDRSxTQUFoRDtBQUFBLEtBQWYsQ0FEdUM7QUFBQSxHQUFoQixDQUF6QjtBQUlBLFNBQU9MLGdCQUFnQixJQUFJLEVBQTNCO0FBQ0QsQ0FUTSIsImZpbGUiOiIuL3V0aWxzL3dpbmRvd21hbmFnZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFByb2Nlc3NlcyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvY2Vzc21hbmFnZXInO1xuXG5pbXBvcnQgeyBUQVNLQkFSX0hFSUdIVCwgV0lORE9XX1BBRERJTkcgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhEaW1lbnNpb25zID0gKFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbWF4aW1pemVkOiBib29sZWFuLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVDtcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21heFdpZHRoJywgbWF4V2lkdGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhIZWlnaHQgPSBhc3BlY3RMb2NrZWRIZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXhIZWlnaHQnLCBtYXhIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuXG4vLyAgICAgLy8gaWYgbWF4aW1pemVkIGlzIGltcG9ydGFudFxuLy8gY29uc29sZS5sb2coXG4vLyAgIG1heEhlaWdodCxcbi8vICAgV0lORE9XX1BBRERJTkcsXG4vLyAgIGhlaWdodFxuLy8gKVxuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IE1hdGguZmxvb3IoTWF0aFttYXhpbWl6ZWQgPyAnbWluJyA6ICdtYXgnXShtYXhIZWlnaHQgLSBXSU5ET1dfUEFERElORyAqIDIsIGhlaWdodCkpLFxuICAgICAgd2lkdGg6IE1hdGguZmxvb3IoTWF0aC5taW4obWF4V2lkdGggLSBXSU5ET1dfUEFERElORyAqIDIsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})