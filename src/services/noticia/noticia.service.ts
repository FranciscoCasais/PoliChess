import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import noticiaModel, { Noticia } from '../../models/noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  private http: HttpClient;
  private apiURL: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.apiURL = "";
  }

  public obtenerNoticias() {
    return this.http.get(this.apiURL);
  }

  public agregarNoticia(noticia: Noticia) {
    return this.http.post(this.apiURL, noticiaModel.toJSON(noticia));
  }

  public modificarNoticia(noticia: Noticia) {
    return this.http.put(this.apiURL, noticiaModel.toJSON(noticia));
  }

  public eliminarNoticia(id: number) {
    return this.http.delete(`${ this.apiURL }/${ id }`);
  }
}