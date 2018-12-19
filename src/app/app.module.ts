import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClPage } from '../pages/cl/cl';
import { MenuPage } from '../pages/menu/menu';
import { DshPage } from '../pages/dsh/dsh';
import { TraColPage } from '../pages/tra-col/tra-col';
import { TraPage } from '../pages/tra/tra';
import { TraDtPage } from '../pages/tra-dt/tra-dt';
import { DcRdrPage } from '../pages/dc-rdr/dc-rdr';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Proovedores
import { FncProvider } from '../providers/fnc/fnc';
import { CnxProvider } from '../providers/cnx/cnx';

//Nativo - Cordova
import { Camera } from '@ionic-native/camera';
import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ZBar } from '@ionic-native/zbar';

//Http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ClPage,
    MenuPage,
    DshPage,
    TraColPage,
    TraPage,
    TraDtPage,
    DcRdrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ClPage,
    MenuPage,
    DshPage,
    TraColPage,
    TraPage,
    TraDtPage,
    DcRdrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CnxProvider,
    FncProvider,
    Camera,
    RegulaDocumentReader,
    BarcodeScanner,
    ZBar
  ]
})
export class AppModule {}
