import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SingleviewcomponentComponent } from 'src/app/singleviewcomponent/singleviewcomponent.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
     path : 'got/:entityName/:compId', component: SingleviewcomponentComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SingleviewcomponentComponent];
