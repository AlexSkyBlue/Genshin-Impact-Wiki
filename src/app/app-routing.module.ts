import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'informacion-personaje',
    loadChildren: () => import('./informacion-personaje/informacion-personaje.module').then( m => m.InformacionPersonajePageModule)
  },
  {
    path: 'informacion-arma',
    loadChildren: () => import('./informacion-arma/informacion-arma.module').then( m => m.InformacionArmaPageModule)
  },
  {
    path: 'informacion-artefacto',
    loadChildren: () => import('./informacion-artefacto/informacion-artefacto.module').then( m => m.InformacionArtefactoPageModule)
  },
  {
    path: 'informacion-material-ascension-arma',
    loadChildren: () => import('./informacion-material-ascension-arma/informacion-material-ascension-arma.module').then( m => m.InformacionMaterialAscensionArmaPageModule)
  },
  {
    path: 'informacion-material-ascension-talento',
    loadChildren: () => import('./informacion-material-ascension-talento/informacion-material-ascension-talento.module').then( m => m.InformacionMaterialAscensionTalentoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
