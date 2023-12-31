import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datos-personale',
    loadChildren: () => import('./datos-personale/datos-personale.module').then( m => m.DatosPersonalePageModule)
  },
  {
    path: 'experiencia-laboral',
    loadChildren: () => import('./experiencia-laboral/experiencia-laboral.module').then( m => m.ExperienciaLaboralPageModule)
  },
  {
    path: 'experiencia-educativa',
    loadChildren: () => import('./experiencia-educativa/experiencia-educativa.module').then( m => m.ExperienciaEducativaPageModule)
  },
  {
    path: 'voluntariado',
    loadChildren: () => import('./voluntariado/voluntariado.module').then( m => m.VoluntariadoPageModule)
  },
  {
    path: 'otra-informacio',
    loadChildren: () => import('./otra-informacio/otra-informacio.module').then( m => m.OtraInformacioPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
