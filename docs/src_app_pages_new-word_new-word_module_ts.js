(self["webpackChunkvocab_builder"] = self["webpackChunkvocab_builder"] || []).push([["src_app_pages_new-word_new-word_module_ts"],{

/***/ 6809:
/*!***********************************************************!*\
  !*** ./src/app/pages/new-word/new-word-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewWordPageRoutingModule": () => (/* binding */ NewWordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_word_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-word.page */ 4535);




const routes = [
    {
        path: '',
        component: _new_word_page__WEBPACK_IMPORTED_MODULE_0__.NewWordPage
    }
];
let NewWordPageRoutingModule = class NewWordPageRoutingModule {
};
NewWordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewWordPageRoutingModule);



/***/ }),

/***/ 5037:
/*!***************************************************!*\
  !*** ./src/app/pages/new-word/new-word.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewWordPageModule": () => (/* binding */ NewWordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_word_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-word-routing.module */ 6809);
/* harmony import */ var _new_word_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-word.page */ 4535);







let NewWordPageModule = class NewWordPageModule {
};
NewWordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_word_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewWordPageRoutingModule
        ],
        declarations: [_new_word_page__WEBPACK_IMPORTED_MODULE_1__.NewWordPage]
    })
], NewWordPageModule);



/***/ }),

/***/ 4535:
/*!*************************************************!*\
  !*** ./src/app/pages/new-word/new-word.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewWordPage": () => (/* binding */ NewWordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_word_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-word.page.html */ 1403);
/* harmony import */ var _new_word_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-word.page.scss */ 622);
/* harmony import */ var _services_vocab_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/vocab-list.service */ 2699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_dictionary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dictionary.service */ 3254);






let NewWordPage = class NewWordPage {
    constructor(dictionaryService, vocabListService) {
        this.dictionaryService = dictionaryService;
        this.vocabListService = vocabListService;
    }
    ngOnInit() {
        this.getRandomWord();
    }
    getRandomWord() {
        this.results = this.dictionaryService.getRandomWord();
        this.results.subscribe((res) => {
            this.word = res.word;
            this.phonetics = res.phonetics;
            this.meanings = res.meanings;
            //this.vocabListService.saveWord(this.word, ignore);
        });
    }
    nextWord() {
        this.vocabListService.saveWord(this.word, false);
        this.getRandomWord();
    }
    ignore() {
        this.vocabListService.saveWord(this.word, true);
        this.getRandomWord();
    }
};
NewWordPage.ctorParameters = () => [
    { type: _services_dictionary_service__WEBPACK_IMPORTED_MODULE_3__.DictionaryService },
    { type: _services_vocab_list_service__WEBPACK_IMPORTED_MODULE_2__.VocabListService }
];
NewWordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-word',
        template: _raw_loader_new_word_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_word_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewWordPage);



/***/ }),

/***/ 622:
/*!***************************************************!*\
  !*** ./src/app/pages/new-word/new-word.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1403:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-word/new-word.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{word}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>Phonetics</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list *ngFor=\"let meaning of meanings\">\n          <ion-item>\n            <ion-label>Part of Speech: {{meaning.partOfSpeech}}</ion-label>\n          </ion-item>\n          <div *ngFor=\"let def of meaning.definitions; let indexOfelement=index;\">\n            <ion-item >\n              <ion-label>Definition {{indexOfelement + 1}}:</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label text-wrap>{{def.definition}}</ion-label>\n            </ion-item>\n            <div *ngIf=\"def.example\" class=\"example\">\n              <ion-item>\n                <ion-label>Example:</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label text-wrap>{{def.example}}</ion-label>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"testAPI()\">Play Audio</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"ignore()\" >Ignore</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"nextWord()\">Next Word</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/home']\">Exit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-word_new-word_module_ts.js.map