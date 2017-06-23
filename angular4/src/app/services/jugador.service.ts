import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Jugador } from '../models/jugador'

@Injectable()
export class JugadorService {
  
  public url: string;
  public jugador : Jugador

  constructor(private http: Http) {
    this.url = 'http://192.168.1.66:3000';
  }

  getJugadores(){
    return this.http.get(`${this.url}/futbolistas`).map( res => res.json())
  }

  getJugador(id:string){
    return this.http.get(`${this.url}/futbolista/${id}`).map( res => res.json())
  }

  addJugador(jugador: Jugador){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/futbolista`, JSON.stringify(jugador), { headers: headers }).map( res =>  res.json() )

  }

  editJugador(id: string, jugador: Jugador){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}/futbolista/${id}`, JSON.stringify(jugador), { headers: headers }).map( res =>  res.json() )

  }

  deleteJugador(id:string){
    return this.http.delete(`${this.url}/futbolista/${id}`).map( res => res.json())
  }

}