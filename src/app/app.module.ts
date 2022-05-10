import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { ActorListComponent } from './movie/actor-list/actor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
