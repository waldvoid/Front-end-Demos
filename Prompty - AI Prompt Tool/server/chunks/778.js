"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PromptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    creator: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [
            true,
            "Prompt is required."
        ]
    },
    tag: {
        type: String,
        required: [
            true,
            "Tag is required."
        ]
    }
});
const Prompt = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Prompt || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Prompt", PromptSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);


/***/ }),

/***/ 8400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ connectToDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let isConnected = false; // track the connection
const connectToDB = async ()=>{
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set("strictQuery", true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;