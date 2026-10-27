import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../data/Usuarios';

export const AdminLayout = () => {
  const navigate = useNavigate();

  const handleCerrar = () => {
    cerrarSesion();
    navigate('/login');
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 bg-light d-flex overflow-hidden" 
      style={{ zIndex: 1050 }}
    >
      {/* Sidebar fijo */}
      <aside 
        className="d-flex flex-column justify-content-between p-3 text-white"
        style={{ backgroundColor: '#133e2b', width: '250px', minHeight: '100vh', flexShrink: 0 }}
      >
        <div>
          {/* Logo y Encabezado */}
          <div className="d-flex align-items-center gap-2 mb-4 px-2 pt-2 border-bottom border-success pb-3">
            <span 
              className="rounded-circle bg-white" 
              style={{ width: '12px', height: '12px', display: 'inline-block' }}
            ></span>
            <div className="text-start">
              <h6 className="fw-bold m-0 font-serif-vet" style={{ fontSize: '0.95rem' }}>Veterinaria San Marcos</h6>
              <small className="text-white-50" style={{ fontSize: '0.75rem' }}>Panel de administración</small>
            </div>
          </div>

          {/* Navegación por Rutas */}
          <div className="d-flex flex-column gap-1 text-start">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `btn text-start d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-0 fw-semibold ${
                  isActive ? 'bg-white text-success shadow-sm' : 'text-white-50 bg-transparent'
                }`
              }
            >
              <span>📊</span> Resumen
            </NavLink>

            <NavLink
              to="/admin/inventario"
              className={({ isActive }) =>
                `btn text-start d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-0 fw-semibold ${
                  isActive ? 'bg-white text-success shadow-sm' : 'text-white-50 bg-transparent'
                }`
              }
            >
              <span>📦</span> Inventario
            </NavLink>

            <NavLink
              to="/admin/clientes"
              className={({ isActive }) =>
                `btn text-start d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-0 fw-semibold ${
                  isActive ? 'bg-white text-success shadow-sm' : 'text-white-50 bg-transparent'
                }`
              }
            >
              <span>👥</span> Clientes
            </NavLink>
          </div>
        </div>

        {/* Pie de navegación */}
        <div className="text-start border-top border-success pt-3 px-2 d-flex flex-column gap-2">
          <small className="d-flex align-items-center gap-2 text-white fw-semibold mb-2">
            <span>👤</span> Administrador
          </small>
          
          <Link to="/" className="text-decoration-none text-white-50 small d-flex align-items-center gap-2">
            <span>↗</span> Ver sitio público
          </Link>
          
          <button 
            onClick={handleCerrar} 
            className="btn btn-link p-0 text-decoration-none text-white-50 small d-flex align-items-center gap-2 border-0"
          >
            <span>🚪</span> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenedor dinámico */}
      <main className="flex-grow-1 p-4 p-md-5 overflow-y-auto text-start bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;