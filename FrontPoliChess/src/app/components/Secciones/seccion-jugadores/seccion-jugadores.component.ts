import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorService } from "../../../../services/jugador.service";
import { Jugador } from '../../../../models/jugador.model';
import { RouterLink } from '@angular/router';
/*
import { Component, inject } from '@angular/core';

import { Noticia } from '../../../../models/noticia.model';
import { NoticiaService } from '../../../../services/noticia.service';
*/
@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent {
protected i: number = 0;
private jugadorService: JugadorService = inject(JugadorService);
protected jugadores: Jugador[] = this.jugadorService.obtenerJugadores();

public verMas(): void {
  document.getElementById("jugadores")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

public cambiarJugador(siguiente: boolean) {
  if(!siguiente && this.i > 0) {
    this.i--;
  } else if(!siguiente) {
    this.i = this.jugadores.length - 1;
  } else if(siguiente && this.i < this.jugadores.length - 1) {
    this.i++;
  } else {
    this.i = 0;
  }
}





}
