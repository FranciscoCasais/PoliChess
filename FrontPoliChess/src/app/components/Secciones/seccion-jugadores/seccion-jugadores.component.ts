import { Component, inject, OnInit } from '@angular/core';
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
    this.filtrarJugadoresPorElo(); // Aplicar filtro por Elo Standard al inicio
  }

  filtrarPorNombre(): void {
    const nombreBusqueda = this.busquedaNombre.toLowerCase();
    this.jugadoresFiltrados = this.jugadores.filter(jugador =>
      `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(nombreBusqueda)
    );
  }

  filtrarJugadores(event?: any): void {
    if (event) {
      this.filtroElo = event.target.value;
    }
    this.filtrarJugadoresPorElo();
  }

  private filtrarJugadoresPorElo(): void {
    switch (this.filtroElo) {
      case 'rapido':
        this.jugadoresFiltrados = [...this.jugadores].sort((a, b) => b.eloRapido - a.eloRapido);
        break;
      case 'blitz':
        this.jugadoresFiltrados = [...this.jugadores].sort((a, b) => b.eloBlitz - a.eloBlitz);
        break;
      default: // Caso 'standard'
        this.jugadoresFiltrados = [...this.jugadores].sort((a, b) => b.eloStandard - a.eloStandard);
        break;
    }
  }
}
