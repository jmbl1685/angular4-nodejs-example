export class Jugador {

  nombre: string;
  posicion: string;
  equipo: string;
  nacionalidad: string;
  dorsal: string;
  imagenUrl: string;

  constructor( nombre : string, posicion : string, equipo : string, nacionalidad : string, dorsal : string, imagenUrl : string){
    this.nombre = nombre;
    this.posicion = posicion;
    this.nacionalidad = nacionalidad;
    this.dorsal = dorsal;
    this.imagenUrl = imagenUrl;
  }

}