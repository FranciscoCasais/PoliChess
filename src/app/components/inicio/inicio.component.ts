import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../../models/noticia.model';
import { NoticiaService } from '../../../services/noticia/noticia.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  protected i: number = 0;
  private noticiaService: NoticiaService = inject(NoticiaService);
  protected noticias: Noticia[] = this.noticiaService.obtenerNoticias();

  public verMas(): void {
    document.getElementById("noticias")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  public cambiarNoticia(siguiente: boolean) {
    if(!siguiente && this.i > 0) {
      this.i--;
    } else if(!siguiente) {
      this.i = this.noticias.length - 1;
    } else if(siguiente && this.i < this.noticias.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
}