import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MdlCntDtPage } from './mdl-cnt-dt.page';

const routes: Routes = [
  {
    path: '',
    component: MdlCntDtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MdlCntDtPage]
})
export class MdlCntDtPageModule {}
