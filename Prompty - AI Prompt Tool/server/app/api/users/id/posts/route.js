"use strict";
(() => {
var exports = {};
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/users/id/posts/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./models/prompt.js
var models_prompt = __webpack_require__(960);
// EXTERNAL MODULE: ./utils/database.js
var database = __webpack_require__(8400);
;// CONCATENATED MODULE: ./app/api/users/id/posts/route.js


const GET = async (request, { params })=>{
    try {
        await (0,database/* connectToDB */.P)();
        const prompts = await models_prompt/* default */.Z.find({
            creator: params.id
        }).populate("creator");
        return new Response(JSON.stringify(prompts), {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Fid%2Fposts%2Froute&name=app%2Fapi%2Fusers%2Fid%2Fposts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fid%2Fposts%2Froute.js&appDir=%2FUsers%2Fmertevirgen%2FDesktop%2Fprompty%2Fapp&appPaths=%2Fapi%2Fusers%2Fid%2Fposts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/users/id/posts/route",
        pathname: "/api/users/id/posts",
        filename: "route",
        bundlePath: "app/api/users/id/posts/route"
    },
    resolvedPagePath: "/Users/mertevirgen/Desktop/prompty/app/api/users/id/posts/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/users/id/posts/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,501,778], () => (__webpack_exec__(2511)));
module.exports = __webpack_exports__;

})();