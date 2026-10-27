//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardServicio from '../componentes/moleculas/CardServicio';
import { AdminClientes } from '../paginas/admin/AdminClientes';
import { FormNuevoMed } from '../paginas/admin/FormNuevoMed';
import { autenticarUsuario } from '../data/Usuarios';

test('CardServicio renderiza correctamente el titulo y subtitulo pasados por props', () => {
  const propsTest: any = {
    titulo: 'Consultas Veterinarias',
    subtitulo: 'Cotiza tu consulta medica',
    link: '/servicios'
  };

  render(
    <BrowserRouter>
      <CardServicio {...propsTest} />
    </BrowserRouter>
  );

  expect(screen.getByText('Consultas Veterinarias')).toBeInTheDocument();
  expect(screen.getByText('Cotiza tu consulta medica')).toBeInTheDocument();
});

test('el boton Cancelar en FormNuevoMed ejecuta la llamada de cierre esperada', () => {
  const fnCancelar = vi.fn();

  render(
    <FormNuevoMed 
      siguienteCodigo="ME023" 
      alCrear={vi.fn()} 
      alCancelar={fnCancelar} 
    />
  );

  fireEvent.click(screen.getByRole('button', { name: /cancelar/i }));
  expect(fnCancelar).toHaveBeenCalledTimes(1);
});

test('AdminClientes muestra la tabla con columnas de RUN y TIPO DE USUARIO', () => {
  render(
    <BrowserRouter>
      <AdminClientes />
    </BrowserRouter>
  );

  expect(screen.getByText(/clientes registrados/i)).toBeInTheDocument();
  expect(screen.getByText('RUN')).toBeInTheDocument();
  expect(screen.getByText('TIPO DE USUARIO')).toBeInTheDocument();
});

test('valida correctamente las credenciales predeterminadas del cliente demo', () => {
  const usuario = autenticarUsuario('cliente@email.com', '1234');
  expect(usuario).not.toBeNull();
  expect(usuario?.tipoUsuario).toBe('Cliente');
});