import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionMaterialAscensionTalentoPageRoutingModule } from './informacion-material-ascension-talento-routing.module';

import { InformacionMaterialAscensionTalentoPage } from './informacion-material-ascension-talento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionMaterialAscensionTalentoPageRoutingModule
  ],
  declarations: [InformacionMaterialAscensionTalentoPage]
})
export class InformacionMaterialAscensionTalentoPageModule {}
