import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../data/Usuarios';

export const Registro = () => {
  const navigate = useNavigate();

  // Estados de los campos controlados
  const [run, setRun] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Cliente');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [direccion, setDireccion] = useState('');

  // Errores específicos por campo
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const [mensajeExito, setMensajeExito] = useState('');

  const validarFormulario = () => {
    const err: { [key: string]: string } = {};

    if (!run.trim()) err.run = "El RUN es obligatorio.";
    if (!nombre.trim()) err.nombre = "El nombre es obligatorio.";
    if (!apellidos.trim()) err.apellidos = "Los apellidos son obligatorios.";
    
    if (!correo.trim()) {
      err.correo = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      err.correo = "El formato de correo no es válido.";
    }

    if (!clave.trim()) {
      err.clave = "La contraseña es obligatoria.";
    } else if (clave.length < 4 || clave.length > 10) {
      err.clave = "La contraseña debe tener entre 4 y 10 caracteres.";
    }

    if (!region) err.region = "Debes seleccionar una región.";
    if (!comuna) err.comuna = "Debes seleccionar una comuna.";
    if (!direccion.trim()) err.direccion = "La dirección es obligatoria.";

    setErrores(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const registrado = registrarUsuario({
      run,
      tipoUsuario,
      nombre,
      apellidos,
      correo,
      clave,
      fechaNacimiento,
      region,
      comuna,
      direccion
    });

    if (!registrado) {
      setErrores({ correo: "Este correo ya se encuentra registrado." });
      return;
    }

    setMensajeExito("¡Cuenta creada exitosamente! Redirigiendo...");
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 overflow-y-auto d-flex justify-content-center align-items-center py-5 px-3"
      style={{ 
        backgroundColor: '#f2f6f3', 
        zIndex: 1050 
      }}
    >
      {/* Tarjeta contenedora centrada */}
      <div 
        className="card border-0 shadow-sm p-4 p-sm-5 text-start w-100 bg-white"
        style={{ 
          maxWidth: '520px', 
          borderRadius: '16px' 
        }}
      >
        {/* Enlace volver al inicio de sesión */}
        <div className="mb-3">
          <Link 
            to="/login" 
            className="text-decoration-none text-muted small d-inline-flex align-items-center gap-1"
          >
            ← Volver al inicio de sesión
          </Link>
        </div>

        {/* Título y subtítulo */}
        <h2 className="fw-bold font-serif-vet text-dark mb-1" style={{ fontSize: '1.9rem' }}>
          Crear cuenta
        </h2>
        <p className="text-secondary small mb-4">
          Completa el formulario para registrarte en el sistema.
        </p>

        {mensajeExito && (
          <div className="alert alert-success py-2 px-3 small border-0 mb-3">
            {mensajeExito}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          
          {/* Fila 1: RUN y Tipo de Usuario */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                RUN (sin puntos ni guión)
              </label>
              <input
                type="text"
                placeholder="123456785"
                className={`form-control rounded-3 py-2 ${errores.run ? 'border-danger' : 'border-vet'}`}
                value={run}
                onChange={(e) => setRun(e.target.value)}
              />
              {errores.run && <small className="text-danger d-block mt-1">{errores.run}</small>}
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                Tipo de usuario
              </label>
              <select
                className="form-select rounded-3 py-2 border-vet text-secondary"
                value={tipoUsuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
              >
                <option value="Cliente">Cliente</option>
                <option value="Recepcionista">Recepcionista</option>
                <option value="Veterinario">Veterinario</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>
          </div>

          {/* Fila 2: Nombre y Apellidos */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="María"
                className={`form-control rounded-3 py-2 ${errores.nombre ? 'border-danger' : 'border-vet'}`}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {errores.nombre && <small className="text-danger d-block mt-1">{errores.nombre}</small>}
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                Apellidos
              </label>
              <input
                type="text"
                placeholder="González López"
                className={`form-control rounded-3 py-2 ${errores.apellidos ? 'border-danger' : 'border-vet'}`}
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
              {errores.apellidos && <small className="text-danger d-block mt-1">{errores.apellidos}</small>}
            </div>
          </div>

          {/* Correo Electrónico */}
          <div className="mb-3">
            <label className="form-label small text-secondary fw-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className={`form-control rounded-3 py-2 ${errores.correo ? 'border-danger' : 'border-vet'}`}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <small className="text-danger d-block mt-1">{errores.correo}</small>}
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label className="form-label small text-secondary fw-semibold mb-1">
              Contraseña (4-10 caracteres)
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={`form-control rounded-3 py-2 ${errores.clave ? 'border-danger' : 'border-vet'}`}
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
            {errores.clave && <small className="text-danger d-block mt-1">{errores.clave}</small>}
          </div>

          {/* Fecha de nacimiento (opcional) */}
          <div className="mb-3">
            <label className="form-label small text-secondary fw-semibold mb-1">
              Fecha de nacimiento (opcional)
            </label>
            <input
              type="date"
              className="form-control rounded-3 py-2 border-vet text-secondary"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>

          {/* Fila 3: Región y Comuna */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                Región
              </label>
              <select
                className={`form-select rounded-3 py-2 text-secondary ${errores.region ? 'border-danger' : 'border-vet'}`}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">Seleccionar región</option>
                <option value="Metropolitana">Metropolitana</option>
                <option value="O'Higgins">Libertador Bernardo O'Higgins</option>
                <option value="Valparaíso">Valparaíso</option>
              </select>
              {errores.region && <small className="text-danger d-block mt-1">{errores.region}</small>}
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary fw-semibold mb-1">
                Comuna
              </label>
              <select
                className={`form-select rounded-3 py-2 text-secondary ${errores.comuna ? 'border-danger' : 'border-vet'}`}
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
              >
                <option value="">Seleccionar comuna</option>
                <option value="Rancagua">Rancagua</option>
                <option value="Santiago">Santiago</option>
                <option value="Machalí">Machalí</option>
                <option value="Conchalí">Conchalí</option>
              </select>
              {errores.comuna && <small className="text-danger d-block mt-1">{errores.comuna}</small>}
            </div>
          </div>

          {/* Dirección */}
          <div className="mb-4">
            <label className="form-label small text-secondary fw-semibold mb-1">
              Dirección
            </label>
            <input
              type="text"
              placeholder="Av. Principal 123"
              className={`form-control rounded-3 py-2 ${errores.direccion ? 'border-danger' : 'border-vet'}`}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            {errores.direccion && <small className="text-danger d-block mt-1">{errores.direccion}</small>}
          </div>

          {/* Botón Crear cuenta */}
          <button
            type="submit"
            className="btn w-100 py-2 fw-semibold text-white rounded-3 shadow-sm"
            style={{ backgroundColor: '#2d5a43' }}
          >
            Crear cuenta
          </button>

        </form>
      </div>
    </div>
  );
};

export default Registro;