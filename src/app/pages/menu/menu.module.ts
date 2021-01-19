import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      {
        path:'dsh',
        loadChildren:'./../dsh/dsh.module#DshPageModule'
      },
      {
        path:'mdl-cnt',
        loadChildren:'./../mdl-cnt/mdl-cnt.module#MdlCntPageModule'
      },
      {
        path:'mdl-cnt-dt',
        loadChildren:'./../mdl-cnt-dt/mdl-cnt-dt.module#MdlCntDtPageModule'
      },
      {
        path:'chat',
        loadChildren:'./../chat/chat.module#ChatPageModule'
      },
      {
        path:'chat-cnv',
        loadChildren:'./../chat-cnv/chat-cnv.module#ChatCnvPageModule'
      },
      {
        path:'tra',
        loadChildren:'./../tra/tra.module#TraPageModule'
      }
    ]
  },{
    path:'',
    redirectTo:'menu/dsh'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
