import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorService } from "../../../../services/jugador.service";
import { Jugador } from '../../../../models/jugador.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seccion-jugadores',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './seccion-jugadores.component.html',
  styleUrls: ['./seccion-jugadores.component.css']
})
export class SeccionJugadoresComponent {
protected i: number = 0;
  private jugadorService: JugadorService = inject(JugadorService);
  protected jugadores: Jugador[] = [];
  router: any;
  



  ngOnInit(): void {
    this.jugadores = this.jugadorService.obtenerJugadores(); 
  }

 
  



}
