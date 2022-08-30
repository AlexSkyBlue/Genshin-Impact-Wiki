import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionMaterialAscensionArmaPageRoutingModule } from './informacion-material-ascension-arma-routing.module';

import { InformacionMaterialAscensionArmaPage } from './informacion-material-ascension-arma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionMaterialAscensionArmaPageRoutingModule
  ],
  declarations: [InformacionMaterialAscensionArmaPage]
})
export class InformacionMaterialAscensionArmaPageModule {}
