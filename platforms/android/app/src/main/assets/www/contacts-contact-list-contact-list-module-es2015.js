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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-list.page */ "./src/app/contacts/contact-list/contact-list.page.ts");







const routes = [
    {
        path: '',
        component: _contact_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactListPage"]
    }
];
let ContactListPageModule = class ContactListPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ContactListPage = class ContactListPage {
    constructor(contactService, toastCtrl, alertCtrl) {
        this.contactService = contactService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.contacts = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadContacts();
    }
    loadContacts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.contacts = yield this.contactService.getAll();
        });
    }
    doSerchClear() {
        this.loadContacts();
    }
    doSerchBarChange($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const value = $event.target.value;
            if (value && value.length >= 2) {
                this.contacts = yield this.contactService.filter(value);
            }
        });
    }
    delete(contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Deletar?',
                message: `Deseja excluir o contato: ${contact.name}?`,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Excluir',
                        handler: () => {
                            this.executeDelete(contact);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    executeDelete(contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // Removendo do banco de dados
                yield this.contactService.delete(contact.id);
                // Removendo do array
                const index = this.contacts.indexOf(contact);
                this.contacts.splice(index, 1);
                const toast = yield this.toastCtrl.create({
                    header: 'Sucesso',
                    message: 'Contato excluído com sucesso.',
                    color: 'success',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
            catch (error) {
                const toast = yield this.toastCtrl.create({
                    header: 'Erro',
                    message: 'Ocorreu um erro ao tentar excluir o Contato.',
                    color: 'danger',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
        });
    }
};
ContactListPage.ctorParameters = () => [
    { type: _shared_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=contacts-contact-list-contact-list-module-es2015.js.map