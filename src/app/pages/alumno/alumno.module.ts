import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnoPage } from './alumno.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule,
    SharedModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
