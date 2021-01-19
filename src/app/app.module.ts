import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Environment } from '../environments/environment';




//Pages
/*import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClPage } from '../pages/cl/cl';
import { MenuPage } from '../pages/menu/menu';
import { DshPage } from '../pages/dsh/dsh';
import { TraColPage } from '../pages/tra-col/tra-col';
import { TraPage } from '../pages/tra/tra';
import { TraDtPage } from '../pages/tra-dt/tra-dt';
import { DcRdrPage } from '../pages/dc-rdr/dc-rdr';
import { IframePage } from '../pages/iframe/iframe';
import { ChatPage } from '../pages/chat/chat';
import { ChatUsPage } from '../pages/chat-us/chat-us';
import { ChatUsPage } from '../pages/chat-us/chat-us';*/

import { LoginPage } from './pages/login/login.page';
import { ClPage } from './pages/cl/cl.page';
import { MenuPage } from './pages/menu/menu.page';
import { DshPage } from './pages/dsh/dsh.page';
import { TraColPage } from './pages/tra-col/tra-col.page';
import { TraPage } from './pages/tra/tra.page';
import { TraDtPage } from './pages/tra-dt/tra-dt.page';
import { ChatPage } from './pages/chat/chat.page';
import { ChatCnvPage } from './pages/chat-cnv/chat-cnv.page';



//Proovedores
import { AuthProvider } from './services/auth/auth';
import { FncProvider } from './services/fnc/fnc';
import { CnxProvider } from './services/cnx/cnx';
import { WsProvider } from './services/ws/ws';
import { WsSrvcProvider } from './services/ws-srvc/ws-srvc';

//Nativos
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { HttpClient, HttpClientModule }    from '@angular/common/http';
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Observable } from 'rxjs';
import { PipesModule } from './pipes/pipes.module';


//const config: SocketIoConfig = { url: Environment.WS_ENDPOINT, options: {} };


export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
 

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    PipesModule,
    BrowserModule,
    FormsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    SplashScreen,
    AuthProvider,
    CnxProvider,
    FncProvider,
    WsProvider,
    WsSrvcProvider,
    PhotoViewer,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {


}