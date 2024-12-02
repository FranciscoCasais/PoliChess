import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../../../models/noticia.model';
import { NoticiaService } from '../../../../services/noticia.service';
import { JugadorService } from '../../../../services/jugador.service';
import { Jugador } from '../../../../models/jugador.model';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  protected noticiai: number = 0;
  protected jugadori: number = 0;
  private noticiaService: NoticiaService = inject(NoticiaService);
  protected noticias: Noticia[] = this.noticiaService.obtenerNoticias();
  private jugadorService: JugadorService = inject(JugadorService);
protected jugadores: Jugador[] = this.jugadorService.obtenerJugadores();

  public verMas(): void {
    document.getElementById("noticias")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  public cambiarNoticia(siguiente: boolean) {
    if(!siguiente && this.noticiai > 0) {
      this.noticiai--;
    } else if(!siguiente) {
      this.noticiai = this.noticias.length - 1;
    } else if(siguiente && this.noticiai < this.noticias.length - 1) {
      this.noticiai++;
    } else {
      this.noticiai = 0;
    }
  }

  public cambiarJugador(siguiente: boolean) {
    if(!siguiente && this.jugadori > 0) {
      this.jugadori--;
    } else if(!siguiente) {
      this.jugadori = this.jugadores.length - 1;
    } else if(siguiente && this.jugadori < this.jugadores.length - 1) {
      this.jugadori++;
    } else {
      this.jugadori = 0;
    }
  }
}