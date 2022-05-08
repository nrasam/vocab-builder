(self["webpackChunkvocab_builder"] = self["webpackChunkvocab_builder"] || []).push([["src_app_pages_review_review_module_ts"],{

/***/ 5799:
/*!*******************************************************!*\
  !*** ./src/app/pages/review/review-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewPageRoutingModule": () => (/* binding */ ReviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.page */ 4784);




const routes = [
    {
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_0__.ReviewPage
    }
];
let ReviewPageRoutingModule = class ReviewPageRoutingModule {
};
ReviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewPageRoutingModule);



/***/ }),

/***/ 1559:
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewPageModule": () => (/* binding */ ReviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _review_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-routing.module */ 5799);
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.page */ 4784);







let ReviewPageModule = class ReviewPageModule {
};
ReviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _review_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewPageRoutingModule
        ],
        declarations: [_review_page__WEBPACK_IMPORTED_MODULE_1__.ReviewPage]
    })
], ReviewPageModule);



/***/ }),

/***/ 4784:
/*!*********************************************!*\
  !*** ./src/app/pages/review/review.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewPage": () => (/* binding */ ReviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_review_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./review.page.html */ 2158);
/* harmony import */ var _review_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.page.scss */ 9265);
/* harmony import */ var _services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/dictionary.service */ 3254);
/* harmony import */ var src_app_services_vocab_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vocab-list.service */ 2699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);






let ReviewPage = class ReviewPage {
    constructor(vocabListService, dictionaryService) {
        this.vocabListService = vocabListService;
        this.dictionaryService = dictionaryService;
        this.reviewList = [];
        this.idx = 0;
        this.listEmpty = true;
    }
    ngOnInit() {
        this.reviewList = this.vocabListService.getReviewList();
        if (this.reviewList.length <= 0) {
            this.word = "Learn a word first";
        }
        else {
            this.word = this.reviewList[this.idx].word;
            this.listEmpty = false;
        }
    }
    nextWord() {
        if ((this.reviewList.length - 1) != this.idx) {
            this.word = this.reviewList[++this.idx].word;
        }
        else {
            this.listEmpty = true;
            this.word = "Go learn another word";
        }
    }
    onForgotten() {
        this.vocabListService.addTimeToWord(2000, this.word);
        this.nextWord();
    }
    onPartial() {
        this.vocabListService.addTimeToWord(5000, this.word);
        this.nextWord();
    }
    onWithEffort() {
        this.vocabListService.addTimeToWord(10000, this.word);
        this.nextWord();
    }
    onImmediate() {
        this.vocabListService.addTimeToWord(15000, this.word);
        this.nextWord();
    }
    onDelete() {
        this.vocabListService.deleteWord(this.word);
        this.vocabListService.addTimeToWord(0, this.word);
        this.nextWord();
    }
};
ReviewPage.ctorParameters = () => [
    { type: src_app_services_vocab_list_service__WEBPACK_IMPORTED_MODULE_3__.VocabListService },
    { type: _services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__.DictionaryService }
];
ReviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-review',
        template: _raw_loader_review_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_review_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReviewPage);



/***/ }),

/***/ 9265:
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2158:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Do You Remember This Word?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"3\">\n        <ion-title>{{word}}</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!listEmpty\">\n      <ion-col offset=\"2\" size=\"8\">\n        <ion-card button=\"true\" (click)=\"onImmediate()\">\n          <ion-item>\n            <ion-icon name=\"skull\" slot=\"start\"></ion-icon>\n            <ion-label>Forgotten</ion-label>\n          </ion-item>\n          <ion-card-content>\n            Next Test: <ion-icon name=\"alarm\"></ion-icon> 1 Minute\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!listEmpty\">\n      <ion-col offset=\"2\" size=\"8\">\n        <ion-card button=\"true\" (click)=\"onImmediate()\">\n          <ion-item>\n            <ion-icon name=\"sad\" slot=\"start\"></ion-icon>\n            <ion-label>Partially Recalled</ion-label>\n          </ion-item>\n          <ion-card-content>\n            Next Test: <ion-icon name=\"calendar\"></ion-icon> 3 Days\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!listEmpty\">\n      <ion-col offset=\"2\" size=\"8\">\n        <ion-card button=\"true\" (click)=\"onImmediate()\">\n          <ion-item>\n            <ion-icon name=\"happy\" slot=\"start\"></ion-icon>\n            <ion-label>Recalled With Effort</ion-label>\n          </ion-item>\n          <ion-card-content>\n            Next Test: <ion-icon name=\"calendar\"></ion-icon> 4 Days\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!listEmpty\">\n      <ion-col offset=\"2\" size=\"8\">\n        <ion-card button=\"true\" (click)=\"onImmediate()\">\n          <ion-item>\n            <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n            <ion-label>Immediately</ion-label>\n          </ion-item>\n          <ion-card-content>\n            Next Test: <ion-icon name=\"calendar\"></ion-icon> 7 Days\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!listEmpty\">\n      <ion-col offset=\"2\" size=\"8\">\n        <ion-card button=\"true\" (click)=\"onImmediate()\">\n          <ion-item>\n            <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n            <ion-label>Delete</ion-label>\n          </ion-item>\n          <ion-card-content>\n            Remove from list\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{reviewList.length}} words in list</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{reviewList.length - idx}} words left</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review_review_module_ts.js.map