import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { JugadorService } from '../../services/jugador.service'
import { Jugador } from '../../models/jugador'

@Component({
  selector: 'app-jugadorby-id',
  templateUrl: './jugadorby-id.component.html',
  styleUrls: ['./jugadorby-id.component.css'],
  providers: [JugadorService]
})
export class JugadorbyIdComponent implements OnInit {

  public futbolista: Jugador;

  constructor(private _jugadorService : JugadorService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(){

    this._route.params.forEach( (params: Params)=>{

      let id = params['id']
      
      this._jugadorService.getJugador(id).subscribe(
      result => {
        this.futbolista = result.data;
      },
      error => {

      }
    );


    })

    
  }

}
