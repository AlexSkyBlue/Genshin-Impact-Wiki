import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionMaterialAscensionArmaPage } from './informacion-material-ascension-arma.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionMaterialAscensionArmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionMaterialAscensionArmaPageRoutingModule {}
