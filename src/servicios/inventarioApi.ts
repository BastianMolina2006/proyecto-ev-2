import { useEffect, useState } from 'react';
import { peticion } from './http';
import type { Medicamento, Servicio } from '../data/tipos';
import { medicamentosSeed } from '../data/Medicamentos';
import { serviciosSeed } from '../data/Servicios';

const URL_MEDICAMENTOS = 'http://localhost:8084/api/medicamentos';
const URL_SERVICIOS = 'http://localhost:8084/api/servicios';

// ---- Medicamentos ----
export const listarMedicamentos = () => peticion<Medicamento[]>(URL_MEDICAMENTOS, undefined, false); // público

export const crearMedicamento = (m: Medicamento) =>
  peticion<Medicamento>(URL_MEDICAMENTOS, { method: 'POST', body: JSON.stringify(m) });

export const actualizarMedicamento = (m: Medicamento) =>
  peticion<Medicamento>(`${URL_MEDICAMENTOS}/${m.codigo}`, { method: 'PUT', body: JSON.stringify(m) });

export const eliminarMedicamento = (codigo: string) =>
  peticion<void>(`${URL_MEDICAMENTOS}/${codigo}`, { method: 'DELETE' });

// ---- Servicios ----
export const listarServicios = () => peticion<Servicio[]>(URL_SERVICIOS, undefined, false); // público

export const crearServicio = (s: Servicio) =>
  peticion<Servicio>(URL_SERVICIOS, { method: 'POST', body: JSON.stringify(s) });

export const actualizarServicio = (s: Servicio) =>
  peticion<Servicio>(`${URL_SERVICIOS}/${s.codigo}`, { method: 'PUT', body: JSON.stringify(s) });

export const eliminarServicio = (codigo: string) =>
  peticion<void>(`${URL_SERVICIOS}/${codigo}`, { method: 'DELETE' });

// ---- Hooks para las páginas públicas ----
// Parten con los datos locales y los reemplazan por los de la BD cuando el microservicio responde.
export function useMedicamentos(): Medicamento[] {
  const [lista, setLista] = useState<Medicamento[]>(medicamentosSeed);
  useEffect(() => {
    listarMedicamentos().then(setLista).catch(() => {});
  }, []);
  return lista;
}

export function useServicios(): Servicio[] {
  const [lista, setLista] = useState<Servicio[]>(serviciosSeed);
  useEffect(() => {
    listarServicios().then(setLista).catch(() => {});
  }, []);
  return lista;
}
