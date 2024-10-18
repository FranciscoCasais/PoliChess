import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TorneoComponent } from "../../../components/Individuales/torneo/torneo.component";
import torneoModel, { Torneo } from "../../../../models/torneo.model";
import { TorneoService } from "../../../../services/torneo.service";
@Component({
  selector: 'app-seccion-torneos',
  standalone: true,
  imports: [],
  templateUrl: './seccion-torneos.component.html',
  styleUrl: './seccion-torneos.component.css'
})
export class SeccionTorneosComponent {

}
