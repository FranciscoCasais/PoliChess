import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../../../../services/noticia.service';
import { Noticia } from '../../../../models/noticia.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {
  noticia: Noticia | undefined;

  constructor(
    private route: ActivatedRoute,  // Para obtener el id de la noticia desde la URL
    private noticiaService: NoticiaService  // Para obtener la lista de noticias
  ) {}

  ngOnInit(): void {
    // Obtener el id de la noticia desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener la noticia correspondiente al id
    this.noticia = this.noticiaService.obtenerNoticias().find(n => n.id === id);

    if (!this.noticia) {
      // Si no encontramos la noticia, podemos redirigir o mostrar un error
      console.error('Noticia no encontrada');
    }
  }
}
