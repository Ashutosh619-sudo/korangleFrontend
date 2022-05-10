import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  MovieListComponent } from './movie/movie-list/movie-list.component';
import { ActorListComponent } from './movie/actor-list/actor-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'movie/:id/actors',component:ActorListComponent},
  {path:'',component:MovieListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }