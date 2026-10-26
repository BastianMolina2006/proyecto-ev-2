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