import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import torneoModel, { Torneo } from '../models/torneo.model';


@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public obtenerTorneos() {
    return this.http.get(this.baseUrl);
  }

  public agregarTorneo(torneo: Torneo) {
    return this.http.post(this.baseUrl, torneoModel.toJSON(torneo));
  }

  public modificarTorneo(torneo: Torneo) {
    return this.http.put(this.baseUrl, torneoModel.toJSON(torneo));
  }

  public eliminarTorneo(id: number) {
    return this.http.delete(`${ this.baseUrl }/${ id }`);
  }
}
