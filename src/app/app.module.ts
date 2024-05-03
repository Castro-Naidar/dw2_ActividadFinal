/*Importacion de modulos, componentes y el approuting*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  /*Declara los componentes que pertenecen a este módulo*/
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  /*Importa los módulos que necesita este módulo*/
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }