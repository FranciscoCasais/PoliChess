const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object with the appropriate song keys.';

export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  eloStandard: number;
  eloRapido: number;
  eloBlitz: number;
}

function new_(
  nombre?: string,
  apellido?: string,
  edad?: number,
  eloStandard?: number,
  eloRapido?: number,
  eloBlitz?: number,
  id?: number
): Jugador {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    edad: (edad ?? -1),
    eloStandard: (eloStandard ?? -1),
    eloRapido: (eloRapido ?? -1),
    eloBlitz: (eloBlitz ?? -1)
  }
}

function from(param: object): Jugador {
  if (!isJugador(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Jugador;
  return new_(p.nombre, p.apellido, p.edad, p.eloStandard, p.eloRapido,p.eloBlitz, p.id);
}

function isJugador(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string' && 
    'apellido' in arg && typeof arg.apellido === 'string' &&
    'edad' in arg && typeof arg.edad === 'number' &&
    'eloStandard' in arg && typeof arg.id === 'number' &&
    'eloRapido' in arg && typeof arg.eloRapido === 'number' &&
    'eloBlitz' in arg && typeof arg.eloBlitz === 'number'
  );
}


export default {
  new: new_,
  from,
  isJugador
} as const;