import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jugadorModel, { Jugador } from '../models/jugador.model';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  
/*  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  public agregarJugadores(jugador: Jugador) {
    return this.http.post(this.baseUrl, jugadorModel.toJSON(jugador));
  }

  public modificarJugador(jugador: Jugador) {
    return this.http.put(this.baseUrl, jugadorModel.toJSON(jugador));
  }

  public eliminarJugador(id: number) {
    return this.http.delete(`${ this.baseUrl }/${ id }`);
  } */  
  
  
  public obtenerJugadores(): Jugador[]  {
    return [
      {
        id: 0,
        nombre: "Daniel",
        apellido:"Santi",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 1900,
        eloBlitz: 1900,
        eloRapido: 1800,
        foto: "data:image/jpeg;base64,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",
      },
      {
        id: 1,
        nombre: "Ted",
        apellido:"Beneke",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 0,
        eloBlitz: 1700,
        eloRapido: 1850,
        foto: "data:image/jpeg;base64,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",
      },
      {
        id: 2,
        nombre: "James",
        apellido:"Whistler",
        fechaDeNacimiento: new Date("2024-10-25"),
        eloStandard: 2300,
        eloBlitz: 1900,
        eloRapido: 1800,
        foto: "data:image/jpeg;base64,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",
      }
    ]
    ;
  }
}
