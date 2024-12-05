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
  protected i: number = 0;
  private jugadorService: JugadorService = inject(JugadorService);
  protected jugadores: Jugador[] = [];
  protected jugadoresFiltrados: Jugador[] = [];
  protected busquedaNombre: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.jugadores = this.jugadorService.obtenerJugadores();
    this.jugadoresFiltrados = [...this.jugadores]; // Inicializa con todos los jugadores
  }

  // Filtra los jugadores por nombre (insensible a mayúsculas/minúsculas)
  filtrarPorNombre(): void {
    if (this.busquedaNombre.trim() === '') {
      this.jugadoresFiltrados = [...this.jugadores]; // Si no hay búsqueda, muestra todos los jugadores
    } else {
      this.jugadoresFiltrados = this.jugadores.filter(jugador => 
        `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(this.busquedaNombre.toLowerCase())
      );
    }
  }

  // Función para filtrar por el Elo
  filtrarJugadores(event: any): void {
    const elo = event.target.value;
    if (elo === 'standard') {
      this.jugadoresFiltrados = this.jugadores.sort((a, b) => a.eloStandard - b.eloStandard);
    } else if (elo === 'rapido') {
      this.jugadoresFiltrados = this.jugadores.sort((a, b) => a.eloRapido - b.eloRapido);
    } else if (elo === 'blitz') {
      this.jugadoresFiltrados = this.jugadores.sort((a, b) => a.eloBlitz - b.eloBlitz);
    }
  }
}
