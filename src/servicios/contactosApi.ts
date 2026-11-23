import { peticion } from './http';

const URL_CONTACTOS = 'http://localhost:8082/api/contactos';

export interface ContactoApi {
  id: number;
  nombreCompleto: string;
  correo: string;
  mensaje: string;
  estado: 'PENDIENTE' | 'ATENDIDO';
  fechaCreacion: string;
}

export const enviarContacto = (datos: { nombreCompleto: string; correo: string; mensaje: string }) =>
  peticion<ContactoApi>(URL_CONTACTOS, { method: 'POST', body: JSON.stringify(datos) }, false); // público

export const listarContactos = () => peticion<ContactoApi[]>(URL_CONTACTOS);

export const marcarContactoAtendido = (id: number) =>
  peticion<ContactoApi>(`${URL_CONTACTOS}/${id}/atendido`, { method: 'PUT' });

export const eliminarContacto = (id: number) =>
  peticion<void>(`${URL_CONTACTOS}/${id}`, { method: 'DELETE' });
