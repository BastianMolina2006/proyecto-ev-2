import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { autenticarUsuario } from '../data/Usuarios';

export const Login = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const usuario = autenticarUsuario(correo, clave);
    if (!usuario) {
      setError('Credenciales inválidas.');
      return;
    }

    if (usuario.tipoUsuario === 'Administrador') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 bg-white overflow-hidden" 
      style={{ zIndex: 1050 }}
    >
      <div className="row g-0 h-100">
        
        {/* Columna Izquierda: Imagen del perrito y tarjeta flotante abajo */}
        <div 
          className="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-end p-4 p-xl-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}
        >
          {/* Tarjeta verde inferior */}
          <div 
            className="p-4 rounded-4 text-start text-white shadow"
            style={{ backgroundColor: 'rgba(24, 78, 54, 0.95)', maxWidth: '480px' }}
          >
            <div className="d-flex align-items-center gap-3 mb-2">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center bg-white fw-bold fs-5 shadow-sm"
                style={{ width: '42px', height: '42px', color: '#184e36' }}
              >
                V
              </div>
              <div>
                <h5 className="fw-bold m-0 font-serif-vet">Veterinaria San Marcos</h5>
                <small className="text-white-50">Rancagua, Chile · Desde 2009</small>
              </div>
            </div>

            <p className="small text-white-50 mb-3" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
              Bienvenido a nuestro sistema de gestión. Aquí podrás agendar citas, revisar el historial de tu mascota y acceder a nuestros servicios.
            </p>

            <div className="row g-2">
              <div className="col-6">
                <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                  Atención canina
                </div>
              </div>
              <div className="col-6">
                <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                  Atención felina
                </div>
              </div>
              <div className="col-6">
                <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                  Vacunación
                </div>
              </div>
              <div className="col-6">
                <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                  Urgencias 24 h
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario exacto a la foto */}
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-4">
          <div style={{ maxWidth: '380px', width: '100%' }} className="text-start">
            
            <h2 className="fw-bold font-serif-vet text-vet-verde mb-1" style={{ fontSize: '2rem' }}>
              Iniciar sesión
            </h2>
            <p className="text-secondary small mb-4">
              Ingresa tus credenciales para continuar.
            </p>

            {error && <div className="alert alert-danger py-1 px-2 small mb-3">{error}</div>}

            <form onSubmit={handleSubmit} noValidate>
              
              <div className="mb-3">
                <label className="form-label small text-secondary mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control py-2 px-3 border-vet rounded-2"
                  placeholder="correo@ejemplo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label small text-secondary mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control py-2 px-3 border-vet rounded-2"
                  placeholder="••••••••"
                  value={clave}
                  onChange={(e) => setClave(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn w-100 py-2 fw-semibold text-white rounded-2 mb-3"
                style={{ backgroundColor: '#184e36' }}
              >
                Ingresar
              </button>

              <div className="text-center small text-secondary" style={{ fontSize: '0.82rem' }}>
                ¿No tienes cuenta?{' '}
                <Link to="/registro" className="text-vet-verde fw-bold text-decoration-none">
                  Regístrate aquí
                </Link>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;