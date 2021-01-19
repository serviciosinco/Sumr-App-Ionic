import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthProvider } from './services/auth/auth';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthProvider] },  
  { path: 'cl', loadChildren: './pages/cl/cl.module#ClPageModule', canActivate: [AuthProvider] },
  { path: 'chat-us', loadChildren: './pages/chat-us/chat-us.module#ChatUsPageModule', canActivate: [AuthProvider] },
  /*{ path: 'mdl-cnt-dt', loadChildren: './pages/mdl-cnt-dt/mdl-cnt-dt.module#MdlCntDtPageModule' },
  { path: 'mdl-cnt', loadChildren: './pages/mdl-cnt/mdl-cnt.module#MdlCntPageModule' },*/
  //{ path: 'chat-cnv', loadChildren: './pages/chat-cnv/chat-cnv.module#ChatCnvPageModule', canActivate: [AuthProvider] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
