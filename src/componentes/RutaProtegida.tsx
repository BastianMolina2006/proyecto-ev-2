import { Navigate, Outlet } from 'react-router-dom';
import { obtenerSesionActiva } from '../data/Usuarios';

interface RutaProtegidaProps {
  rolPermitido: 'Administrador' | 'Cliente' | 'Veterinario' | 'Recepcionista';
}

// Protege un grupo de rutas según el rol del usuario con sesión iniciada.
// - Sin sesión: va al login.
// - Con sesión pero otro rol: vuelve al inicio.
// - Rol correcto: muestra la página.
export default function RutaProtegida({ rolPermitido }: RutaProtegidaProps) {
  const usuario = obtenerSesionActiva();

  if (!usuario) return <Navigate to="/login" replace />;
  if (usuario.tipoUsuario !== rolPermitido) return <Navigate to="/" replace />;

  return <Outlet />;
}
