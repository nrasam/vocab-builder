(self["webpackChunkvocab_builder"] = self["webpackChunkvocab_builder"] || []).push([["src_app_pages_my-vocab-list_my-vocab-list_module_ts"],{

/***/ 9014:
/*!**************************************!*\
  !*** ./src/app/models/vocab-word.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocabWord": () => (/* binding */ VocabWord)
/* harmony export */ });
class VocabWord {
    constructor(_word, _ignore, _timeUntil, _date) {
        this._word = _word;
        this._ignore = _ignore;
        this._timeUntil = _timeUntil;
        this._date = _date;
    }
    get word() {
        return this._word;
    }
    set word(word) {
        this._word = word;
    }
    get ignore() {
        return this._ignore;
    }
    set ignore(bool) {
        this._ignore = bool;
    }
    get timeUntil() {
        return this._timeUntil;
    }
    set timeUntil(time) {
        this._timeUntil = time;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
    IsTimeUntilOver() {
        if (Date.now() - this.date > this.timeUntil) {
            this.timeUntil = 0;
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ 4930:
/*!*********************************************************************!*\
  !*** ./src/app/pages/my-vocab-list/my-vocab-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyVocabListPageRoutingModule": () => (/* binding */ MyVocabListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _my_vocab_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-vocab-list.page */ 1845);




const routes = [
    {
        path: '',
        component: _my_vocab_list_page__WEBPACK_IMPORTED_MODULE_0__.MyVocabListPage
    }
];
let MyVocabListPageRoutingModule = class MyVocabListPageRoutingModule {
};
MyVocabListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyVocabListPageRoutingModule);



/***/ }),

/***/ 6379:
/*!*************************************************************!*\
  !*** ./src/app/pages/my-vocab-list/my-vocab-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyVocabListPageModule": () => (/* binding */ MyVocabListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _my_vocab_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-vocab-list-routing.module */ 4930);
/* harmony import */ var _my_vocab_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-vocab-list.page */ 1845);







let MyVocabListPageModule = class MyVocabListPageModule {
};
MyVocabListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_vocab_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyVocabListPageRoutingModule
        ],
        declarations: [_my_vocab_list_page__WEBPACK_IMPORTED_MODULE_1__.MyVocabListPage]
    })
], MyVocabListPageModule);



/***/ }),

/***/ 1845:
/*!***********************************************************!*\
  !*** ./src/app/pages/my-vocab-list/my-vocab-list.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyVocabListPage": () => (/* binding */ MyVocabListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_vocab_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-vocab-list.page.html */ 7626);
/* harmony import */ var _my_vocab_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-vocab-list.page.scss */ 5218);
/* harmony import */ var _services_vocab_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/vocab-list.service */ 2699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let MyVocabListPage = class MyVocabListPage {
    constructor(vocabListService) {
        this.vocabListService = vocabListService;
    }
    ngOnInit() {
        this.vocabList = this.vocabListService.getVocabList();
        this.vocabSize = this.vocabList.length;
    }
};
MyVocabListPage.ctorParameters = () => [
    { type: _services_vocab_list_service__WEBPACK_IMPORTED_MODULE_2__.VocabListService }
];
MyVocabListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-vocab-list',
        template: _raw_loader_my_vocab_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_vocab_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyVocabListPage);



/***/ }),

/***/ 2699:
/*!************************************************!*\
  !*** ./src/app/services/vocab-list.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocabListService": () => (/* binding */ VocabListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _models_vocab_word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vocab-word */ 9014);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);




let VocabListService = class VocabListService {
    constructor(storage) {
        this.storage = storage;
        this.vocabList = [];
        this._storage = null;
        //this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            const storage = yield this.storage.create();
            this._storage = storage;
            storage.forEach((key, value, index) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                this.vocabList.push(yield storage.get('key'));
            }));
        });
    }
    getVocabList() {
        return [...this.vocabList.filter(word => !word.ignore)];
    }
    getVocabSize() {
        return this.vocabList.filter(word => !word.ignore).length;
    }
    saveWord(word, ignore) {
        this.vocabList.push(new _models_vocab_word__WEBPACK_IMPORTED_MODULE_0__.VocabWord(word, ignore, 0, Date.now()));
        //this._storage?.set(word, this.vocabList[this.vocabList.length - 1]);
    }
    getRandomVocabWord() {
        if (this.getVocabSize() <= 0) {
            return "Learn a word first";
        }
        var random = Math.floor(Math.random() * this.getVocabSize());
        return this.getVocabList()[random].word;
    }
    getReviewList() {
        return [...this.vocabList.filter(word => !word.ignore).filter(word => word.IsTimeUntilOver())];
    }
    deleteWord(word) {
        //this.vocabList = this.vocabList.filter(vocab => vocab.word != word);
        let idx = this.vocabList.findIndex(val => val.word == word);
        this.vocabList[idx].ignore = true;
    }
    addTimeToWord(time, word) {
        let idx = this.vocabList.findIndex(val => val.word == word);
        this.vocabList[idx].timeUntil = time;
    }
};
VocabListService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
VocabListService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], VocabListService);



/***/ }),

/***/ 5218:
/*!*************************************************************!*\
  !*** ./src/app/pages/my-vocab-list/my-vocab-list.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS12b2NhYi1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7626:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-vocab-list/my-vocab-list.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Your Vocab List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>You've Learned {{vocabSize}} Words!</ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let word of vocabList\" [routerLink]=\"['/vocab-list-detail', word.word]\">\n      <ion-label>{{word.word}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-vocab-list_my-vocab-list_module_ts.js.map