import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service'
import { Jugador } from '../../models/jugador'

@Component({
  selector: 'selector-jugadores',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JugadorService]
})
export class HomeComponent implements OnInit{

  public futbolistas: Array<Jugador>;

  constructor(private _jugadorService : JugadorService){
    
  }

  ngOnInit(){
    this.getFutbolistas();
  }

  public getFutbolistas(){

    this._jugadorService.getJugadores().subscribe(

      result => {
        this.futbolistas = result.data;    
      },
      error => {

      }
    );

  }

  public eliminarJugador(id: string){

    this._jugadorService.deleteJugador(id).subscribe(

      result => {
        this.getFutbolistas();    
      },
      error => {

      }
    );

  }

}
