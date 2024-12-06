import { Jugador } from "./jugador.model";

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object with the appropriate song keys.';

export interface Torneo {
  id: number;
  nombre: string;
  ritmo: string;
  fecha: Date;
  jugadores: Set<Jugador>;
  rankingInicial: Map<number, Jugador>;
  rankingFinal: Map<number, Jugador>;
  ganador?: Jugador;
  estado?: 'pendiente' | 'en_curso' | 'finalizado'; // Nuevo atributo
  duracion?: { inicio: Date; fin: Date }; // Nuevo atributo
  descripcion?: string; // Nuevo atributo
}

function new_(
  nombre?: string,
  ritmo?: string,
  fecha?: Date,
  jugadores: Set<Jugador> = new Set(),
  rankingInicial: Map<number, Jugador> = new Map(),
  rankingFinal: Map<number, Jugador> = new Map(),
  ganador?: Jugador,
  id?: number,
  estado?: 'pendiente' | 'en_curso' | 'finalizado', // Nuevo atributo
  duracion?: { inicio: Date; fin: Date }, // Nuevo atributo
  descripcion?: string // Nuevo atributo
): Torneo {
  return {
    id: id ?? -1,
    nombre: nombre ?? '',
    ritmo: ritmo ?? '',
    fecha: fecha ?? new Date(),
    jugadores: jugadores,
    rankingInicial: rankingInicial,
    rankingFinal: rankingFinal,
    ganador: ganador,
    estado: estado ?? 'pendiente',
    duracion: duracion ?? undefined,
    descripcion: descripcion ?? ''
  };
}

function from(param: object): Torneo {
  if (!isTorneo(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Torneo;
  return new_(
    p.nombre,
    p.ritmo,
    p.fecha,
    p.jugadores,
    p.rankingInicial,
    p.rankingFinal,
    p.ganador,
    p.id,
    p.estado,
    p.duracion,
    p.descripcion
  );
}

function isTorneo(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof (arg as any).id === 'number' &&
    'nombre' in arg && typeof (arg as any).nombre === 'string' &&
    'ritmo' in arg && typeof (arg as any).ritmo === 'string' &&
    'fecha' in arg && arg.fecha instanceof Date &&
    'jugadores' in arg && arg.jugadores instanceof Set &&
    'rankingInicial' in arg && arg.rankingInicial instanceof Map &&
    'rankingFinal' in arg && arg.rankingFinal instanceof Map &&
    'ganador' in arg && (typeof (arg as any).ganador === 'object' || (arg as any).ganador === undefined) &&
    ('estado' in arg && ['pendiente', 'en_curso', 'finalizado'].includes((arg as any).estado)) &&
    ('duracion' in arg && typeof (arg as any).duracion === 'object') &&
    ('descripcion' in arg && typeof (arg as any).descripcion === 'string')
  );
}

function toJSON(torneo: Torneo) {
  return {
    "torneo": {
      "id": torneo.id,
      "nombre": torneo.nombre,
      "ritmo": torneo.ritmo,
      "fecha": torneo.fecha.toISOString(),
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
      "ganador": torneo.ganador ? { id: torneo.ganador.id, nombre: torneo.ganador.nombre } : null,
      "estado": torneo.estado ?? 'pendiente',
      "duracion": torneo.duracion
        ? { inicio: torneo.duracion.inicio.toISOString(), fin: torneo.duracion.fin.toISOString() }
        : null,
      "descripcion": torneo.descripcion ?? ''
    }
  };
}

export default {
  new: new_,
  from,
  isTorneo,
  toJSON
} as const;
