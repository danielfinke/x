webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/programs.ts":
/*!***************************!*\
  !*** ./utils/programs.ts ***!
  \***************************/
/*! exports provided: appLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appLoader\", function() { return appLoader; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/url */ \"./utils/url.ts\");\n/* harmony import */ var _components_Programs_Dos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Programs/Dos */ \"./components/Programs/Dos.tsx\");\n/* harmony import */ var _components_Programs_Explorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Programs/Explorer */ \"./components/Programs/Explorer.tsx\");\n/* harmony import */ var _components_Programs_WebODF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Programs/WebODF */ \"./components/Programs/WebODF.tsx\");\n/* harmony import */ var _components_Programs_Winamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Programs/Winamp */ \"./components/Programs/Winamp.tsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Dos = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Programs/Dos */ \"./components/Programs/Dos.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Programs/Dos */ \"./components/Programs/Dos.tsx\")];\n    },\n    modules: ['@/components/Programs/Dos']\n  }\n});\n_c2 = Dos;\nvar Explorer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Programs/Explorer */ \"./components/Programs/Explorer.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Programs/Explorer */ \"./components/Programs/Explorer.tsx\")];\n    },\n    modules: ['@/components/Programs/Explorer']\n  }\n});\n_c4 = Explorer;\nvar WebODF = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c5 = function _c5() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Programs/WebODF */ \"./components/Programs/WebODF.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Programs/WebODF */ \"./components/Programs/WebODF.tsx\")];\n    },\n    modules: ['@/components/Programs/WebODF']\n  }\n});\n_c6 = WebODF;\nvar Winamp = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c7 = function _c7() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/Programs/Winamp */ \"./components/Programs/Winamp.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Programs/Winamp */ \"./components/Programs/Winamp.tsx\")];\n    },\n    modules: ['@/components/Programs/Winamp']\n  }\n});\n_c8 = Winamp;\nvar appLoaders = {\n  dos: {\n    loader: Dos,\n    loaderOptions: _components_Programs_Dos__WEBPACK_IMPORTED_MODULE_5__[\"loaderOptions\"]\n  },\n  explorer: {\n    loader: Explorer,\n    loaderOptions: _components_Programs_Explorer__WEBPACK_IMPORTED_MODULE_6__[\"loaderOptions\"]\n  },\n  webodf: {\n    loader: WebODF,\n    loaderOptions: _components_Programs_WebODF__WEBPACK_IMPORTED_MODULE_7__[\"loaderOptions\"]\n  },\n  winamp: {\n    loader: Winamp,\n    loaderOptions: _components_Programs_Winamp__WEBPACK_IMPORTED_MODULE_8__[\"loaderOptions\"]\n  }\n};\nconsole.log(appLoaders.dos);\n\nvar appLoaderByName = function appLoaderByName(name) {\n  return appLoaders[name];\n};\n\nvar appLoaderByFileType = function appLoaderByFileType(appFile, ext, searchParams) {\n  switch (ext || Object(path__WEBPACK_IMPORTED_MODULE_3__[\"extname\"])(appFile.url)) {\n    case '.jsdos':\n    case '.zip':\n      return _objectSpread(_objectSpread({}, appLoaders.dos), {}, {\n        loadedAppOptions: {\n          file: appFile,\n          args: searchParams ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchParams.entries()).flat() : []\n        }\n      });\n\n    case '.mp3':\n    case '.m3u':\n    case '.wsz':\n      return _objectSpread(_objectSpread({}, appLoaders.winamp), {}, {\n        loadedAppOptions: {\n          file: appFile\n        }\n      });\n\n    default:\n      return undefined;\n  }\n};\n\nvar appLoader = function appLoader(appFile) {\n  var ext = appFile.ext,\n      url = appFile.url;\n\n  if (Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"isValidUrl\"])(url)) {\n    var _URL = new URL(url),\n        pathname = _URL.pathname,\n        searchParams = _URL.searchParams;\n\n    return pathname === _utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"ROOT_DIRECTORY\"] ? appLoaderByName(searchParams.get('app') || '') : appLoaderByFileType(appFile, ext || Object(path__WEBPACK_IMPORTED_MODULE_3__[\"extname\"])(pathname), searchParams);\n  }\n\n  return appLoaderByFileType(appFile);\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Dos$dynamic\");\n$RefreshReg$(_c2, \"Dos\");\n$RefreshReg$(_c3, \"Explorer$dynamic\");\n$RefreshReg$(_c4, \"Explorer\");\n$RefreshReg$(_c5, \"WebODF$dynamic\");\n$RefreshReg$(_c6, \"WebODF\");\n$RefreshReg$(_c7, \"Winamp$dynamic\");\n$RefreshReg$(_c8, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcHJvZ3JhbXMudHM/YjBlMyJdLCJuYW1lcyI6WyJEb3MiLCJkeW5hbWljIiwiRXhwbG9yZXIiLCJXZWJPREYiLCJXaW5hbXAiLCJhcHBMb2FkZXJzIiwiZG9zIiwibG9hZGVyIiwibG9hZGVyT3B0aW9ucyIsImRvc0xvYWRlck9wdGlvbnMiLCJleHBsb3JlciIsImV4cGxvcmVyTG9hZGVyT3B0aW9ucyIsIndlYm9kZiIsIndlYmFtcExvYWRlck9wdGlvbnMiLCJ3aW5hbXAiLCJ3aW5hbXBMb2FkZXJPcHRpb25zIiwiY29uc29sZSIsImxvZyIsImFwcExvYWRlckJ5TmFtZSIsIm5hbWUiLCJhcHBMb2FkZXJCeUZpbGVUeXBlIiwiYXBwRmlsZSIsImV4dCIsInNlYXJjaFBhcmFtcyIsImV4dG5hbWUiLCJ1cmwiLCJsb2FkZWRBcHBPcHRpb25zIiwiZmlsZSIsImFyZ3MiLCJlbnRyaWVzIiwiZmxhdCIsInVuZGVmaW5lZCIsImFwcExvYWRlciIsImlzVmFsaWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIlJPT1RfRElSRUNUT1JZIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtREFBTztBQUFBLFNBQUMsdUlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxnRUFBUjtBQUFBO0FBQUEsY0FBUSwyQkFBUjtBQUFBO0FBQUEsRUFBbkI7TUFBTUQsRztBQUNOLElBQU1FLFFBQVEsR0FBR0QsbURBQU87QUFBQSxTQUFDLGlKQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsMEVBQVI7QUFBQTtBQUFBLGNBQVEsZ0NBQVI7QUFBQTtBQUFBLEVBQXhCO01BQU1DLFE7QUFDTixJQUFNQyxNQUFNLEdBQUdGLG1EQUFPO0FBQUEsU0FBQyw2SUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLHNFQUFSO0FBQUE7QUFBQSxjQUFRLDhCQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRSxNO0FBQ04sSUFBTUMsTUFBTSxHQUFHSCxtREFBTztBQUFBLFNBQUMsNklBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxzRUFBUjtBQUFBO0FBQUEsY0FBUSw4QkFBUjtBQUFBO0FBQUEsRUFBdEI7TUFBTUcsTTtBQUVOLElBQU1DLFVBQXNCLEdBQUc7QUFDN0JDLEtBQUcsRUFBRTtBQUNIQyxVQUFNLEVBQUVQLEdBREw7QUFFSFEsaUJBQWEsRUFBRUMsc0VBQWdCQTtBQUY1QixHQUR3QjtBQUs3QkMsVUFBUSxFQUFFO0FBQ1JILFVBQU0sRUFBRUwsUUFEQTtBQUVSTSxpQkFBYSxFQUFFRywyRUFBcUJBO0FBRjVCLEdBTG1CO0FBUzdCQyxRQUFNLEVBQUU7QUFDTkwsVUFBTSxFQUFFSixNQURGO0FBRU5LLGlCQUFhLEVBQUVLLHlFQUFtQkE7QUFGNUIsR0FUcUI7QUFhN0JDLFFBQU0sRUFBRTtBQUNOUCxVQUFNLEVBQUVILE1BREY7QUFFTkksaUJBQWEsRUFBRU8seUVBQW1CQTtBQUY1QjtBQWJxQixDQUEvQjtBQW1CQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlaLFVBQVUsQ0FBQ0MsR0FBdkI7O0FBRUEsSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFEO0FBQUEsU0FDdEJkLFVBQVUsQ0FBQ2MsSUFBRCxDQURZO0FBQUEsQ0FBeEI7O0FBR0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUMxQkMsT0FEMEIsRUFFMUJDLEdBRjBCLEVBRzFCQyxZQUgwQixFQUlBO0FBQzFCLFVBQVFELEdBQUcsSUFBSUUsb0RBQU8sQ0FBQ0gsT0FBTyxDQUFDSSxHQUFULENBQXRCO0FBQ0UsU0FBSyxRQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0UsNkNBQ0twQixVQUFVLENBQUNDLEdBRGhCO0FBRUVvQix3QkFBZ0IsRUFBRTtBQUNoQkMsY0FBSSxFQUFFTixPQURVO0FBRWhCTyxjQUFJLEVBQUVMLFlBQVksR0FBRyw2RkFBSUEsWUFBWSxDQUFDTSxPQUFiLEVBQUosRUFBNEJDLElBQTVCLEVBQUgsR0FBd0M7QUFGMUM7QUFGcEI7O0FBT0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0UsNkNBQ0t6QixVQUFVLENBQUNTLE1BRGhCO0FBRUVZLHdCQUFnQixFQUFFO0FBQ2hCQyxjQUFJLEVBQUVOO0FBRFU7QUFGcEI7O0FBTUY7QUFDRSxhQUFPVSxTQUFQO0FBcEJKO0FBc0JELENBM0JEOztBQTZCTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWCxPQUFELEVBQTZDO0FBQUEsTUFDNURDLEdBRDRELEdBQy9DRCxPQUQrQyxDQUM1REMsR0FENEQ7QUFBQSxNQUN2REcsR0FEdUQsR0FDL0NKLE9BRCtDLENBQ3ZESSxHQUR1RDs7QUFHcEUsTUFBSVEsNkRBQVUsQ0FBQ1IsR0FBRCxDQUFkLEVBQXFCO0FBQUEsZUFDZ0IsSUFBSVMsR0FBSixDQUFRVCxHQUFSLENBRGhCO0FBQUEsUUFDWFUsUUFEVyxRQUNYQSxRQURXO0FBQUEsUUFDRFosWUFEQyxRQUNEQSxZQURDOztBQUduQixXQUFPWSxRQUFRLEtBQUtDLCtEQUFiLEdBQ0hsQixlQUFlLENBQUNLLFlBQVksQ0FBQ2MsR0FBYixDQUFpQixLQUFqQixLQUEyQixFQUE1QixDQURaLEdBRUhqQixtQkFBbUIsQ0FBQ0MsT0FBRCxFQUFVQyxHQUFHLElBQUlFLG9EQUFPLENBQUNXLFFBQUQsQ0FBeEIsRUFBb0NaLFlBQXBDLENBRnZCO0FBR0Q7O0FBRUQsU0FBT0gsbUJBQW1CLENBQUNDLE9BQUQsQ0FBMUI7QUFDRCxDQVpNIiwiZmlsZSI6Ii4vdXRpbHMvcHJvZ3JhbXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcEZpbGUsIEFwcExvYWRlciwgQXBwTG9hZGVycyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvZ3JhbXMnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgZXh0bmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaXNWYWxpZFVybCB9IGZyb20gJ0AvdXRpbHMvdXJsJztcbmltcG9ydCB7IGxvYWRlck9wdGlvbnMgYXMgZG9zTG9hZGVyT3B0aW9ucyB9IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9ncmFtcy9Eb3MnO1xuaW1wb3J0IHsgbG9hZGVyT3B0aW9ucyBhcyBleHBsb3JlckxvYWRlck9wdGlvbnMgfSBmcm9tICdAL2NvbXBvbmVudHMvUHJvZ3JhbXMvRXhwbG9yZXInO1xuaW1wb3J0IHsgbG9hZGVyT3B0aW9ucyBhcyB3ZWJhbXBMb2FkZXJPcHRpb25zIH0gZnJvbSAnQC9jb21wb25lbnRzL1Byb2dyYW1zL1dlYk9ERic7XG5pbXBvcnQgeyBsb2FkZXJPcHRpb25zIGFzIHdpbmFtcExvYWRlck9wdGlvbnMgfSBmcm9tICdAL2NvbXBvbmVudHMvUHJvZ3JhbXMvV2luYW1wJztcbmltcG9ydCB7IFJPT1RfRElSRUNUT1JZIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBEb3MgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1Byb2dyYW1zL0RvcycpKTtcbmNvbnN0IEV4cGxvcmVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9Qcm9ncmFtcy9FeHBsb3JlcicpKTtcbmNvbnN0IFdlYk9ERiA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvUHJvZ3JhbXMvV2ViT0RGJykpO1xuY29uc3QgV2luYW1wID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAnKSk7XG5cbmNvbnN0IGFwcExvYWRlcnM6IEFwcExvYWRlcnMgPSB7XG4gIGRvczoge1xuICAgIGxvYWRlcjogRG9zLFxuICAgIGxvYWRlck9wdGlvbnM6IGRvc0xvYWRlck9wdGlvbnNcbiAgfSxcbiAgZXhwbG9yZXI6IHtcbiAgICBsb2FkZXI6IEV4cGxvcmVyLFxuICAgIGxvYWRlck9wdGlvbnM6IGV4cGxvcmVyTG9hZGVyT3B0aW9uc1xuICB9LFxuICB3ZWJvZGY6IHtcbiAgICBsb2FkZXI6IFdlYk9ERixcbiAgICBsb2FkZXJPcHRpb25zOiB3ZWJhbXBMb2FkZXJPcHRpb25zXG4gIH0sXG4gIHdpbmFtcDoge1xuICAgIGxvYWRlcjogV2luYW1wLFxuICAgIGxvYWRlck9wdGlvbnM6IHdpbmFtcExvYWRlck9wdGlvbnNcbiAgfVxufTtcblxuY29uc29sZS5sb2coYXBwTG9hZGVycy5kb3MpXG5cbmNvbnN0IGFwcExvYWRlckJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT5cbiAgYXBwTG9hZGVyc1tuYW1lXTtcblxuY29uc3QgYXBwTG9hZGVyQnlGaWxlVHlwZSA9IChcbiAgYXBwRmlsZTogQXBwRmlsZSxcbiAgZXh0Pzogc3RyaW5nLFxuICBzZWFyY2hQYXJhbXM/OiBVUkxTZWFyY2hQYXJhbXNcbik6IEFwcExvYWRlciB8IHVuZGVmaW5lZCA9PiB7XG4gIHN3aXRjaCAoZXh0IHx8IGV4dG5hbWUoYXBwRmlsZS51cmwpKSB7XG4gICAgY2FzZSAnLmpzZG9zJzpcbiAgICBjYXNlICcuemlwJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcExvYWRlcnMuZG9zLFxuICAgICAgICBsb2FkZWRBcHBPcHRpb25zOiB7XG4gICAgICAgICAgZmlsZTogYXBwRmlsZSxcbiAgICAgICAgICBhcmdzOiBzZWFyY2hQYXJhbXMgPyBbLi4uc2VhcmNoUGFyYW1zLmVudHJpZXMoKV0uZmxhdCgpIDogW11cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBjYXNlICcubXAzJzpcbiAgICBjYXNlICcubTN1JzpcbiAgICBjYXNlICcud3N6JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcExvYWRlcnMud2luYW1wLFxuICAgICAgICBsb2FkZWRBcHBPcHRpb25zOiB7XG4gICAgICAgICAgZmlsZTogYXBwRmlsZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwTG9hZGVyID0gKGFwcEZpbGU6IEFwcEZpbGUpOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCB7IGV4dCwgdXJsIH0gPSBhcHBGaWxlO1xuXG4gIGlmIChpc1ZhbGlkVXJsKHVybCkpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwodXJsKTtcblxuICAgIHJldHVybiBwYXRobmFtZSA9PT0gUk9PVF9ESVJFQ1RPUllcbiAgICAgID8gYXBwTG9hZGVyQnlOYW1lKHNlYXJjaFBhcmFtcy5nZXQoJ2FwcCcpIHx8ICcnKVxuICAgICAgOiBhcHBMb2FkZXJCeUZpbGVUeXBlKGFwcEZpbGUsIGV4dCB8fCBleHRuYW1lKHBhdGhuYW1lKSwgc2VhcmNoUGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBhcHBMb2FkZXJCeUZpbGVUeXBlKGFwcEZpbGUpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/programs.ts\n");

/***/ })

})