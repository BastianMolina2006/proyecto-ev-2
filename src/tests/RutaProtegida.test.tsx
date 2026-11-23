//@vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RutaProtegida from '../componentes/RutaProtegida';

const usuarioDemo = (tipoUsuario: string) =>
  JSON.stringify({ run: '1', tipoUsuario, nombre: 'Demo', apellidos: 'Demo', correo: 'demo@email.com' });

const renderizarAdmin = () =>
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route element={<RutaProtegida rolPermitido="Administrador" />}>
          <Route path="/admin" element={<h1>Panel de administración</h1>} />
        </Route>
        <Route path="/login" element={<h1>Página de login</h1>} />
        <Route path="/" element={<h1>Página de inicio</h1>} />
      </Routes>
    </MemoryRouter>
  );

beforeEach(() => localStorage.clear());

test('RutaProtegida envía al login a un visitante sin sesión', () => {
  renderizarAdmin();
  expect(screen.getByText('Página de login')).toBeInTheDocument();
});

test('RutaProtegida impide que un Cliente entre al panel de administración', () => {
  localStorage.setItem('vet_sesion_activa', usuarioDemo('Cliente'));
  renderizarAdmin();
  expect(screen.getByText('Página de inicio')).toBeInTheDocument();
  expect(screen.queryByText('Panel de administración')).not.toBeInTheDocument();
});

test('RutaProtegida permite entrar al panel a un Administrador', () => {
  localStorage.setItem('vet_sesion_activa', usuarioDemo('Administrador'));
  renderizarAdmin();
  expect(screen.getByText('Panel de administración')).toBeInTheDocument();
});
