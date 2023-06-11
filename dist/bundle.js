/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./home/script/script-ts/api/api.ts":
/*!******************************************!*\
  !*** ./home/script/script-ts/api/api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass API {\n    constructor(url) {\n        this.url = url;\n    }\n    getData(headers, pathParameters) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, { headers });\n                if (!response.ok) {\n                    throw new Error(`HTTP error! status: ${response.status}`);\n                }\n                return yield response.json();\n            }\n            catch (err) {\n                console.error('Failed to fetch data: ', err);\n            }\n        });\n    }\n    postData(body, headers) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(this.url, {\n                    method: 'POST',\n                    headers: headers,\n                    body: JSON.stringify(body),\n                });\n                if (!response.ok) {\n                    throw new Error(`HTTP error! status: ${response.status}`);\n                }\n                return yield response.json();\n            }\n            catch (err) {\n                console.error('Failed to fetch data: ', err);\n                return null;\n            }\n        });\n    }\n    deleteData(post_id, headers) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(`${this.url}/${post_id}`, {\n                    method: 'DELETE',\n                    headers: headers,\n                });\n                if (!response.ok) {\n                    throw new Error(`HTTP error! status: ${response.status}`);\n                }\n                return yield response.json();\n            }\n            catch (err) {\n                console.error('Failed to fetch data: ', err);\n                return null;\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./home/script/script-ts/api/api.ts?");

/***/ }),

/***/ "./home/script/script-ts/api/model/post.ts":
/*!*************************************************!*\
  !*** ./home/script/script-ts/api/model/post.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Post: () => (/* binding */ Post)\n/* harmony export */ });\nclass Post {\n    constructor(data) {\n        this.id = data.id;\n        this.text = data.text;\n        this.image = data.image;\n        this.user = data.user_id;\n        this.likeCount = data.like_count;\n        this.createdAt = new Date(data.createdAt);\n        this.userLike = data.post_likes.length > 0 ? true : false;\n        this.profile = data.user.profile_picture;\n        this.userName = data.user.name;\n        this.userDescription = data.user.description;\n    }\n}\n\n\n//# sourceURL=webpack:///./home/script/script-ts/api/model/post.ts?");

/***/ }),

/***/ "./home/script/script-ts/api/model/user.ts":
/*!*************************************************!*\
  !*** ./home/script/script-ts/api/model/user.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(data) {\n        this.id = data.id;\n        this.profilePicture = data.profile_picture;\n        this.name = data.name;\n        this.description = data.description;\n        this.followers = data.followers.length;\n    }\n}\n\n\n//# sourceURL=webpack:///./home/script/script-ts/api/model/user.ts?");

/***/ }),

/***/ "./home/script/script-ts/controller/home_controller.ts":
/*!*************************************************************!*\
  !*** ./home/script/script-ts/controller/home_controller.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./home/script/script-ts/api/api.ts\");\n/* harmony import */ var _api_model_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/model/post */ \"./home/script/script-ts/api/model/post.ts\");\n/* harmony import */ var _api_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/model/user */ \"./home/script/script-ts/api/model/user.ts\");\n/* harmony import */ var _view_components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/components/icons */ \"./home/script/script-ts/view/components/icons.ts\");\n/* harmony import */ var _view_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/home */ \"./home/script/script-ts/view/home.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass HomeController {\n    constructor() {\n        this.apiPosts = new _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost:4001/dev/post/list\");\n        this.apiPost = new _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost:4001/dev/post\");\n        this.apiUser = new _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost:4000/dev/user\");\n        this.apiLike = new _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost:4002/dev/like\");\n        this.home = new _view_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    }\n    initialize() {\n        document.addEventListener('DOMContentLoaded', () => __awaiter(this, void 0, void 0, function* () {\n            const postsContainer = document.querySelector('#postsContainer');\n            if (postsContainer) {\n                const posts = yield this.apiPosts.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });\n                posts.forEach((postBody) => {\n                    const post = new _api_model_post__WEBPACK_IMPORTED_MODULE_1__.Post(postBody);\n                    const postElement = this.home.createPostElement(post, this.createLikeHandler.bind(this));\n                    if (postElement) {\n                        postsContainer.appendChild(postElement);\n                    }\n                });\n            }\n            const userBody = yield this.apiUser.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });\n            const user = new _api_model_user__WEBPACK_IMPORTED_MODULE_2__.User(userBody);\n            const userAsideContainer = document.getElementById('userAsideContainer');\n            const addPostContainer = document.getElementById('addPostContainer');\n            const navBarContainer = document.getElementById('navBarContainer');\n            if (userAsideContainer && addPostContainer && navBarContainer) {\n                const asideElement = this.home.createAsideElement(user);\n                const newPostElement = this.home.createAddNewPostElement(user);\n                const navBarElement = this.home.createNavBar();\n                if (asideElement) {\n                    userAsideContainer.appendChild(asideElement);\n                }\n                if (newPostElement) {\n                    addPostContainer.appendChild(newPostElement);\n                }\n                if (navBarElement) {\n                    navBarContainer.appendChild(navBarElement);\n                }\n                (0,_view_components_icons__WEBPACK_IMPORTED_MODULE_3__.filterIcons)();\n            }\n        }));\n    }\n    createLikeHandler() {\n        return (post) => __awaiter(this, void 0, void 0, function* () {\n            console.log(\"chamou \" + post.userLike);\n            let body = { post_id: post.id, user_id: 'faff6421-9952-47da-8748-4781c3517d81' };\n            let response;\n            if (post.userLike === false) {\n                response = yield this.apiLike.postData(body);\n            }\n            else if (post.userLike) {\n                response = yield this.apiLike.deleteData(post.id, { 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });\n            }\n            const updatedPostData = yield this.apiPost.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' }, post.id);\n            const updatedPost = new _api_model_post__WEBPACK_IMPORTED_MODULE_1__.Post(updatedPostData);\n            return updatedPost;\n        });\n    }\n}\nconst controller = new HomeController();\ncontroller.initialize();\n\n\n//# sourceURL=webpack:///./home/script/script-ts/controller/home_controller.ts?");

/***/ }),

/***/ "./home/script/script-ts/view/components/icons.ts":
/*!********************************************************!*\
  !*** ./home/script/script-ts/view/components/icons.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LiIcon: () => (/* binding */ LiIcon),\n/* harmony export */   filterIcons: () => (/* binding */ filterIcons)\n/* harmony export */ });\nclass LiIcon extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        const type = this.getAttribute('type') || '';\n        let imgContent = '';\n        let changeToGrey = \"filter: invert(45%) sepia(7%) saturate(8%) hue-rotate(32deg) brightness(92%) contrast(84%);\";\n        switch (type) {\n            case 'home':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/25/25694.png\"></img>`;\n                break;\n            case 'network':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/149/149724.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'jobs':\n                imgContent = `<img src=\"https://cdn.onlinewebfonts.com/svg/img_189068.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'messages':\n                imgContent = `<img src=\"https://pixlok.com/wp-content/uploads/2021/07/Message-Free-Icon-fidswo.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'notification':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/565/565422.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'profile':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/3135/3135715.png\"></img>`;\n                break;\n            case 'arrow':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/60/60995.png\" style=\"height: 12px; ${changeToGrey}\"></img>`;\n                break;\n            case 'search':\n                imgContent = `<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png\"\"></img>`;\n                break;\n            case 'photo':\n                imgContent = `<img src=\"https://cdn2.iconfinder.com/data/icons/web-interface-icons/66/Img-512.png\"></img>`;\n                break;\n            case 'video':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/4397/4397315.png\"></img>`;\n                break;\n            case 'event':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/4285/4285436.png\"></img>`;\n                break;\n            case 'write-article':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/256/3959/3959355.png\"></img>`;\n                break;\n            case 'like':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/2107/2107956.png\"></img>`;\n                break;\n            case 'comment':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/1380/1380338.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'share':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/3917/3917447.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            case 'send':\n                imgContent = `<img src=\"https://cdn-icons-png.flaticon.com/512/223/223484.png\" style=\"${changeToGrey}\"></img>`;\n                break;\n            default:\n                imgContent = '';\n        }\n        this.innerHTML = imgContent;\n    }\n}\ncustomElements.define('li-icon', LiIcon);\nfunction filterIcons() {\n    document.querySelectorAll('nav .center a').forEach((link) => {\n        link.addEventListener('click', (event) => {\n            // Prevent the default link behavior\n            event.preventDefault();\n            const targetLink = event.currentTarget;\n            if (targetLink.classList.contains('profile')) {\n                return;\n            }\n            // Remove the 'active' class from all links\n            document.querySelectorAll('nav .center a').forEach((otherLink) => {\n                otherLink.classList.remove('active');\n                const img = otherLink.querySelector('li-icon img');\n                if (img && !otherLink.classList.contains('profile')) {\n                    img.style.filter =\n                        'invert(45%) sepia(7%) saturate(8%) hue-rotate(32deg) brightness(92%) contrast(84%)';\n                    img.style.height = '23px';\n                }\n            });\n            // Add the 'active' class to the clicked link\n            targetLink.classList.add('active');\n            const img = targetLink.querySelector('li-icon img');\n            if (img) {\n                img.style.filter = 'none';\n                img.style.height = '25px';\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./home/script/script-ts/view/components/icons.ts?");

/***/ }),

/***/ "./home/script/script-ts/view/home.ts":
/*!********************************************!*\
  !*** ./home/script/script-ts/view/home.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass Home {\n    createPostElement(post, createLikeHandler) {\n        let createdAt = post.createdAt;\n        let formattedDate = createdAt.toLocaleString();\n        const template = document.querySelector('#postContainer');\n        let postContainer = null;\n        if (template) {\n            postContainer = document.importNode(template.content, true);\n        }\n        if (postContainer) {\n            const imgAuthor = postContainer.querySelector(\".img-author\");\n            const authorName = postContainer.querySelector(\".author-name\");\n            const descriptionAuthor = postContainer.querySelector(\".description-author\");\n            const postTime = postContainer.querySelector(\".timestamp-post\");\n            const postText = postContainer.querySelector(\".text\");\n            const postImg = postContainer.querySelector(\".post-img\");\n            const authorImg = postContainer.querySelector(\".author-img\");\n            const iconLike = postContainer.querySelector(\".like\");\n            const countLike = postContainer.querySelector(\".like-count\");\n            const commentCount = postContainer.querySelector(\".comment-count\");\n            const shareCount = postContainer.querySelector(\".share-count\");\n            const likeButton = postContainer.querySelector('.like-button');\n            if (!imgAuthor || !authorName || !descriptionAuthor || !postTime || !postText || !postImg || !authorImg || !iconLike || !countLike || !commentCount || !shareCount || !likeButton) {\n                throw new Error('Could not find required element(s) in postContainer');\n            }\n            imgAuthor.src = post.profile;\n            authorName.textContent = post.userName;\n            descriptionAuthor.textContent = post.userDescription;\n            postTime.textContent = formattedDate;\n            postText.textContent = post.text;\n            if (post.image != null) {\n                postImg.style.display = 'block';\n                authorImg.src = post.image;\n            }\n            else {\n                postImg.style.display = 'none';\n            }\n            countLike.textContent = 'curtidas ' + post.likeCount;\n            commentCount.textContent = 0 + ' comentarios';\n            shareCount.textContent = 0 + ' compartilhamentos';\n            let liked = post.userLike;\n            if (liked) {\n                iconLike.classList.add('liked');\n            }\n            else {\n                iconLike.classList.remove('liked');\n            }\n            // Attach a click event listener to the like button\n            likeButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n                post = yield createLikeHandler()(post);\n                console.log(post);\n                liked = post.userLike;\n                if (liked) {\n                    likeButton.classList.remove('no-liked');\n                    likeButton.classList.add('liked');\n                }\n                else {\n                    likeButton.classList.remove('liked');\n                    likeButton.classList.add('no-liked');\n                }\n                countLike.textContent = 'curtidas ' + post.likeCount;\n            }));\n            return postContainer;\n        }\n        return;\n    }\n    createAsideElement(user) {\n        const template = document.createElement('template');\n        template.innerHTML = `<aside class=\"user\">\r\n        <div class=\"background\"></div>\r\n        <div class=\"user-profile\">\r\n            <img src=\"${user.profilePicture}\"\r\n                alt=\"\">\r\n            <span class=\"user-name\">${user.name.toUpperCase()}</span>\r\n            <span class=\"user-optional-description\">${user.description}</span>\r\n        </div>\r\n        <div class=\"user-network\">\r\n            <div class=\"flex-direction\">\r\n                <span>Conexões</span>\r\n                <a href=\"\">${user.followers}</a>\r\n            </div>\r\n            <a href=\"\">Amplie sua rede</a>\r\n        </div>\r\n        <div class=\"tools\">\r\n            <span>Acesse ferramentas e estatísticas exclusivas</span>\r\n            <a href=\"\">Seja contratado mais rápido. Tente Premium livre.</a>\r\n        </div>\r\n        <div class=\"saves\">\r\n            <img src=\"https://static.thenounproject.com/png/809340-200.png\" alt=\"\">\r\n            <span>Meus itens</span>\r\n        </div>\r\n    </aside>`;\n        return template.content.firstChild;\n    }\n    createAddNewPostElement(user) {\n        const template = document.createElement('template');\n        template.innerHTML = `<div class=\"add-post\">\r\n        <div class=\"flex-direction-input\">\r\n            <img src=\"${user.profilePicture}\"\r\n                alt=\"\">\r\n            <input type=\"text\" placeholder=\"Começar publicação\">\r\n        </div>\r\n        <ul>\r\n            <li><a href=\"\">\r\n                    <li-icon type=\"photo\"></li-icon>\r\n                    <span class=\"category-text\">Foto</span>\r\n                </a></li>\r\n            <li><a href=\"\">\r\n                    <li-icon type=\"video\"></li-icon>\r\n                    <span class=\"category-text\">Video</span>\r\n                </a></li>\r\n            <li><a href=\"\">\r\n                    <li-icon type=\"event\"></li-icon>\r\n                    <span class=\"category-text\">Evento</span>\r\n                </a></li>\r\n            <li><a href=\"\">\r\n                    <li-icon type=\"write-article\"></li-icon>\r\n                    <span class=\"category-text\">Escrever artigo</span>\r\n                </a></li>\r\n        </ul>\r\n    </div>`;\n        return template.content.firstChild;\n    }\n    createNavBar() {\n        const template = document.createElement('template');\n        template.innerHTML = `<nav>\r\n        <div class=\"left\">\r\n            <img src=\"https://cdn-icons-png.flaticon.com/512/174/174857.png\" alt=\"\">\r\n            <div class=\"search-bar\">\r\n                <input type=\"text\" placeholder=\"Pesquisar\">\r\n                <li-icon type=\"search\"></li-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"center\">\r\n            <a href=\"\" class=\"home active\">\r\n                <li-icon type=\"home\"></li-icon>\r\n                <span title=\"Inicio\">Inicio</span>\r\n            </a>\r\n            <a href=\"\" class=\"network\">\r\n                <li-icon type=\"network\"></li-icon>\r\n                <span title=\"Minha rede\">Minha rede</span>\r\n            </a>\r\n            <a href=\"\" class=\"jobs\">\r\n                <li-icon type=\"jobs\"></li-icon>\r\n                <span title=\"Vagas\">Vagas</span>\r\n            </a>\r\n            <a href=\"\" class=\"messages\">\r\n                <li-icon type=\"messages\"></li-icon>\r\n                <span title=\"Messagens\">Messagens</span>\r\n            </a>\r\n            <a href=\"\" class=\"notification\">\r\n                <li-icon type=\"notification\"></li-icon>\r\n                <span title=\"Notificações\">Notificações</span>\r\n            </a>\r\n            <a href=\"\" class=\"profile\">\r\n                <li-icon type=\"profile\"></li-icon>\r\n                <div>\r\n                    <span title=\"Eu\">Eu</span>\r\n                    <li-icon type=\"arrow\"></li-icon>\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <div class=\"right\"></div>\r\n    </nav>`;\n        return template.content.firstChild;\n    }\n}\n\n\n//# sourceURL=webpack:///./home/script/script-ts/view/home.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./home/script/script-ts/controller/home_controller.ts");
/******/ 	
/******/ })()
;