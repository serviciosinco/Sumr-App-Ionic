webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cl_cl__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Clase de ApiRest
 //Clase de funciones
 //Clase cliente
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, __Rq, _fnc) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.__Rq = __Rq;
        this._fnc = _fnc;
        this.menuCtrl.enable(false); //Desactiva el menú
    }
    HomePage.prototype._ChkLgin = function (p) {
        if (p === void 0) { p = null; }
        if (p.e == "ok") {
            this._fnc.setSess({ k: "_us", v: p.us });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_cl_cl__["a" /* ClPage */], p);
        }
        else {
            this._fnc.showAlert({ "dsc": p.w });
        }
        this._fnc._ldr.dismiss();
    };
    HomePage.prototype._Lgin = function () {
        var _this = this;
        this._fnc.showLdr();
        if (!this._fnc.isN(this._user) && !this._fnc.isN(this._pss)) {
            this.__Rq._Rq_Get({ pml: "login", get: "&user=" + this._user + "&pass=" + this._pss }).subscribe(function (data) { _this._ChkLgin(data); }, function (error) { console.log(error); });
        }
        else {
            this._fnc.showAlert({ "dsc": "Los campos no pueden estar vacíos" });
            this._fnc._ldr.dismiss(); //Finaliza el Loader
        }
        //this.navCtrl.push(ClPage); //Ingresar sin validar
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/home/home.html"*/'<ion-content padding="true" class="manual-ios-statusbar-padding LginCnt">\n  \n  <div class="spacer" style="width: 300px; height: 136px;"></div>\n  <div class="LginForm">\n    <figure class="LginLogo" ></figure>\n\n    <ion-list class="LginLst">\n\n      <ion-item class="LginItm">\n        <ion-label floating>Usuario</ion-label>\n        <ion-input class="LginTxtUs" id="LginTxtUs" type="text" [(ngModel)]="_user" ></ion-input>\n      </ion-item>\n    \n      <ion-item class="LginItm">\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input class="LginTxtPss" id="LginTxtPss" type="password" [(ngModel)]="_pss"></ion-input>\n      </ion-item>\n    \n    </ion-list>\n\n    <button ion-button (click)="_Lgin();" block class="LginBtn">Ingresar</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__["a" /* CnxProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fnc_fnc__["a" /* FncProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dc_rdr_dc_rdr__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dsh_dsh__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cl_cl__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tra_col_tra_col__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, menuCtrl, _fnc) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this._fnc = _fnc;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_cl_cl__["a" /* ClPage */];
        this.rootDsh = __WEBPACK_IMPORTED_MODULE_3__pages_dsh_dsh__["a" /* DshPage */];
        this._mnu_img = "../../assets/imgs/ionic.jpeg"; //Imagen del menu por defecto
        this._cl_img = "../../assets/imgs/ionic.jpeg"; //Imagen del menu por defecto
        //Imagen del menú
        if (!this._fnc.isN(this._fnc.getSess("_us").img.bg_s)) {
            this._mnu_img = this._fnc.getSess("_us").img.bg_s;
        }
        else if (!this._fnc.isN(this._fnc.getSess("_us").img.big)) {
            this._mnu_img = this._fnc.getSess("_us").img.big;
        }
        if (!this._fnc.isN(this._fnc.getSess("_cl").img.th_50)) {
            this._cl_img = this._fnc.getSess("_cl").img.th_50;
        }
        else if (!this._fnc.isN(this._fnc.getSess("_cl").img.th_100)) {
            this._cl_img = this._fnc.getSess("_cl").img.th_100;
        }
        //Items del menu //Ejemplo { k:"Llave", nm:"Nombre", icon:"Icono", "cls":"Cerrar Menu", pge:"Pagina destino", alrt:"Llamar funcion de alertas" }
        this.pages = [
            { k: "tra", nm: 'Tareas', icon: "alarm", cls: "left", pge: __WEBPACK_IMPORTED_MODULE_6__tra_col_tra_col__["a" /* TraColPage */] },
            { k: "tra", nm: 'Lector de documentos', icon: "barcode", cls: "left", pge: __WEBPACK_IMPORTED_MODULE_2__pages_dc_rdr_dc_rdr__["a" /* DcRdrPage */] },
            { k: "cl", nm: 'Cambiar cliente', icon: "undo", cls: "no", pge: __WEBPACK_IMPORTED_MODULE_5__pages_cl_cl__["a" /* ClPage */], alrt: { "tt": "Estas seguro(a)", "dsc": "Deseas cambiar de cliente?" } },
            { k: "sess_off", nm: 'Cerrar sessión', icon: "key", cls: "no", pge: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], alrt: { "tt": "Estas seguro(a)", "dsc": "Deseas cerrar sesión?" } }
        ];
    }
    //Mostrar alerta de confirmación
    MenuPage.prototype.ShwPge = function (p) {
        var _this = this;
        if (p === void 0) { p = null; }
        if (!this._fnc.isN(p.alrt)) {
            this._fnc.showAlertConfirm({
                tt: p.alrt.tt,
                dsc: p.alrt.dsc
            }).then(function (d) {
                if (d.r == "ok") {
                    //Tipo de accion dependiendo el Key
                    if (p.k == "sess_off") {
                        _this._fnc.eliSess("_us");
                        _this._fnc.eliSess("_cl");
                    }
                    else if (p.k == "cl") {
                        _this._fnc.eliSess("_cl");
                    }
                    _this.nav.push(p.pge);
                    //this.navCtrl.push(p.pge); //Cambia de pagina
                }
            });
        }
        else {
            this.navCtrl.push(p.pge); //Cambia de pagina
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/menu/menu.html"*/'<!--Crear Menú-->\n<ion-menu [content]="nav">\n\n    <ion-header>\n      <ion-toolbar>\n        <img src="{{ _mnu_img }}" />\n        <img class="_cl_lgo" src="{{ _cl_img }}" />\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose="{{ itm.cls }}" ion-item *ngFor="let itm of pages" (click)="ShwPge(itm)">\n          <ion-icon item-left name="{{ itm.icon }}"></ion-icon>\n          {{ itm.nm }}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  <ion-nav [root]="rootDsh" #nav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__["a" /* FncProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DcRdrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Clase de funciones
 //Clase de funciones


/**
 * Generated class for the DcRdrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DcRdrPage = /** @class */ (function () {
    function DcRdrPage(barcodeScanner, zbar, _fnc, __Rq) {
        this.barcodeScanner = barcodeScanner;
        this.zbar = zbar;
        this._fnc = _fnc;
        this.__Rq = __Rq;
        this._data = {};
        this._data = { "cancelled": "-NA-", "format": "-NA-", "text": "-NA-" };
    }
    DcRdrPage.prototype._ScanBarCodeBtn = function (p) {
        var _this = this;
        if (p === void 0) { p = null; }
        this.barcodeScanner.scan({
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: "Coloque el codigo de barras dentro del área.",
            resultDisplayDuration: 500,
            formats: "PDF_417, QR_CODE",
            //orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: false,
            disableSuccessBeep: false // iOS and Android
        }).then(function (barcodeData) {
            _this._data = barcodeData;
            /*this.__Rq._Rq_Get({ pml:"barcode", get:"&code="+JSON.stringify(barcodeData) }).subscribe(
              (data) => {  },
              (error) => {  }
            );*/
        }).catch(function (err) {
            _this._data = err;
        });
    };
    DcRdrPage.prototype._ScanZBarBtn = function () {
        this.zbar.scan({
            flash: 'off',
            drawSight: false
        }).then(function (result) {
            console.log(result); // Scanned code
        })
            .catch(function (error) {
            console.log(error); // Error message
        });
    };
    DcRdrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DcRdrPage');
    };
    DcRdrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dc-rdr',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/dc-rdr/dc-rdr.html"*/'<!--\n  Generated template for the DcRdrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Codigo de barras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n<ion-content padding>\n  <button ion-button (click)="_ScanBarCodeBtn()" block class="ScanBtn">Escanear - BarCode</button>\n  <button ion-button (click)="_ScanZBarBtn()" block class="ScanBtn">Escanear - ZBar</button>\n  \n  <textarea>{{ _data.text }}</textarea>\n\n  <ion-item>\n    <ion-label>Cancelada: {{ _data.cancelled }}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Formato: {{ _data.format }}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Texto: {{ _data.text }}</ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/dc-rdr/dc-rdr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__["a" /* ZBar */],
            __WEBPACK_IMPORTED_MODULE_1__providers_fnc_fnc__["a" /* FncProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__["a" /* CnxProvider */]])
    ], DcRdrPage);
    return DcRdrPage;
}());

//# sourceMappingURL=dc-rdr.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraColPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cnx_cnx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tra_tra__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TraColPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TraColPage = /** @class */ (function () {
    function TraColPage(navCtrl, navParams, menuCtrl, _fnc, __Rq) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this._fnc = _fnc;
        this.__Rq = __Rq;
        this._tra_col_ls = [];
        this._tracol_tt = null;
        this._Rst_Ls();
    }
    TraColPage.prototype._Rst_Ls = function () {
        this.items = this._tra_col_ls;
    };
    //Verifica las columnas y las convierte en Array
    TraColPage.prototype._ChkTraCol = function (p) {
        if (p === void 0) { p = null; }
        if (p.e == "ok") {
            for (var k in p.tra_col.ls) {
                this._tra_col_ls.push(p.tra_col.ls[k]);
            }
        }
        else {
            this._fnc.showAlert({ "dsc": p.w });
        }
    };
    //Filtrar datos por buscador
    TraColPage.prototype.getItems = function (p) {
        this._Rst_Ls();
        var val = p.tt.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) { return item["tt"].toLowerCase().includes(val) || item["tt"].includes(val); });
        }
    };
    TraColPage.prototype._Rq_Get_This = function (p) {
        var _this = this;
        if (p === void 0) { p = null; }
        this._fnc.showLdr(); //Comienza el loader
        try {
            this.__Rq._Rq_Get({ pml: "tra_col", get: "&cl_enc=" + this._fnc.getSess("_cl").enc + "&tracol_tt=" + this._tracol_tt }).subscribe(function (data) { _this._ChkTraCol(data); }, function (error) { console.log(error); });
        }
        catch (err) {
            console.log(' Error al enviar post en tra-col.ts : ' + err.message);
        }
        if (!this._fnc.isN(this._tracol_tt)) {
            this._fnc._ldr.dismiss(); //Finaliza el Loader
        }
    };
    TraColPage.prototype._Slc_Tra = function (p) {
        if (p === void 0) { p = null; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tra_tra__["a" /* TraPage */], p);
    };
    TraColPage.prototype.ionViewDidLoad = function () {
        this._Rq_Get_This();
    };
    TraColPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tra-col',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra-col/tra-col.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Seleccione columna</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="LginCnt cards-bg">\n  <ion-searchbar placeholder="Buscar columna" (ionInput)="getItems({\'tt\':$event})"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <ion-avatar item-start [ngStyle]="{ \'background\':item.clr.vl }">\n        <img src="{{ item.icn.slc.img != \'\' && item.icn.slc.img != null ? item.icn.slc.img : \'\' }}">\n      </ion-avatar>\n      <h3>{{ item.tt }}</h3>\n      <button ion-button clear item-end (click)="_Slc_Tra(item)" >Seleccione</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra-col/tra-col.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__["a" /* FncProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cnx_cnx__["a" /* CnxProvider */]])
    ], TraColPage);
    return TraColPage;
}());

//# sourceMappingURL=tra-col.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tra_dt_tra_dt__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TraPage = /** @class */ (function () {
    function TraPage(navCtrl, navPrms, _fnc) {
        this.navCtrl = navCtrl;
        this.navPrms = navPrms;
        this._fnc = _fnc;
        this._tra_ls = []; //Listado de tareas
        this._tra_col_dt = navPrms.data;
    }
    //Filtrar datos por buscador
    TraPage.prototype.getItems = function (p) {
        this._Rst_Ls();
        var val = p.tt.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) { return item["tt"].toLowerCase().includes(val) || item["tt"].includes(val); });
        }
    };
    //Resetear datos
    TraPage.prototype._Rst_Ls = function () {
        this.items = this._tra_ls;
    };
    //Verifica las columnas y las convierte en Array
    TraPage.prototype._ChkTra = function () {
        this._fnc.showLdr(); //Comienza el loader
        if (!this._fnc.isN(this._tra_col_dt.tra.ls)) {
            for (var k in this._tra_col_dt.tra.ls) {
                this._tra_ls.push(this._tra_col_dt.tra.ls[k]);
            }
            this._Rst_Ls();
        }
        else {
            this._fnc.showAlert({ "dsc": "No existen tareas." });
        }
        this._fnc._ldr.dismiss(); //Finaliza el Loader
    };
    TraPage.prototype._Slc_Tra = function (p) {
        if (p === void 0) { p = null; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tra_dt_tra_dt__["a" /* TraDtPage */], p);
    };
    TraPage.prototype.ionViewDidLoad = function () {
        this._ChkTra();
    };
    TraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tra',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra/tra.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ _tra_col_dt.tt }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="LginCnt cards-bg">\n  <ion-searchbar placeholder="Buscar tarea" (ionInput)="getItems({\'tt\':$event})"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <ion-avatar item-start>\n        <img src="{{ item.rsp.img.bg_s != \'\' && item.rsp.img.bg_s != null ? item.rsp.img.bg_s : item.rsp.img }}">\n      </ion-avatar>\n      <h3>{{ item.tt }}</h3>\n      <ion-icon item-right name="eye" (click)="_Slc_Tra(item)"></ion-icon>\n      <!--<button ion-button clear item-end (click)="_Slc_Tra(item)" >Seleccione</button>-->\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra/tra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__["a" /* FncProvider */]])
    ], TraPage);
    return TraPage;
}());

//# sourceMappingURL=tra.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraDtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TraDtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TraDtPage = /** @class */ (function () {
    function TraDtPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide1.png",
            },
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide2.png",
            },
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide3.png",
            }
        ];
        this._tra_dt = navParams.data;
    }
    TraDtPage.prototype.ionViewDidLoad = function () {
        console.log(this._tra_dt.obs.ls);
    };
    TraDtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tra-dt',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra-dt/tra-dt.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <!--<ion-title>{{ _tra_dt.tt }}</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="LginCnt cards-bg">\n  \n  <ion-card>\n    <ion-card-header>\n      {{ _tra_dt.tt }}\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{ _tra_dt.rsp.img.bg_s != \'\' && _tra_dt.rsp.img.bg_s != null ? _tra_dt.rsp.img.bg_s : _tra_dt.rsp.img }}">\n        </ion-avatar>\n        <h2>Responsable</h2>\n        <p>{{ _tra_dt.rsp.nm+" "+_tra_dt.rsp.ap }}</p>\n      </ion-item>\n      <ion-item>\n        <p>Fecha de ejecución</p>\n        <ion-icon ios="md-calendar" md="md-calendar" item-start></ion-icon>\n        <ion-label>{{ _tra_dt.fch != \'\' && _tra_dt.fch != null ? _tra_dt.fch : "0000-00-00"  }}</ion-label>\n        <ion-label>{{ _tra_dt.hra != \'\' && _tra_dt.hra != null ? _tra_dt.hra : "00:00:00" }}</ion-label>\n      </ion-item>\n      \n      <ion-item>\n        <ion-slides pager>\n          <ion-slide *ngFor="let slide of slides">\n              <ion-avatar item-start>\n                <img src="{{ _tra_dt.rsp.img.bg_s != \'\' && _tra_dt.rsp.img.bg_s != null ? _tra_dt.rsp.img.bg_s : _tra_dt.rsp.img }}">\n              </ion-avatar>\n          </ion-slide>\n        </ion-slides>\n    </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <!--<ion-tabs>\n    <ion-tab tabIcon="home" ></ion-tab>\n  </ion-tabs>-->\n\n</ion-content>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/tra-dt/tra-dt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TraDtPage);
    return TraDtPage;
}());

//# sourceMappingURL=tra-dt.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dc-rdr/dc-rdr.module": [
		288,
		3
	],
	"../pages/tra-col/tra-col.module": [
		289,
		2
	],
	"../pages/tra-dt/tra-dt.module": [
		290,
		1
	],
	"../pages/tra/tra.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DshPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DshPage = /** @class */ (function () {
    function DshPage(navCtrl, navParams, menuCtrl, _fnc) {
        //this.menuCtrl.enable(false);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this._fnc = _fnc;
        this.slides = [
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide1.png",
            },
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide2.png",
            },
            {
                title: "Bienvenido a SUMR - Picker",
                description: "Este mensaje puede ser personalizado",
                image: "assets/imgs/slide3.png",
            }
        ];
        this._cl_clr = "primary";
        if (!_fnc.isN(_fnc.getSess("_cl").sbd)) {
            this._cl_clr = _fnc.getSess("_cl").sbd;
        }
        else {
            this._cl_clr = "primart";
        }
    }
    DshPage.prototype.ionViewDidLoad = function () {
    };
    DshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dsh',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/dsh/dsh.html"*/'<!--\n  Generated template for the DshPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="{{ _cl_clr }}">\n    <button ion-button slot="start" menuToggle menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/dsh/dsh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__["a" /* FncProvider */]])
    ], DshPage);
    return DshPage;
}());

//# sourceMappingURL=dsh.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FncProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Clase de alertas
 //Clase de Loader

/*
  Generated class for the FncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FncProvider = /** @class */ (function () {
    function FncProvider(http, alertCtrl, loadingCtrl, pltf) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pltf = pltf;
    }
    //Validar el dispositivo Android/Ios
    FncProvider.prototype.isPltf = function (p) {
        if (p === void 0) { p = null; }
        if (this.pltf.is(p)) {
            return true;
        }
        else {
            return false;
        }
    };
    //Sistema de Loader
    FncProvider.prototype.showLdr = function () {
        this._ldr = this.loadingCtrl.create({
            content: "Por favor espere...",
            dismissOnPageChange: true
        });
        this._ldr.present(); //Inicia el Loader
    };
    //Valida que no sea vacío
    FncProvider.prototype.isN = function (p) {
        if (p === void 0) { p = null; }
        if (p == null || p == '' || p == undefined || p == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    //Sistema de alertas
    FncProvider.prototype.showAlert = function (p) {
        if (p === void 0) { p = null; }
        var alert = this.alertCtrl.create({
            title: ((!this.isN(p.tt)) ? p.tt : 'Opss'),
            subTitle: ((!this.isN(p.dsc)) ? p.dsc : 'Tenemos problemas'),
            buttons: ((!this.isN(p.btn)) ? [p.btn] : ['Listo'])
        });
        alert.present();
    };
    //Sistema de alertas - Confirmar
    FncProvider.prototype.showAlertConfirm = function (p) {
        var _this = this;
        if (p === void 0) { p = null; }
        return new Promise(function (rsp) {
            var confirm = _this.alertCtrl.create({
                title: ((!_this.isN(p.tt)) ? p.tt : 'Estas seguro?'),
                message: ((!_this.isN(p.dsc)) ? p.dsc : 'Deseas realizar esta operación'),
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function () {
                            rsp({ r: "no", d: p });
                        }
                    },
                    {
                        text: 'Listo',
                        handler: function () {
                            rsp({ r: "ok", d: p });
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    //Crear Session - LocalStorage
    FncProvider.prototype.setSess = function (p) {
        if (p === void 0) { p = null; }
        localStorage.setItem(p.k, JSON.stringify(p.v));
    };
    //Obtener Session - LocalStorage
    FncProvider.prototype.getSess = function (p) {
        if (p === void 0) { p = null; }
        return JSON.parse(localStorage.getItem(p));
    };
    //Eliminar Session - LocalStorage
    FncProvider.prototype.eliSess = function (p) {
        if (p === void 0) { p = null; }
        localStorage.removeItem(p);
    };
    FncProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], FncProvider);
    return FncProvider;
}());

//# sourceMappingURL=fnc.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tra_col_tra_col__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tra_tra__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tra_dt_tra_dt__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dc_rdr_dc_rdr__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_cnx_cnx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_regula_document_reader__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_zbar__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Pages











//Proovedores


//Nativo - Cordova




//Http

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__["a" /* ClPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__["a" /* DshPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tra_col_tra_col__["a" /* TraColPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tra_tra__["a" /* TraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tra_dt_tra_dt__["a" /* TraDtPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dc_rdr_dc_rdr__["a" /* DcRdrPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/dc-rdr/dc-rdr.module#DcRdrPageModule', name: 'DcRdrPage', segment: 'dc-rdr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tra-col/tra-col.module#TraColPageModule', name: 'TraColPage', segment: 'tra-col', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tra-dt/tra-dt.module#TraDtPageModule', name: 'TraDtPage', segment: 'tra-dt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tra/tra.module#TraPageModule', name: 'TraPage', segment: 'tra', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__["a" /* ClPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__["a" /* DshPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tra_col_tra_col__["a" /* TraColPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tra_tra__["a" /* TraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tra_dt_tra_dt__["a" /* TraDtPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dc_rdr_dc_rdr__["a" /* DcRdrPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_cnx_cnx__["a" /* CnxProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_fnc_fnc__["a" /* FncProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_regula_document_reader__["a" /* RegulaDocumentReader */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_zbar__["a" /* ZBar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _fnc) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._fnc = _fnc;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        try {
            if (!_fnc.isN(this._fnc.getSess("_cl")) && !_fnc.isN(this._fnc.getSess("_us"))) {
                if (!_fnc.isN(this._fnc.getSess("_cl").enc) && !_fnc.isN(this._fnc.getSess("_us").enc)) {
                    console.log(" Ninguno esta vacío - Menu principal ");
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */];
                }
            }
            else if (!_fnc.isN(this._fnc.getSess("_us"))) {
                if (!_fnc.isN(this._fnc.getSess("_us").enc)) {
                    console.log(" Solo tiene usuario - Lista cliente ");
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__["a" /* ClPage */];
                }
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                console.log(" Todos estan vacios - Login ");
            }
        }
        catch (err) {
            console.log(' Error al validar session en app.component.ts: ' + err.message);
        }
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/app/app.html"*/'<!--Crear Menú-->\n<!--<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-left name="home"></ion-icon>\n        Primeroo\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__["a" /* FncProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listaaaa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnxProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CnxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CnxProvider = /** @class */ (function () {
    function CnxProvider(http) {
        this.http = http;
        this.__a = "&__a=zqPZWZ7Pre";
        this.__k = "&__k=b2c8aeda2bc8adc231272bac69b0117cd528e4bf";
        this.__p = "&__p=010662a4cdd1271dc2c1bde883afe3044719a26c";
        this.__u = "&__u=fbermudez@servicios.in";
    }
    CnxProvider.prototype._Rq_Get = function (p) {
        if (p === void 0) { p = null; }
        var _rnd = "?Rnd=" + Math.random();
        var _get = p.get;
        this.__url = "https://api.sumrdev.com/" + p.pml;
        return this.http.get(this.__url + _rnd + this.__a + this.__k + this.__p + this.__u + _get);
    };
    CnxProvider.prototype._Rq_Post = function (p) {
        if (p === void 0) { p = null; }
        var _rnd = "?Rnd=" + Math.random(); //Random para cache
        var postData = new FormData();
        postData.append('key', 'value');
        return this.http.post(this.__url + _rnd, { postData: postData });
    };
    CnxProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CnxProvider);
    return CnxProvider;
}());

//# sourceMappingURL=cnx.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Clase de funciones
 //Clase de menú
/**
 * Generated class for the ClPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClPage = /** @class */ (function () {
    function ClPage(navCtrl, navPrms, menuCtrl, _fnc) {
        this.navCtrl = navCtrl;
        this.navPrms = navPrms;
        this.menuCtrl = menuCtrl;
        this._fnc = _fnc;
        this.menuCtrl.enable(false); //Desactiva el menú
        //Listado de clientes - JSON
        try {
            if (!_fnc.isN(navPrms.data.length)) {
                if (!_fnc.isN(navPrms.data.us.cl.ls)) {
                    this._cl_ls = navPrms.data.us.cl.ls;
                }
            }
            else {
                if (!_fnc.isN(this._fnc.getSess("_us"))) {
                    this._cl_ls = _fnc.getSess("_us").cl.ls;
                }
            }
        }
        catch (err) {
            console.log(' Error al validar listado de clientes en cl.ts: ' + err.message);
        }
    }
    //Selecciona el cliente
    ClPage.prototype._Cl_Clk = function (p) {
        if (p === void 0) { p = null; }
        this._fnc.setSess({ k: "_cl", v: p });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__["a" /* MenuPage */]);
    };
    ClPage.prototype.ionViewDidLoad = function () {
    };
    ClPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cl',template:/*ion-inline-start:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/cl/cl.html"*/'<ion-content padding class="LginCnt cards-bg">\n  <div class="spacer" style="width: 300px; height: 136px;"></div>\n  <ion-list>\n    <ion-item *ngFor="let _cl of _cl_ls">\n      <ion-avatar item-start>\n        <img src="{{ _cl.img.th_50 != \'\' && _cl.img.th_50 != null ? _cl.img.th_50 : _cl.img.th_100 }}">\n      </ion-avatar>\n      <p>{{ _cl.nm }}</p>\n      <button ion-button clear item-end (click)="_Cl_Clk( _cl )" >Ingresar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/programadormaster/Documents/GitHub/SUMR-APP/src/pages/cl/cl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__["a" /* FncProvider */]])
    ], ClPage);
    return ClPage;
}());

//# sourceMappingURL=cl.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map