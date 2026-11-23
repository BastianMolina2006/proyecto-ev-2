//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Registro } from '../paginas/Registro';
import { FormNuevoMed } from '../paginas/admin/FormNuevoMed';
import { registrarUsuario } from '../data/Usuarios';

test('muestra una alerta cuando faltan campos requeridos al crear un medicamento', () => {
  const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {});

  const { container } = render(
    <FormNuevoMed 
      siguienteCodigo="ME023" 
      alCrear={vi.fn()} 
      alCancelar={vi.fn()} 
    />
  );

  // 1. Intentamos enviar el formulario vacío mediante submit directo o click
  const formulario = container.querySelector('form');
  if (formulario) {
    fireEvent.submit(formulario);
  } else {
    fireEvent.click(screen.getByRole('button', { name: /crear medicamento/i }));
  }

  // 2. Verificamos que se haya ejecutado window.alert ante la falta de campos
  expect(alerta).toHaveBeenCalled();

  alerta.mockRestore();
});

test('Login muestra mensaje de error condicional ante credenciales invalidas', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));
  expect(screen.getByText(/credenciales inválidas/i)).toBeInTheDocument();
});

test('Registro muestra advertencias cuando se intenta enviar el formulario vacio', () => {
  render(
    <BrowserRouter>
      <Registro />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }));

  expect(screen.getByText(/el run es obligatorio/i)).toBeInTheDocument();
  expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
  expect(screen.getByText(/el correo electrónico es obligatorio/i)).toBeInTheDocument();
});

test('previene el registro de cuentas duplicadas con el mismo correo electronico', () => {
  localStorage.clear();
  const nuevo = {
    run: '201234567',
    tipoUsuario: 'Cliente',
    nombre: 'Carlos',
    apellidos: 'Gómez',
    correo: 'carlos.gomez@test.cl',
    clave: '123456',
    fechaNacimiento: '1998-04-12',
    region: 'Metropolitana',
    comuna: 'Conchalí',
    direccion: 'Av. Independencia 1234'
  };

  expect(registrarUsuario(nuevo)).toBe(true);
  expect(registrarUsuario(nuevo)).toBe(false); // Duplicado rechazado
});