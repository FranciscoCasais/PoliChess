import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Añadir esta importación
import { JugadorService } from "../../../../services/jugador.service";
import { Jugador } from '../../../../models/jugador.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Incluir FormsModule aquí
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent implements OnInit {
  protected jugadores: Jugador[] = [];
  protected jugadoresFiltrados: Jugador[] = [];
  protected busquedaNombre: string = '';
  protected filtroElo: string = 'standard'; // Valor predeterminado

  constructor(
    private jugadorService: JugadorService, // Inyección en el constructor
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jugadores = this.jugadorService.obtenerJugadores();
    this.filtrarJugadores(); // Aplicar ambos filtros por nombre y Elo al inicio
  }

  filtrarPorNombre(): void {
    const nombreBusqueda = this.busquedaNombre.toLowerCase();
    // Filtrar jugadores por nombre
    this.jugadoresFiltrados = this.jugadores.filter(jugador =>
      `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(nombreBusqueda)
    );
    // Aplicar el filtro de Elo sobre los jugadores ya filtrados por nombre
    this.filtrarJugadoresPorElo();
  }

  filtrarJugadores(event?: any): void {
    if (event) {
      this.filtroElo = event.target.value;
    }
    // Primero filtramos por nombre
    this.filtrarPorNombre();
  }

  private filtrarJugadoresPorElo(): void {
    // Ahora aplicamos el filtro por Elo sobre los jugadores ya filtrados por nombre
    switch (this.filtroElo) {
      case 'rapido':
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloRapido - a.eloRapido);
        break;
      case 'blitz':
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloBlitz - a.eloBlitz);
        break;
      default: // Caso 'standard'
        this.jugadoresFiltrados = this.jugadoresFiltrados.sort((a, b) => b.eloStandard - a.eloStandard);
        break;
    }
  }
}
