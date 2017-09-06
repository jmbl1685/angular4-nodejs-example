import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JugadorbyIdComponent } from './components/jugadorby-id/jugadorby-id.component';
import { AddJugadorComponent } from './components/add-jugador/add-jugador.component';
import { EditJugadorComponent } from './components/add-jugador/edit-jugador.component';

const appRoutes : Routes = [

  { path: 'marcador' , component: HomeComponent },
  { path: 'jugador/:id' , component: JugadorbyIdComponent },
  { path: 'crear-jugador' , component: AddJugadorComponent },
  { path: 'editar-jugador/:id' , component: EditJugadorComponent },
  { path: '**' , component: HomeComponent }
  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);