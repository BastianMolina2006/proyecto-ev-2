import { obtenerToken } from './sesion';
import { cerrarSesion } from '../data/Usuarios';

// Función base para llamar a los microservicios con fetch.
// - Agrega el token JWT en el header Authorization (salvo en las rutas públicas: conToken = false).
// - Si el servidor responde con error, lanza un Error con el mensaje que envía Spring Boot.
export async function peticion<T>(url: string, opciones?: RequestInit, conToken = true): Promise<T> {
  const token = conToken ? obtenerToken() : null;

  let respuesta: Response;
  try {
    respuesta = await fetch(url, {
      ...opciones,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  } catch {
    throw new Error('No se pudo conectar con el servidor. Verifica que el microservicio esté encendido.');
  }

  // 401 con token: el token venció o no es válido -> se cierra la sesión
  if (respuesta.status === 401 && token) {
    cerrarSesion();
    window.location.href = '/login';
    throw new Error('Tu sesión expiró. Inicia sesión nuevamente.');
  }

  // 403: el usuario inició sesión pero su rol no tiene permiso
  if (respuesta.status === 403) {
    throw new Error('No tienes permisos para realizar esta acción.');
  }

  if (!respuesta.ok) {
    let mensaje = `Error ${respuesta.status}`;
    try {
      const datos = await respuesta.json();
      if (datos.message) mensaje = datos.message;
    } catch {
      // la respuesta no traía JSON
    }
    throw new Error(mensaje);
  }

  // 204 No Content (DELETE) no trae cuerpo
  if (respuesta.status === 204) return undefined as T;
  return respuesta.json() as Promise<T>;
}
