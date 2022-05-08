(self["webpackChunkvocab_builder"] = self["webpackChunkvocab_builder"] || []).push([["src_app_pages_vocab-list-detail_vocab-list-detail_module_ts"],{

/***/ 4735:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vocab-list-detail/vocab-list-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocabListDetailPageRoutingModule": () => (/* binding */ VocabListDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _vocab_list_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocab-list-detail.page */ 4873);




const routes = [
    {
        path: '',
        component: _vocab_list_detail_page__WEBPACK_IMPORTED_MODULE_0__.VocabListDetailPage
    }
];
let VocabListDetailPageRoutingModule = class VocabListDetailPageRoutingModule {
};
VocabListDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VocabListDetailPageRoutingModule);



/***/ }),

/***/ 417:
/*!*********************************************************************!*\
  !*** ./src/app/pages/vocab-list-detail/vocab-list-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocabListDetailPageModule": () => (/* binding */ VocabListDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _vocab_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocab-list-detail-routing.module */ 4735);
/* harmony import */ var _vocab_list_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocab-list-detail.page */ 4873);







let VocabListDetailPageModule = class VocabListDetailPageModule {
};
VocabListDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vocab_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VocabListDetailPageRoutingModule
        ],
        declarations: [_vocab_list_detail_page__WEBPACK_IMPORTED_MODULE_1__.VocabListDetailPage]
    })
], VocabListDetailPageModule);



/***/ }),

/***/ 4873:
/*!*******************************************************************!*\
  !*** ./src/app/pages/vocab-list-detail/vocab-list-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocabListDetailPage": () => (/* binding */ VocabListDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_vocab_list_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vocab-list-detail.page.html */ 233);
/* harmony import */ var _vocab_list_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocab-list-detail.page.scss */ 2520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dictionary.service */ 3254);
/* harmony import */ var src_app_services_vocab_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vocab-list.service */ 2699);







let VocabListDetailPage = class VocabListDetailPage {
    constructor(route, dictionaryService, vocabListService) {
        this.route = route;
        this.dictionaryService = dictionaryService;
        this.vocabListService = vocabListService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.word = params['id'];
            this.results = this.dictionaryService.getWord(this.word);
            this.results.subscribe((res) => {
                this.phonetics = res.phonetics;
                this.meanings = res.meanings;
            });
        });
    }
};
VocabListDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__.DictionaryService },
    { type: src_app_services_vocab_list_service__WEBPACK_IMPORTED_MODULE_3__.VocabListService }
];
VocabListDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vocab-list-detail',
        template: _raw_loader_vocab_list_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vocab_list_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VocabListDetailPage);



/***/ }),

/***/ 2520:
/*!*********************************************************************!*\
  !*** ./src/app/pages/vocab-list-detail/vocab-list-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2NhYi1saXN0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 233:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vocab-list-detail/vocab-list-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{word}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>Phonetics</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list *ngFor=\"let meaning of meanings\">\n          <ion-item>\n            <ion-label>Part of Speech: {{meaning.partOfSpeech}}</ion-label>\n          </ion-item>\n          <div *ngFor=\"let def of meaning.definitions; let indexOfelement=index;\">\n            <ion-item >\n              <ion-label>Definition {{indexOfelement + 1}}:</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label text-wrap>{{def.definition}}</ion-label>\n            </ion-item>\n            <div *ngIf=\"def.example\" class=\"example\">\n              <ion-item>\n                <ion-label>Example:</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label text-wrap>{{def.example}}</ion-label>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/home']\">Exit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vocab-list-detail_vocab-list-detail_module_ts.js.map