import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionMaterialAscensionTalentoPage } from './informacion-material-ascension-talento.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionMaterialAscensionTalentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionMaterialAscensionTalentoPageRoutingModule {}
