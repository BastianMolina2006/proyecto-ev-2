export interface Medicamento {
  codigo: string;
  categoria: string;
  nombre: string;
  principio: string;
  presentacion: string;
  especie: string;
  stock: number;
  precio: number;
}

export interface CategoriaInfo {
  nombre: string;
  slug: string;
  icono: string;
}

export interface Servicio {
  codigo: string;
  categoria: string;
  nombre: string;
  especie: string;
  duracion: string;
  precio: number;
  observaciones: string;
}