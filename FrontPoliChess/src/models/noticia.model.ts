const parametrosNoValidos: string = "Parámetros no válidos";

export interface Noticia {
  id: number,
  titulo: string,
  imagen: string,
  copete: string,
  autor: string,
  fecha: Date,
  cuerpo: ElementoCuerpo[]
}

export interface ElementoCuerpo {
  etiqueta: "h3" | "p" | "img",
  contenido: string
}

function new_(
  id?: number,
  titulo?: string,
  imagen?: string,
  copete?: string,
  autor?: string,
  fecha?: Date,
  cuerpo?: ElementoCuerpo[],
): Noticia {
  return {
    id: (id ?? -1),
    titulo: (titulo ?? ''),
    imagen: (imagen ?? ''),
    copete: (copete ?? ''),
    autor: (autor ?? ''),
    fecha: (fecha ?? new Date()),
    cuerpo: (cuerpo ?? []),
  }
}

function from(param: object): Noticia {
  if(!isNoticia(param)) {
    throw new Error(parametrosNoValidos);
  }
  const p = param as Noticia;
  return new_(p.id, p.titulo, p.imagen, p.copete, p.autor, p.fecha, p.cuerpo);
}

function isNoticia(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'titulo' in arg && typeof arg.titulo === 'string' && 
    'imagen' in arg && typeof arg.imagen === 'string' &&
    'copete' in arg && typeof arg.copete === 'string' &&
    'autor' in arg && typeof arg.autor === 'string' &&
    'fecha' in arg && arg.fecha instanceof Date &&
    'cuerpo' in arg && Array.isArray((arg as { cuerpo: unknown[] }).cuerpo) &&
    (arg as { cuerpo: unknown[] }).cuerpo.every(item => 
      typeof item === 'object' && item !== null && 
      'etiqueta' in item && typeof item.etiqueta === 'string' &&
      'contenido' in item && typeof item.contenido === 'string'
    )
  );
}

function toJSON(noticia: Noticia) {
  return {
    "noticia": {
      "id": noticia.id,
      "titulo": noticia.titulo,
      "imagen": noticia.imagen,
      "copete": noticia.copete,
      "autor": noticia.autor,
      "fecha": noticia.fecha,
      "cuerpo": noticia.cuerpo
    }
  }
}

export default {
  new: new_,
  from,
  isNoticia,
  toJSON
} as const;