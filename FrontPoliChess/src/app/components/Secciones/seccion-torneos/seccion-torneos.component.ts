import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para Two-Way Binding
import { TorneoService } from "../../../../services/torneo.service";
import { Torneo } from '../../../../models/torneo.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-torneos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Incluir FormsModule aquí
  templateUrl: './seccion-torneos.component.html',
  styleUrls: ['./seccion-torneos.component.css']
})
export class SeccionTorneosComponent implements OnInit {
  protected torneos: Torneo[] = [];
  protected torneosFiltrados: Torneo[] = [];
  protected busquedaNombre: string = '';
  protected filtroEstado: string = 'todos'; // Valor predeterminado

  constructor(
    private torneoService: TorneoService, // Inyección del servicio
    private router: Router
  ) {}

  ngOnInit(): void {
    this.torneos = this.torneoService.obtenerTorneos();
    this.actualizarEstadoTorneos(); // Llamar a la función para actualizar los estados
    this.filtrarTorneosPorEstado(); // Aplicar filtro inicial
  }

  filtrarPorNombre(): void {
    const nombreBusqueda = this.busquedaNombre.toLowerCase();
    this.torneosFiltrados = this.torneos.filter(torneo =>
      torneo.nombre.toLowerCase().includes(nombreBusqueda)
    );
  }

  filtrarTorneos(event?: any): void {
    if (event) {
      this.filtroEstado = event.target.value;
    }
    this.filtrarTorneosPorEstado();
  }

  private filtrarTorneosPorEstado(): void {
    if (this.filtroEstado === 'todos') {
      this.torneosFiltrados = [...this.torneos];
    } else {
      this.torneosFiltrados = this.torneos.filter(torneo => torneo.estado === this.filtroEstado);
    }
  }
  getEstadoTorneo(estado: string): string {
    switch (estado) {
      case 'en_curso':
        return 'En curso';
      case 'finalizado':
        return 'Finalizado';
      case 'pendiente':
        return 'No comenzado';
      default:
        return 'Estado desconocido';
    }
  }
  actualizarEstadoTorneos(): void {
    const fechaActual = new Date(); // Obtener la fecha actual
    fechaActual.setHours(0, 0, 0, 0); // Asegurarse de comparar solo fechas, no horas
  
    this.torneos.forEach(torneo => {
      if (torneo.duracion && torneo.duracion.fin) {
        const fechaFinTorneo = new Date(torneo.duracion.fin);
        fechaFinTorneo.setHours(0, 0, 0, 0); // Comparar solo la fecha, no la hora
  
        if (fechaFinTorneo.getTime() < fechaActual.getTime()) {
          // Si la fecha de finalización es anterior a la fecha actual, el torneo está finalizado
          torneo.estado = 'finalizado';
        } else if (fechaFinTorneo.getTime() === fechaActual.getTime()) {
          // Si la fecha de finalización es hoy, el torneo está en curso
          torneo.estado = 'en_curso';  // Cambiado a 'en_curso'
        } else if (torneo.fecha.getTime() > fechaActual.getTime()) {
          // Si la fecha de inicio es posterior a la fecha actual, el torneo está pendiente
          torneo.estado = 'pendiente';
        }
      } else {
        // Si no tiene fecha de finalización, se mantiene en pendiente por defecto
        torneo.estado = 'pendiente';
      }
    });
  }
  
  
  }


