import { Routes } from '@angular/router';
import { InicioComponent } from './components/Secciones/inicio/inicio.component';
import { SeccionNoticiasComponent } from "./components/Secciones/seccion-noticias/seccion-noticias.component";
import { SeccionCalendarioComponent } from './components/Secciones/seccion-calendario/seccion-calendario.component';
import { SeccionTorneosComponent } from './components/Secciones/seccion-torneos/seccion-torneos.component';
import { SeccionJugadoresComponent } from './components/Secciones/seccion-jugadores/seccion-jugadores.component';
import { JugadorComponent } from './components/Individuales/jugador/jugador.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TorneoComponent } from './components/Individuales/torneo/torneo.component';
export const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: "inicio",
        component: InicioComponent,
    },
    {
        path: "noticias",
        component: SeccionNoticiasComponent,
    },
    {
        path: "torneos",
        component: SeccionTorneosComponent,
    },
    {
        path: "calendario",
        component: SeccionCalendarioComponent,
    },
    {
        path: "jugadores",
        component: SeccionJugadoresComponent,
    },
    {
        path: "jugador/:id",
        component: JugadorComponent
    },
    {
        path: "torneo/:id",
        component: TorneoComponent
    },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
