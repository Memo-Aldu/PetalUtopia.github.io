import { HomePageComponent } from './pages/home-page';
import { ServicePageComponent } from './pages/service-page';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'services', component: ServicePageComponent},
  {path: '', component: HomePageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

