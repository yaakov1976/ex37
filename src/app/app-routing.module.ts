import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CityListComponent } from './city-list/city-list.component';
import { ByCityComponent } from './by-city/by-city.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'main',component: MainComponent},
  {path:'by-city/:name',component:ByCityComponent},
  {path:'by-city',component:ByCityComponent},
  {path:'city-list',component:CityListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
