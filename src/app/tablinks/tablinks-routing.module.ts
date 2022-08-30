import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },{
        path: 'tablinks',
        loadChildren: () => import('../tablinks/tablinks.module').then( m => m.TablinksPageModule)
      },{
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },{
        path: "",
        redirectTo: "tablinks/home",
        pathMatch: "full"
      }
    ]
 },
 {
  path: "",
  redirectTo: "tablinks/home",
  pathMatch: "full"
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
