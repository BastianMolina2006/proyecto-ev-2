import { peticion } from './http';

const URL_NOTICIAS = 'http://localhost:8085/api/noticias';

export interface NoticiaApi {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string; // AAAA-MM-DD
  imagen: string;
  subtitulo: string;
  resumen: string;
  contenido: string; // párrafos separados por una línea en blanco
  detalles: string; // una línea por dato: "Etiqueta: valor"
}

export type NoticiaNueva = Omit<NoticiaApi, 'id'>;

export const listarNoticias = () => peticion<NoticiaApi[]>(URL_NOTICIAS, undefined, false); // público

export const obtenerNoticia = (id: string) => peticion<NoticiaApi>(`${URL_NOTICIAS}/${id}`, undefined, false); // público

export const crearNoticia = (n: NoticiaNueva) =>
  peticion<NoticiaApi>(URL_NOTICIAS, { method: 'POST', body: JSON.stringify(n) });

export const actualizarNoticia = (id: number, n: NoticiaNueva) =>
  peticion<NoticiaApi>(`${URL_NOTICIAS}/${id}`, { method: 'PUT', body: JSON.stringify(n) });

export const eliminarNoticia = (id: number) =>
  peticion<void>(`${URL_NOTICIAS}/${id}`, { method: 'DELETE' });

// "2026-10-24" -> "24 de octubre de 2026" (sin desfase de zona horaria)
export const formatearFecha = (fecha: string) => {
  const [anio, mes, dia] = fecha.split('-').map(Number);
  return new Date(anio, mes - 1, dia).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
