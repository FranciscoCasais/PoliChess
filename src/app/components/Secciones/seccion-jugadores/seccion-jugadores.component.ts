import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorComponent } from "../../Individuales/jugador/jugador.component"
import jugadorModel, { Jugador } from "../../../../models/jugador.model";
import { JugadorService } from "../../../../services/jugador.service";
@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [CommonModule,JugadorComponent],
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent {

protected jugadores: Jugador [] = [];







}
