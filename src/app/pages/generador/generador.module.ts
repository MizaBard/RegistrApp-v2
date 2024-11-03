import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorPageRoutingModule } from './generador-routing.module';

import { GeneradorPage } from './generador.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorPageRoutingModule,
    SharedModule
  ],
  declarations: [GeneradorPage]
})
export class GeneradorPageModule {}
