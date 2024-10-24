import { Jugador } from "./jugador.model";

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object with the appropriate song keys.';

export interface Torneo {
  id: number;
  nombre: string;
  fecha: Date;
  jugadores: Set<Jugador>;
  rankingInicial: Map<number, Jugador>;
  rankingFinal: Map<number, Jugador>;
  ganador?: Jugador;
  
}

function new_(
    nombre?: string,
    fecha?: Date,
    jugadores: Set<Jugador> = new Set(), 
    rankingInicial: Map<number, Jugador> = new Map(), 
    rankingFinal: Map<number, Jugador> = new Map(), 
    ganador?: Jugador,
    id?: number
  ): Torneo {
    return {
      id: (id ?? -1),
      nombre: (nombre ?? ''),
      fecha: (fecha ?? new Date()), 
      jugadores: jugadores,
      rankingInicial: rankingInicial,
      rankingFinal: rankingFinal,
      ganador: ganador
    };
  }
  
function from(param: object): Torneo {
  if (!isTorneo(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Torneo;
  return new_(
    p.nombre,
    p.fecha,
    p.jugadores,
    p.rankingInicial,
    p.rankingFinal,
    p.ganador,
    p.id
  );
}

function isTorneo(arg: unknown): boolean {
    return (
      !!arg &&
      typeof arg === 'object' &&
      'id' in arg && typeof (arg as any).id === 'number' && 
      'nombre' in arg && typeof (arg as any).nombre === 'string' && 
      'fecha' in arg && arg.fecha instanceof Date && // Verifica que sea una fecha
      'jugadores' in arg && arg.jugadores instanceof Set && // Verifica que sea un Set
      'rankingInicial' in arg && arg.rankingInicial instanceof Map && // Verifica que sea un Map
      'rankingFinal' in arg && arg.rankingFinal instanceof Map && // Verifica que sea un Map
      'ganador' in arg && (typeof (arg as any).ganador === 'object' || (arg as any).ganador === undefined) // Verifica que sea un objeto o undefined
    );
  }

function toJSON(torneo: Torneo) {
  return {
    "torneo": {
      "id": torneo.id,
      "nombre": torneo.nombre,
      "fecha": torneo.fecha.toISOString(), // Convierte la fecha a cadena ISO
      "jugadores": Array.from(torneo.jugadores).map(jugador => ({
        id: jugador.id,
        nombre: jugador.nombre
      })),
      "rankingInicial": Array.from(torneo.rankingInicial.entries()).map(([key, jugador]) => ({
        id: key,
        jugador: { id: jugador.id, nombre: jugador.nombre }
      })),
      "rankingFinal": Array.from(torneo.rankingFinal.entries()).map(([key, jugador]) => ({
        id: key,
        jugador: { id: jugador.id, nombre: jugador.nombre }
      })),
      "ganador": torneo.ganador ? { id: torneo.ganador.id, nombre: torneo.ganador.nombre } : null
    }
  };
}

export default {
  new: new_,
  from,
  isTorneo,
  toJSON
} as const;