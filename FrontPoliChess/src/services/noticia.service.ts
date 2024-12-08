import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import noticiaModel, { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  /* private apiURL: string = "http://localhost:3000/noticias";

  constructor(private http: HttpClient) { }

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
  } */

  public obtenerNoticias(): Noticia[] {
    return [
      {
        id: 0,
        titulo: "Sapo Peluquería gana torneo regional",
        imagen: "assets/danielpoeta.jpg",
        copete: "Daniel Lengua destacó como el mejor jugador del torneo organizado en Arquitectura.",
        autor: "Francisco Casais",
        fecha: new Date("2024-10-25"),
        cuerpo: [],
        importancia: 5 // Importancia máxima
      },
      {
        id: 1,
        titulo: "Daniel Lengua inaugura la primera peluquería temática",
        imagen: "assets/danielfantasma.jpg",
        copete: "Inspirada en sapos y mostachos, la peluquería de Daniel es un éxito en Playosa.",
        autor: "Carlos Mostacho",
        fecha: new Date("2024-10-30"),
        cuerpo: [],
        importancia: 3 // Importancia media
      },
      {
        id: 2,
        titulo: "Daniel Mostacho lanza queso artesanal",
        imagen: "assets/danielTortuga.jpg",
        copete: "El queso 'Lengua de Sapo' revoluciona la gastronomía local con su sabor único.",
        autor: "Ana Playosa",
        fecha: new Date("2024-11-02"),
        cuerpo: [],
        importancia: 4 // Importancia alta
      },
      {
        id: 3,
        titulo: "Trauma en Arquitectura: Daniel pierde el Megatone Challenge",
        imagen: "assets/danielriestra.jpg",
        copete: "Tras liderar, Daniel Lengua quedó fuera en la última ronda.",
        autor: "Pedro Queso",
        fecha: new Date("2024-11-05"),
        cuerpo: [],
        importancia: 2 // Importancia baja
      },
      {
        id: 4,
        titulo: "Daniel Lengua y el misterio del sapo dorado",
        imagen: "assets/danielfantasma.jpg",
        copete: "Una leyenda urbana que volvió loco a un grupo de arquitectos en Playosa.",
        autor: "Marta Peluquería",
        fecha: new Date("2024-11-10"),
        cuerpo: [],
        importancia: 5 // Importancia máxima
      },
      {
        id: 5,
        titulo: "Peluquería de Daniel Lengua dona parte de sus ganancias",
        imagen: "assets/danielNievas.jpg",
        copete: "El dinero será destinado a víctimas del 'trauma del queso' en Megatone.",
        autor: "Lucía Queso",
        fecha: new Date("2024-11-15"),
        cuerpo: [],
        importancia: 3 // Importancia media
      },
      {
        id: 6,
        titulo: "El arquitecto Daniel y su bigote más famoso de Playosa",
        imagen: "assets/caballopolichess.png",
        copete: "Conocido como 'Mostacho de Oro', Daniel inspira a nuevas generaciones.",
        autor: "Sofía Sapo",
        fecha: new Date("2024-11-20"),
        cuerpo: [],
        importancia: 2 // Importancia baja
      },
      {
        id: 7,
        titulo: "Lengua de Daniel: obra arquitectónica que desafía lo tradicional",
        imagen: "assets/eloBlitz.png",
        copete: "Una estructura en forma de lengua gigante se inaugura en el centro de Playosa.",
        autor: "Pablo Megatone",
        fecha: new Date("2024-11-25"),
        cuerpo: [],
        importancia: 4 // Importancia alta
      },
      {
        id: 8,
        titulo: "Daniel y el campeonato mundial de sapos",
        imagen: "assets/EloRapido.png",
        copete: "El 'Rey de los Sapos' lleva a su equipo a la gloria internacional.",
        autor: "Marcos Peluquería",
        fecha: new Date("2024-12-01"),
        cuerpo: [],
        importancia: 1 // Importancia mínima
      },
      {
        id: 9,
        titulo: "Daniel Megatone crea el primer museo del queso",
        imagen: "assets/danielNievas.jpg",
        copete: "Una obra maestra dedicada al queso y la arquitectura.",
        autor: "Raúl Mostacho",
        fecha: new Date("2024-12-05"),
        cuerpo: [],
        importancia: 3 // Importancia media
      },
      {
        id: 10,
        titulo: "El trauma de Daniel: pierde su bigote en un partido de sapos",
        imagen: "assets/danielfantasma.jpg",
        copete: "Durante un juego de campeonato, Daniel sufrió el peor día de su vida.",
        autor: "Francisco Playosa",
        fecha: new Date("2024-12-10"),
        cuerpo: [],
        importancia: 2 // Importancia baja
      },
      {
        id: 11,
        titulo: "Daniel Lengua arrasa en el torneo de arquitectura con queso",
        imagen: "assets/danielfantasma.jpg",
        copete: "Una propuesta innovadora fusiona queso y diseño arquitectónico.",
        autor: "Clara Megatone",
        fecha: new Date("2024-12-15"),
        cuerpo: [],
        importancia: 5 // Importancia máxima
      },
      {
        id: 12,
        titulo: "El sapo gigante de Daniel Lengua sorprende a Playosa",
        imagen: "assets/danielfantasma.jpg",
        copete: "Una escultura gigante celebra la victoria en el mundial de sapos.",
        autor: "Julia Queso",
        fecha: new Date("2024-12-20"),
        cuerpo: [],
        importancia: 4 // Importancia alta
      },
      {
        id: 13,
        titulo: "Peluquería Mostacho de Daniel revoluciona Megatone",
        imagen: "assets/danielfantasma.jpg",
        copete: "La nueva tendencia: cortes inspirados en bigotes históricos.",
        autor: "Lucas Arquitectura",
        fecha: new Date("2024-12-23"),
        cuerpo: [],
        importancia: 3 // Importancia media
      },
      {
        id: 14,
        titulo: "Daniel Lengua lanza el queso 'Sapo Megatone'",
        imagen: "assets/danielriestra.jpg",
        copete: "Un homenaje a sus dos pasiones: el queso y los sapos.",
        autor: "Federico Trauma",
        fecha: new Date("2024-12-27"),
        cuerpo: [],
        importancia: 2 // Importancia baja
      },
      {
        id: 15,
        titulo: "El trauma de Daniel: perdió su mostacho en Playosa",
        imagen: "assets/danielPlayosa.jpg",
        copete: "Una pérdida que conmocionó a todo el pueblo.",
        autor: "Ana Lengua",
        fecha: new Date("2024-12-30"),
        cuerpo: [],
        importancia: 1 // Importancia mínima
      },
      {
        id: 16,
        titulo: "Daniel abre la primera escuela de arquitectura con queso",
        imagen: "assets/danielnaroditsky.jpg",
        copete: "El curso estrella: diseñar edificios comestibles.",
        autor: "Oscar Sapo",
        fecha: new Date("2025-01-05"),
        cuerpo: [],
        importancia: 5 // Importancia máxima
      },
      {
        id: 17,
        titulo: "Daniel Lengua: del trauma al éxito internacional",
        imagen: "assets/danielLengua.jpg",
        copete: "Una historia inspiradora de superación personal.",
        autor: "Mateo Megatone",
        fecha: new Date("2025-01-10"),
        cuerpo: [],
        importancia: 3 // Importancia media
      },
      {
        id: 18,
        titulo: "Mostacho y queso: la dupla de Daniel en el mundial de sapos",
        imagen: "assets/danielmostacho.jpg",
        copete: "Daniel Lengua vuelve a ser campeón con estilo.",
        autor: "Bruno Peluquería",
        fecha: new Date("2025-01-15"),
        cuerpo: [],
        importancia: 4 // Importancia alta
      },
      {
        id: 19,
        titulo: "El bigote arquitectónico de Daniel: una obra de arte",
        imagen: "assets/danielmostacho.jpg",
        copete: "Una mezcla de mostacho, sapos y queso en el centro de Playosa.",
        autor: "Victoria Trauma",
        fecha: new Date("2025-01-20"),
        cuerpo: [],
        importancia: 5 // Importancia máxima
      }
    ];
  }
}
