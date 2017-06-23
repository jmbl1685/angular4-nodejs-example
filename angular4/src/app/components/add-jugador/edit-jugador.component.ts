import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { JugadorService } from '../../services/jugador.service'
import { Jugador } from '../../models/jugador'


@Component({
  selector: 'edit-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css'],
  providers: [JugadorService]
})
export class EditJugadorComponent implements OnInit {

  public futbolista: Jugador;
  public titleBtn: string;

  constructor(private _http: Http, private _jugadorService : JugadorService, private _route: ActivatedRoute, private _router: Router) {
    
  }

  ngOnInit(){
    this.futbolista = new Jugador("","","","","","");
    this.titleBtn = "Editar jugador"
    this.getJugador();
  }

  public getJugador(){

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

  public onSubmit(){

    this._route.params.forEach( (params: Params)=>{

      let id = params['id'];

      this._jugadorService.editJugador(id, this.futbolista).subscribe(
        response => {
          this.futbolista = response.futbolista;
          this.futbolista = new Jugador("","","","","","");
          this._router.navigate(['jugador/'+id])
          console.log('el valeeeeeeee')
        },
        error =>{
          console.log('Error en el registro')
        }
      )
    })
  }
  
}
