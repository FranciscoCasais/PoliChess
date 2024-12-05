import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorService } from "../../../../services/jugador.service";
import { Jugador } from '../../../../models/jugador.model';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent implements OnInit {
  protected jugadores: Jugador[] = [];
  protected jugadoresFiltrados: Jugador[] = [];
  protected filtroSeleccionado: string = 'standard'; // Filtro por defecto

  private jugadorService: JugadorService = inject(JugadorService);
  router: any;

  ngOnInit(): void {
    // Obtener la lista de jugadores
    this.jugadores = this.jugadorService.obtenerJugadores();
    this.jugadoresFiltrados = [...this.jugadores]; // Copiar los jugadores para que se pueda filtrar
  }

   // Función para filtrar jugadores por el valor de 'Elo'
   filtrarJugadores(event: any): void {
    this.filtroSeleccionado = event.target.value; // Actualizar el filtro seleccionado
    this.jugadoresFiltrados = this.jugadores.sort((a, b) => {
      // Dependiendo del filtro, ordenamos por el tipo de Elo seleccionado de mayor a menor
      if (this.filtroSeleccionado === 'standard') {
        return b.eloStandard - a.eloStandard; // Orden de mayor a menor
      } else if (this.filtroSeleccionado === 'rapido') {
        return b.eloRapido - a.eloRapido; // Orden de mayor a menor
      } else {
        return b.eloBlitz - a.eloBlitz; // Orden de mayor a menor
      }
    });
  }
}
