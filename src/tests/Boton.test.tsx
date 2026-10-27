//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardServicio from '../componentes/moleculas/CardServicio';
import { AdminClientes } from '../paginas/admin/AdminClientes';
import { FormNuevoMed } from '../paginas/admin/FormNuevoMed';

test('CardServicio renderiza correctamente el titulo y subtitulo pasados por props', () => {
  render(
    <BrowserRouter>
      <CardServicio 
        titulo="Consultas Veterinarias" 
        subtitulo="Cotiza tu consulta medica" 
        link="/servicios" 
      />
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