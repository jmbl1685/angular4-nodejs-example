import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { JugadorService } from '../../services/jugador.service'
import { Jugador } from '../../models/jugador'


@Component({
  selector: 'add-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css'],
  providers: [JugadorService]
})
export class AddJugadorComponent implements OnInit {

  public futbolista: Jugador;
  public titleBtn: string;

  constructor(private _http: Http, private _jugadorService : JugadorService, private _route: ActivatedRoute, private _router: Router) {
    this.titleBtn = "Registrar jugador"
  }

  ngOnInit(){
    this.futbolista = new Jugador("","","","","","");
  }

  public onSubmit(){
    this._jugadorService.addJugador(this.futbolista).subscribe(
      response => {
        this.futbolista = response.futbolista;
        this.futbolista = new Jugador("","","","","","");
        this._router.navigate(['jugador/'+response.futbolista._id])
      },
      error =>{
        console.log('Error en el registro')
      }
    )
  }
  
}
