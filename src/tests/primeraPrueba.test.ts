//@vitest-environment jsdom
import { test, expect } from 'vitest';
import { medicamentosSeed } from '../data/Medicamentos';
import { serviciosSeed } from '../data/Servicios';


test('verifica que la lista de medicamentos cargue los 22 productos iniciales', () => {
  expect(medicamentosSeed).toHaveLength(22);
  expect(medicamentosSeed[0].codigo).toBe('ME001');
});

test('verifica que el catalogo de servicios contenga 31 prestaciones registradas', () => {
  expect(serviciosSeed).toHaveLength(31);
  expect(serviciosSeed[0].codigo).toBe('SV001');
});

test('filtra correctamente medicamentos por coincidencia en el principio activo', () => {
  const busqueda = 'Amoxicilina'.toLowerCase();
  const filtrados = medicamentosSeed.filter(m => 
    m.nombre.toLowerCase().includes(busqueda) || 
    m.principio.toLowerCase().includes(busqueda)
  );

  expect(filtrados.length).toBeGreaterThan(0);
  expect(filtrados.every(m => m.principio.toLowerCase().includes('amoxicilina'))).toBe(true);
});

test('filtra correctamente para retornar solo los productos de la categoria Dermatologia', () => {
  const categoria = 'Dermatología';
  const filtrados = medicamentosSeed.filter(m => m.categoria === categoria);

  expect(filtrados.length).toBe(3);
  filtrados.forEach(m => expect(m.categoria).toBe('Dermatología'));
});