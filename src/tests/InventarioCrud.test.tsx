//@vitest-environment jsdom
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import { AdminResumen } from '../paginas/admin/AdminResumen';
import { FormNuevoMed } from '../paginas/admin/FormNuevoMed';
import { FormEditarMed } from '../paginas/admin/FormEditarMed';
import { medicamentosSeed } from '../data/Medicamentos';
import type { Medicamento } from '../data/tipos';

// CRUD - Leer (Métricas)
test('CRUD - Read: AdminResumen calcula y muestra correctamente los productos con stock bajo (<= 25)', () => {
  render(
    <BrowserRouter>
      <AdminResumen />
    </BrowserRouter>
  );

  expect(screen.getByText('Con stock bajo')).toBeInTheDocument();
  expect(screen.getByText('6')).toBeInTheDocument();
});

// 14. CRUD - Create (Formulario de alta)
test('CRUD - Create: FormNuevoMed emite el objeto creado con los datos ingresados', () => {
  vi.spyOn(window, 'alert').mockImplementation(() => {});

  const fnCrear = vi.fn();

  const { container } = render(
    <FormNuevoMed 
      siguienteCodigo="ME023" 
      alCrear={fnCrear} 
      alCancelar={vi.fn()} 
    />
  );

  // 1. Seleccionar la categoría
  const selectCategoria = screen.getByRole('combobox');
  fireEvent.change(selectCategoria, { target: { value: 'Antibióticos' } });

  // 2. Llenar los inputs, ignorando el primer input (código ME023)
  const inputs = container.querySelectorAll('input');
  inputs.forEach((input, index) => {
    // Saltamos el primer input porque es el código
    if (index === 0) return;

    if (input.type === 'number') {
      fireEvent.change(input, { target: { value: '10' } });
    } else {
      fireEvent.change(input, { target: { value: 'Dato Prueba' } });
    }
  });

  // 3. Enviar el formulario
  const formulario = container.querySelector('form');
  if (formulario) {
    fireEvent.submit(formulario);
  } else {
    fireEvent.click(screen.getByRole('button', { name: /crear medicamento/i }));
  }

  // 4. Verificamos que fnCrear se llamó con el código ME023
  expect(fnCrear).toHaveBeenCalledTimes(1);
  expect(fnCrear).toHaveBeenCalledWith(expect.objectContaining({
    codigo: 'ME023',
    categoria: 'Antibióticos'
  }));
});

// CRUD - Actualizar (Edición controlada)
test('CRUD - Update: FormEditarMed precarga los valores y emite el registro modificado', () => {
  const fnGuardar = vi.fn();
  const medOriginal: Medicamento = {
    codigo: 'ME001',
    categoria: 'Antibióticos',
    nombre: 'Amoxibay 250mg',
    principio: 'Amoxicilina',
    presentacion: 'Blíster 10 comp.',
    especie: 'Perro / Gato',
    stock: 45,
    precio: 4200
  };

  render(
    <FormEditarMed 
      medicamento={medOriginal} 
      alGuardar={fnGuardar} 
      alCancelar={vi.fn()} 
    />
  );

  const inputNombre = screen.getByDisplayValue('Amoxibay 250mg');
  fireEvent.change(inputNombre, { target: { value: 'Amoxibay Forte' } });

  fireEvent.click(screen.getByRole('button', { name: /guardar cambios/i }));

  expect(fnGuardar).toHaveBeenCalledWith(expect.objectContaining({
    codigo: 'ME001',
    nombre: 'Amoxibay Forte'
  }));
});

// CRUD - Eliminar (Filtro en memoria)
test('CRUD - Delete: eliminar un producto por codigo remueve el item y actualiza la lista', () => {
  const lista: Medicamento[] = [...medicamentosSeed];
  const codigoBorrar = 'ME001';

  const nuevaLista = lista.filter(m => m.codigo !== codigoBorrar);

  expect(nuevaLista).toHaveLength(21);
  expect(nuevaLista.find(m => m.codigo === codigoBorrar)).toBeUndefined();
});