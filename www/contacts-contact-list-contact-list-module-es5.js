(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contact-list-contact-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contact-list/contact-list.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contact-list/contact-list.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Contatos</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar placeholder=\"Pesquisar\" \r\n    (ionClear)=\"doSerchClear()\"\r\n    (ionChange)=\"doSerchBarChange($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let contact of contacts\">\r\n      <ion-item>\r\n        <ion-label>{{contact.name}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"start\">        \r\n        <ion-item-option [routerLink]=\"['edit', contact.id]\">\r\n          <ion-icon slot=\"icon-only\" name=\"create\" color=\"secondary\"></ion-icon>\r\n        </ion-item-option>        \r\n        <ion-item-option (click)=\"delete(contact)\">\r\n          <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"secondary\" [routerLink]=\"['new']\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageModule", function() { return ContactListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-list.page */ "./src/app/contacts/contact-list/contact-list.page.ts");







var routes = [
    {
        path: '',
        component: _contact_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactListPage"]
    }
];
var ContactListPageModule = /** @class */ (function () {
    function ContactListPageModule() {
    }
    ContactListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactListPage"]]
        })
    ], ContactListPageModule);
    return ContactListPageModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.page.ts":
/*!************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.page.ts ***!
  \************************************************************/
/*! exports provided: ContactListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPage", function() { return ContactListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/contact.service */ "./src/app/contacts/shared/contact.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ContactListPage = /** @class */ (function () {
    function ContactListPage(contactService, toastCtrl, alertCtrl) {
        this.contactService = contactService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.contacts = [];
    }
    ContactListPage.prototype.ngOnInit = function () {
    };
    ContactListPage.prototype.ionViewWillEnter = function () {
        this.loadContacts();
    };
    ContactListPage.prototype.loadContacts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactService.getAll()];
                    case 1:
                        _a.contacts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactListPage.prototype.doSerchClear = function () {
        this.loadContacts();
    };
    ContactListPage.prototype.doSerchBarChange = function ($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = $event.target.value;
                        if (!(value && value.length >= 2)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.contactService.filter(value)];
                    case 1:
                        _a.contacts = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ContactListPage.prototype.delete = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Deletar?',
                            message: "Deseja excluir o contato: " + contact.name + "?",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Excluir',
                                    handler: function () {
                                        _this.executeDelete(contact);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactListPage.prototype.executeDelete = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index, toast, error_1, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        // Removendo do banco de dados
                        return [4 /*yield*/, this.contactService.delete(contact.id)];
                    case 1:
                        // Removendo do banco de dados
                        _a.sent();
                        index = this.contacts.indexOf(contact);
                        this.contacts.splice(index, 1);
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: 'Sucesso',
                                message: 'Contato excluído com sucesso.',
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
                                message: 'Ocorreu um erro ao tentar excluir o Contato.',
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
    ContactListPage.ctorParameters = function () { return [
        { type: _shared_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
    ]; };
    ContactListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! raw-loader!./contact-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contact-list/contact-list.page.html"),
            styles: [__webpack_require__(/*! ./contact-list.page.scss */ "./src/app/contacts/contact-list/contact-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ContactListPage);
    return ContactListPage;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contact-list-contact-list-module-es5.js.map