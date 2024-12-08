import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NoticiaService } from '../../../../services/noticia.service';
import { Noticia } from '../../../../models/noticia.model';

@Component({
  selector: 'app-seccion-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './seccion-noticias.component.html',
  styleUrls: ['./seccion-noticias.component.css']
})
export class SeccionNoticiasComponent implements OnInit {
  protected noticias: Noticia[] = [];
  protected noticiasFiltradas: Noticia[] = [];
  protected busquedaTitulo: string = '';

  constructor(
    private noticiaService: NoticiaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noticias = this.noticiaService.obtenerNoticias();
    this.ordenarNoticiasPorFecha();
    this.filtrarNoticias();
  }

  /**
   * Ordena las noticias automáticamente por fecha, de más reciente a menos reciente.
   */
  private ordenarNoticiasPorFecha(): void {
    this.noticias.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      return fechaB - fechaA; // Orden descendente
    });
  }

  /**
   * Filtra las noticias según el título ingresado en el buscador.
   */
  filtrarNoticias(): void {
    const tituloBusqueda = this.busquedaTitulo.toLowerCase();
    this.noticiasFiltradas = this.noticias.filter((noticia) =>
      noticia.titulo.toLowerCase().includes(tituloBusqueda)
    );
  }
}
