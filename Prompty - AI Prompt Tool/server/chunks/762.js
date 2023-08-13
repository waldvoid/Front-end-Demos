"use strict";
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 9762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick })=>{
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleProfileClick = ()=>{
        console.log(post);
        if (post.creator._id === session?.user.id) return router.push("/profile");
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };
    const handleCopy = ()=>{
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(()=>setCopied(false), 3000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "prompt_card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-start gap-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex justify-start items-center gap-3 cursor-pointer",
                        onClick: handleProfileClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: post.creator.image,
                                alt: "user_image",
                                width: 40,
                                height: 40,
                                className: "rounded-full object-contain"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "font-satoshi font-semibold text-gray-900",
                                        children: post.creator.username
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-inter text-sm text-gray-500",
                                        children: post.creator.email
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "copy_btn",
                        onClick: handleCopy,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg",
                            alt: copied === post.prompt ? "tick_icon" : "copy_icon",
                            width: 12,
                            height: 12
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-4 font-satoshi text-sm text-gray-700",
                children: post.prompt
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "font-inter text-sm blue_gradient cursor-pointer",
                onClick: ()=>handleTagClick && handleTagClick(post.tag),
                children: [
                    "#",
                    post.tag
                ]
            }),
            session?.user.id === post.creator._id && pathName === "/profile" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-5 flex-center gap-4 border-t border-gray-100 pt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-inter text-sm green_gradient cursor-pointer",
                        onClick: handleEdit,
                        children: "Edit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-inter text-sm orange_gradient cursor-pointer",
                        onClick: handleDelete,
                        children: "Delete"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromptCard);


/***/ })

};
;