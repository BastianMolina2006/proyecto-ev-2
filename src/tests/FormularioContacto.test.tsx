//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Registro } from '../paginas/Registro';
import { FormNuevoMed } from '../paginas/admin/FormNuevoMed';
import { registrarUsuario } from '../data/usuarios';

test('muestra una alerta cuando faltan campos requeridos al crear un medicamento', () => {
  const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {});

  render(
    <FormNuevoMed 
      siguienteCodigo="" 
      alCrear={vi.fn()} 
      alCancelar={vi.fn()} 
    />
  );

  fireEvent.click(screen.getByRole('button', { name: /crear medicamento/i }));

  expect(alerta).toHaveBeenCalledWith('Por favor completa todos los campos requeridos.');
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