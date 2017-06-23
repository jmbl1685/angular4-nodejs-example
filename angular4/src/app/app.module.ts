import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , JsonpModule } from '@angular/http'
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JugadorbyIdComponent } from './components/jugadorby-id/jugadorby-id.component';
import { AddJugadorComponent } from './components/add-jugador/add-jugador.component';
import { EditJugadorComponent } from './components/add-jugador/edit-jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JugadorbyIdComponent,
    AddJugadorComponent,
    EditJugadorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
