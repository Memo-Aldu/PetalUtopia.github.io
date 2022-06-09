import { HomePageComponent } from './pages/home-page';
import { ServicePageComponent } from './pages/service-page';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about';

const routes: Routes = [
  {path: 'services', component: ServicePageComponent},
  {path: '', component: HomePageComponent},
  {path: 'about', component:AboutPageComponent },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

