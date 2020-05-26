(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contact-form-contact-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contact-form/contact-form.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contact-form/contact-form.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nome</ion-label>\r\n      <ion-input autocapitalize=\"on\" [(ngModel)]=\"contact.name\" name=\"name\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"ion-margin-vertical\">\r\n      <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">Salvar</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-form/contact-form.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/contacts/contact-form/contact-form.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormPageModule", function() { return ContactFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form.page */ "./src/app/contacts/contact-form/contact-form.page.ts");







var routes = [
    {
        path: '',
        component: _contact_form_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormPage"]
    }
];
var ContactFormPageModule = /** @class */ (function () {
    function ContactFormPageModule() {
    }
    ContactFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_form_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormPage"]]
        })
    ], ContactFormPageModule);
    return ContactFormPageModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-form/contact-form.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/contacts/contact-form/contact-form.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contacts/contact-form/contact-form.page.ts":
/*!************************************************************!*\
  !*** ./src/app/contacts/contact-form/contact-form.page.ts ***!
  \************************************************************/
/*! exports provided: ContactFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormPage", function() { return ContactFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/contact.service */ "./src/app/contacts/shared/contact.service.ts");
/* harmony import */ var _shared_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/contact */ "./src/app/contacts/shared/contact.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var ContactFormPage = /** @class */ (function () {
    function ContactFormPage(contactService, route, toastCtrl) {
        this.contactService = contactService;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.title = 'Novo contato';
    }
    ContactFormPage.prototype.ngOnInit = function () {
        this.contact = new _shared_contact__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
        var idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
            this.title = 'Editar contato';
            this.loadContact(parseInt(idParam));
        }
    };
    ContactFormPage.prototype.loadContact = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactService.getById(id)];
                    case 1:
                        _a.contact = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactFormPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, toast, error_1, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.contactService.save(this.contact)];
                    case 1:
                        result = _a.sent();
                        this.contact.id = result.insertId;
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: 'Sucesso',
                                message: 'Contato salvo com sucesso.',
                                color: 'success',
                                position: 'bottom',
                                duration: 3000
                            })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: 'Erro',
                                message: 'Ocorreu um erro ao tentar salvar o Contato.',
                                color: 'danger',
                                position: 'bottom',
                                duration: 3000
                            })];
                    case 4:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ContactFormPage.ctorParameters = function () { return [
        { type: _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
    ]; };
    ContactFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! raw-loader!./contact-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contact-form/contact-form.page.html"),
            styles: [__webpack_require__(/*! ./contact-form.page.scss */ "./src/app/contacts/contact-form/contact-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], ContactFormPage);
    return ContactFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contact-form-contact-form-module-es5.js.map