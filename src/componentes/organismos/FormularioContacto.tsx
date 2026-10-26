import React, { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nombreMascota: '',
    tipoMascota: 'perro',
    motivo: 'consulta',
    mensaje: '',
  });

  const [errores, setErrores] = useState({
    email: '',
    telefono: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validación en tiempo real para el correo
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value.trim() === '') {
        setErrores((prev) => ({ ...prev, email: 'El correo electrónico es obligatorio.' }));
      } else if (!emailRegex.test(value)) {
        setErrores((prev) => ({ ...prev, email: 'Formato de correo inválido (ej: usuario@dominio.com).' }));
      } else {
        setErrores((prev) => ({ ...prev, email: '' }));
      }
    }

    // Validación en tiempo real para el teléfono chileno (+569XXXXXXXX o +562XXXXXXXX)
    if (name === 'telefono') {
      const phoneRegex = /^(\+?56)?(\s?)(0|9)?([0-9]\d{7})$/;
      if (value.trim() === '') {
        setErrores((prev) => ({ ...prev, telefono: 'El teléfono es obligatorio.' }));
      } else if (!phoneRegex.test(value.replace(/\s+/g, ''))) {
        setErrores((prev) => ({ ...prev, telefono: 'Formato inválido. Use formato chileno (ej: +56912345678 o 912345678).' }));
      } else {
        setErrores((prev) => ({ ...prev, telefono: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar antes de enviar
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+?56)?(\s?)(0|9)?([0-9]\d{7})$/;

    let emailError = '';
    let phoneError = '';

    if (!emailRegex.test(formData.email)) {
      emailError = 'Ingrese un correo electrónico válido.';
    }
    if (!phoneRegex.test(formData.telefono.replace(/\s+/g, ''))) {
      phoneError = 'Ingrese un número de teléfono válido en Chile.';
    }

    if (emailError || phoneError) {
      setErrores({ email: emailError, telefono: phoneError });
      return;
    }

    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="card p-4 p-md-5 border border-vet shadow-sm bg-white text-center">
        <span className="display-4 d-block mb-3">✅</span>
        <h4 className="font-serif-vet fw-bold text-vet-verde mb-2">¡Mensaje Enviado con Éxito!</h4>
        <p className="text-secondary small mb-4">
          Gracias por contactarnos, <strong>{formData.nombre}</strong>. Nos comunicaremos contigo muy pronto.
        </p>
        <button
          onClick={() => {
            setEnviado(false);
            setFormData({
              nombre: '',
              email: '',
              telefono: '',
              nombreMascota: '',
              tipoMascota: 'perro',
              motivo: 'consulta',
              mensaje: '',
            });
            setErrores({ email: '', telefono: '' });
          }}
          className="btn btn-outline-vet btn-sm px-4 py-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="card p-4 p-md-5 border border-vet shadow-sm bg-white">
      <form onSubmit={handleSubmit} noValidate>
        <h3 className="font-serif-vet fw-bold text-vet-verde mb-4 fs-5 border-bottom pb-2">
          Datos del Cliente y Mascota
        </h3>

        <div className="row g-3">
          <div className="col-md-6 text-start">
            <label htmlFor="nombre" className="form-label text-secondary small fw-semibold">
              Nombre completo *
            </label>
            <input
              type="text"
              className="form-control form-control-sm rounded-0 border-dark"
              id="nombre"
              name="nombre"
              required
              placeholder="Ej. Juan Pérez"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 text-start">
            <label htmlFor="email" className="form-label text-secondary small fw-semibold">
              Correo electrónico *
            </label>
            <input
              type="email"
              className={`form-control form-control-sm rounded-0 border-dark ${errores.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              required
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errores.email && <div className="invalid-feedback d-block small text-danger mt-1">{errores.email}</div>}
          </div>

          <div className="col-md-6 text-start">
            <label htmlFor="telefono" className="form-label text-secondary small fw-semibold">
              Teléfono de contacto *
            </label>
            <input
              type="tel"
              className={`form-control form-control-sm rounded-0 border-dark ${errores.telefono ? 'is-invalid' : ''}`}
              id="telefono"
              name="telefono"
              required
              placeholder="+56 9 1234 5678"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errores.telefono && <div className="invalid-feedback d-block small text-danger mt-1">{errores.telefono}</div>}
          </div>

          <div className="col-md-6 text-start">
            <label htmlFor="nombreMascota" className="form-label text-secondary small fw-semibold">
              Nombre de la mascota
            </label>
            <input
              type="text"
              className="form-control form-control-sm rounded-0 border-dark"
              id="nombreMascota"
              name="nombreMascota"
              placeholder="Ej. Cachupín"
              value={formData.nombreMascota}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 text-start">
            <label htmlFor="tipoMascota" className="form-label text-secondary small fw-semibold">
              Tipo de mascota
            </label>
            <select
              className="form-select form-select-sm rounded-0 border-dark"
              id="tipoMascota"
              name="tipoMascota"
              value={formData.tipoMascota}
              onChange={handleChange}
            >
              <option value="perro">🐶 Perro</option>
              <option value="gato">🐱 Gato</option>
              <option value="ave">🦜 Ave</option>
              <option value="exotico">🐰 Exótico / Otro</option>
            </select>
          </div>

          <div className="col-md-6 text-start">
            <label htmlFor="motivo" className="form-label text-secondary small fw-semibold">
              Motivo de contacto
            </label>
            <select
              className="form-select form-select-sm rounded-0 border-dark"
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
            >
              <option value="consulta">Consulta General</option>
              <option value="cita">Agendar Cita Médica</option>
              <option value="vacunacion">Vacunación / Desparasitación</option>
              <option value="urgencia">Orientación de Urgencia</option>
            </select>
          </div>

          <div className="col-12 text-start">
            <label htmlFor="mensaje" className="form-label text-secondary small fw-semibold">
              Mensaje o detalle *
            </label>
            <textarea
              className="form-control form-control-sm rounded-0 border-dark"
              id="mensaje"
              name="mensaje"
              rows={3}
              required
              placeholder="Describe brevemente el motivo de tu consulta..."
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-12 mt-4">
            <button
              type="submit"
              className="btn btn-outline-vet w-100 py-2 fw-bold text-uppercase small"
            >
              ✉️ Enviar Consulta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}