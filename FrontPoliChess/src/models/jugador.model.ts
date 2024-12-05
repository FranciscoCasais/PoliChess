const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object with the appropriate song keys.';

export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  fechaDeNacimiento: Date;
  eloStandard: number;
  eloRapido: number;
  eloBlitz: number;
  foto: string;
 
}

function new_(
  nombre?: string,
  apellido?: string,
  fechaDeNacimiento?: Date,
  eloStandard?: number,
  eloRapido?: number,
  eloBlitz?: number,
  foto?: string,
  id?: number
): Jugador {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    fechaDeNacimiento: (fechaDeNacimiento ?? new Date()),
    eloStandard: (eloStandard ?? -1),
    eloRapido: (eloRapido ?? -1),
    eloBlitz: (eloBlitz ?? -1),
    foto: (foto ?? '')
  }
}

function from(param: object): Jugador {
  if (!isJugador(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Jugador;
  return new_(p.nombre, p.apellido, p.fechaDeNacimiento, p.eloStandard, p.eloRapido,p.eloBlitz, p.foto, p.id);
}

function isJugador(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string' && 
    'apellido' in arg && typeof arg.apellido === 'string' &&
    'fechaDeNacimiento' in arg && arg.fechaDeNacimiento instanceof Date &&
    'eloStandard' in arg && typeof arg.id === 'number' &&
    'eloRapido' in arg && typeof arg.eloRapido === 'number' &&
    'eloBlitz' in arg && typeof arg.eloBlitz === 'number' &&
    'foto' in arg && typeof arg.foto === 'string'
  );
}

function toJSON(jugador: Jugador) {
  return {
    "jugador": {
      "id": jugador.id,
      "nombre": jugador.nombre,
      "apellido": jugador.apellido,
      "edad": jugador.fechaDeNacimiento,
      "eloStandard": jugador.eloStandard,
      "eloRapido": jugador.eloRapido,
      "eloBlitz": jugador.eloBlitz,
      "foto": jugador.foto,
    }
  }
}

export default {
  new: new_,
  from,
  isJugador,
  toJSON
} as const;