webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fnc_fnc__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cl_cl__ = __webpack_require__(51);
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
    function HomePage(navCtrl, __Rq, _fnc) {
        this.navCtrl = navCtrl;
        this.__Rq = __Rq;
        this._fnc = _fnc;
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
            this.__Rq._Rq_Get({ "_user": this._user, "_pss": this._pss }).subscribe(function (data) { _this._ChkLgin(data); }, function (error) { console.log(error); });
        }
        else {
            this._fnc.showAlert({ "dsc": "Los campos no pueden estar vacíos" });
            this._fnc._ldr.dismiss(); //Finaliza el Loader
        }
        //this.navCtrl.push(ClPage); //Ingresar sin validar
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/home/home.html"*/'<ion-content padding="true" class="manual-ios-statusbar-padding LginCnt">\n  \n  <div class="spacer" style="width: 300px; height: 136px;"></div>\n  <div class="LginForm">\n    <figure class="LginLogo" ></figure>\n\n    <ion-list class="LginLst">\n\n      <ion-item class="LginItm">\n        <ion-label floating>Usuario</ion-label>\n        <ion-input class="LginTxtUs" id="LginTxtUs" type="text" [(ngModel)]="_user" ></ion-input>\n      </ion-item>\n    \n      <ion-item class="LginItm">\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input class="LginTxtPss" id="LginTxtPss" type="password" [(ngModel)]="_pss"></ion-input>\n      </ion-item>\n    \n    </ion-list>\n\n    <button ion-button (click)="_Lgin();" block class="LginBtn">Ingresar</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cnx_cnx__["a" /* CnxProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fnc_fnc__["a" /* FncProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dsh_dsh__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cl_cl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fnc_fnc__ = __webpack_require__(41);
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
        this.rootDsh = __WEBPACK_IMPORTED_MODULE_3__pages_dsh_dsh__["a" /* DshPage */];
        //Items del menu
        this.pages = [
            { nm: 'Tareas', icon: "alarm", cls: "left", pge: __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */] },
            { nm: 'Cambiar cliente', icon: "undo", cls: "no", pge: __WEBPACK_IMPORTED_MODULE_5__pages_cl_cl__["a" /* ClPage */] },
            { nm: 'Cerrar sessión', icon: "key", cls: "no", pge: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], alrt: { "tt": "Estas seguro(a)", "dsc": "Deseas cerrar sesión?" } }
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
                    _this._fnc.eliSess("_us");
                    _this._fnc.eliSess("_cl");
                    _this.navCtrl.push(p.pge);
                }
            });
        }
        else {
            this.navCtrl.push(p.pge);
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/menu/menu.html"*/'<!--Crear Menú-->\n<ion-menu [content]="nav">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose="{{ itm.cls }}" ion-item *ngFor="let itm of pages" (click)="ShwPge(itm)">\n          <ion-icon item-left name="{{ itm.icon }}"></ion-icon>\n          {{ itm.nm }}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n  <ion-nav [root]="rootDsh" #nav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_fnc_fnc__["a" /* FncProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_fnc_fnc__["a" /* FncProvider */]) === "function" && _c || Object])
    ], MenuPage);
    return MenuPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnxProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
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
        this.__url = "https://api.sumrdev.com/login/";
        this.__a = "&__a=zqPZWZ7Pre";
        this.__k = "&__k=b2c8aeda2bc8adc231272bac69b0117cd528e4bf";
        this.__p = "&__p=010662a4cdd1271dc2c1bde883afe3044719a26c";
        this.__p1 = "&_p1=login";
        this.__u = "&__u=fbermudez@servicios.in";
    }
    CnxProvider.prototype._Rq_Get = function (p) {
        if (p === void 0) { p = null; }
        var _rnd = "?Rnd=" + Math.random();
        var _usr = "&user=" + p._user;
        var _pss = "&pass=" + p._pss;
        return this.http.get(this.__url + _rnd + this.__a + this.__k + this.__p + this.__p1 + this.__u + _usr + _pss);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listaaaa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DshPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function DshPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DshPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DshPage');
    };
    DshPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dsh',template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/dsh/dsh.html"*/'<!--\n  Generated template for the DshPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nDashboard\n</ion-content>\n'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/dsh/dsh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DshPage);
    return DshPage;
}());

//# sourceMappingURL=dsh.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_fnc_fnc__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cnx_cnx__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Pages







//Proovedores


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
                __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__["a" /* DshPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__["a" /* ClPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dsh_dsh__["a" /* DshPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_cnx_cnx__["a" /* CnxProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_fnc_fnc__["a" /* FncProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cl_cl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__ = __webpack_require__(41);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/app/app.html"*/'<!--Crear Menú-->\n<!--<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-left name="home"></ion-icon>\n        Primeroo\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fnc_fnc__["a" /* FncProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FncProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
    function FncProvider(http, alertCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], FncProvider);
    return FncProvider;
}());

//# sourceMappingURL=fnc.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__ = __webpack_require__(103);
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
    function ClPage(navCtrl, navPrms, _fnc) {
        this.navCtrl = navCtrl;
        this.navPrms = navPrms;
        this._fnc = _fnc;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__["a" /* MenuPage */], { "": "" });
    };
    ClPage.prototype.ionViewDidLoad = function () {
    };
    ClPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cl',template:/*ion-inline-start:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/cl/cl.html"*/'<ion-content padding class="LginCnt cards-bg">\n\n  <div class="spacer" style="width: 300px; height: 136px;"></div>\n  <ion-list>\n    <ion-item *ngFor="let _cl of _cl_ls">\n      <ion-avatar item-start>\n        <img src="{{ _cl.img.bg_s != \'\' && _cl.img.bg_s != null ? _cl.img.bg_s : _cl.img.bg  }}">\n      </ion-avatar>\n      <h2>CRM-SUMR</h2>\n      <p>{{ _cl.nm }}</p>\n      <button ion-button clear item-end (click)="_Cl_Clk( _cl )" >Ingresar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/programadormaster/Desktop/myApp/proyecto/src/pages/cl/cl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fnc_fnc__["a" /* FncProvider */]])
    ], ClPage);
    return ClPage;
}());

//# sourceMappingURL=cl.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map