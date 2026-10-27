<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { obtenerSesionActiva, cerrarSesion, type Usuario } from '../../data/Usuarios';

function Navbar() {
  const [usuarioActivo, setUsuarioActivo] = useState<Usuario | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica la sesión cada vez que el usuario cambia de ruta
  useEffect(() => {
    setUsuarioActivo(obtenerSesionActiva());
  }, [location]);

  const handleCerrarSesion = () => {
    cerrarSesion();
    setUsuarioActivo(null);
    navigate('/');
  };

  return (
    <header className="bg-white border-bottom border-vet">
      <nav className="navbar navbar-expand-lg bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Logotipo institucional */}
=======
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white border-bottom border-vet">

      <nav className="navbar navbar-expand-lg bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
>>>>>>> Proyecto_Vet_Bastian
          <Link className="navbar-brand text-vet-verde font-serif-vet fw-bold fs-4 d-flex align-items-center gap-2 m-0" to="/">
            <span style={{ width: '13px', height: '13px', backgroundColor: '#184e36', borderRadius: '50%', display: 'inline-block' }}></span>
            Veterinaria San Marcos
          </Link>

<<<<<<< HEAD
          {/* Enlaces de navegación */}
          <div className="navbar-nav d-flex flex-row gap-4 fs-6 align-items-center">
=======
          <div className="navbar-nav d-flex flex-row gap-4 fs-6">
>>>>>>> Proyecto_Vet_Bastian
            <Link className="nav-link text-vet-verde fw-bold" to="/">Home</Link>
            <Link className="nav-link text-secondary" to="/medicamentos">Medicamentos</Link>
            <Link className="nav-link text-secondary" to="/servicios">Servicios</Link>
            <Link className="nav-link text-secondary" to="/nosotros">Nosotros</Link>
            <Link className="nav-link text-secondary" to="/noticias">Noticias</Link>
            <Link className="nav-link text-secondary" to="/contacto">Contacto</Link>
          </div>
<<<<<<< HEAD

          {/* Estado de autenticación dinámico */}
          <div className="d-flex align-items-center gap-2 small">
            {usuarioActivo ? (
              // Cuando hay sesión iniciada como Cliente o Admin
              <div className="d-flex align-items-center gap-2">
                <span className="text-vet-verde fw-bold d-flex align-items-center gap-1">
                  <span>👤</span> {usuarioActivo.nombre || usuarioActivo.tipoUsuario}
                </span>
                <span className="text-muted">|</span>
                <button
                  type="button"
                  onClick={handleCerrarSesion}
                  className="btn btn-link p-0 text-danger text-decoration-none small border-0 fw-semibold"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              // Cuando no hay sesión iniciada
              <div className="d-flex align-items-center gap-2">
                <Link to="/login" className="text-secondary text-decoration-none fw-semibold">
                  Iniciar sesión
                </Link>
                <span className="text-muted">|</span>
                <Link to="/registro" className="text-vet-verde text-decoration-none fw-semibold">
                  Registrarse
                </Link>
              </div>
            )}
          </div>

=======
>>>>>>> Proyecto_Vet_Bastian
        </div>
      </nav>
    </header>
  );
}

export default Navbar;