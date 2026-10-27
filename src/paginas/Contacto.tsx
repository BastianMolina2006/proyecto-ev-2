import { Link } from 'react-router-dom';
import FormularioContacto from '../componentes/organismos/FormularioContacto';

function Contacto() {
  return (
    <div className="container py-3">
      {/* Barra superior idéntica a Inicio */}
      <div className="d-flex justify-content-start gap-1 mb-2" style={{ fontSize: '13px', color: '#184e36' }}>
        <Link to="/login" className="text-decoration-none" style={{ color: '#184e36' }}>
          Iniciar sesión
        </Link>
        <span className="text-muted">|</span>
        <Link to="#" className="text-decoration-none" style={{ color: '#184e36' }}>
          Registrar usuario
        </Link>
      </div>

      <div className="container py-4">
        {/* Banner Superior */}
        <div className="row align-items-center bg-vet-claro p-4 p-md-5 rounded border border-vet mb-5">
          <div className="col-md-6 text-start">
            <h1 className="font-serif-vet fw-bold text-vet-verde mb-3 display-6">
              CONTACTO & CITAS
            </h1>
            <p className="text-secondary small mb-4" style={{ maxWidth: '420px', lineHeight: '1.6' }}>
              ¿Tienes dudas sobre nuestros servicios o deseas agendar una atención para tu mascota? Escríbenos y nuestro equipo te responderá a la brevedad.
            </p>
            <a href="#formulario" className="btn btn-outline-vet btn-sm px-3 py-2">
              ↓ Ir al formulario
            </a>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div className="p-1 bg-white border border-dark d-inline-block shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=650&q=80" 
                alt="Atención médica veterinaria" 
                className="img-fluid"
                style={{ maxHeight: '230px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Sección del Formulario e Información */}
        <div id="formulario" className="row g-4 mb-5">
          <div className="col-lg-7">
            <FormularioContacto />
          </div>

          <div className="col-lg-5">
            <div className="card p-4 h-100 border border-vet shadow-sm bg-vet-claro d-flex flex-column justify-content-between">
              <div>
                <h3 className="font-serif-vet fw-bold text-vet-verde mb-3 fs-5 border-bottom pb-2 text-start">
                  Información de Atención
                </h3>

                <div className="mb-3 text-start">
                  <div className="fs-4 mb-1">📍</div>
                  <h6 className="font-serif-vet fw-bold text-vet-verde small mb-0">Ubicación</h6>
                  <p className="text-secondary small m-0">Av. San Marcos 1234, Santiago, Chile</p>
                </div>

                <div className="mb-3 text-start">
                  <div className="fs-4 mb-1">📞</div>
                  <h6 className="font-serif-vet fw-bold text-vet-verde small mb-0">Teléfonos</h6>
                  <p className="text-secondary small m-0">+56 2 2345 6789 / +56 9 8765 4321</p>
                </div>

                <div className="mb-3 text-start">
                  <div className="fs-4 mb-1">⏰</div>
                  <h6 className="font-serif-vet fw-bold text-vet-verde small mb-0">Horario de Atención</h6>
                  <p className="text-secondary small m-0">Lunes a Viernes: 09:00 - 19:00 hrs</p>
                  <p className="text-secondary small m-0">Sábados: 10:00 - 14:00 hrs</p>
                </div>
              </div>

              <div className="p-3 bg-white border border-dark text-center mt-3 shadow-sm">
                <p className="text-secondary small m-0 font-italic">
                  🐾 "Atención médica integral con la calidad y dedicación que tu mascota merece."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Inferior estilo Inicio */}
        <div className="bg-vet-verde text-white p-4 p-md-5 rounded d-flex flex-column flex-md-row justify-content-between align-items-center shadow">
          <div className="text-start mb-3 mb-md-0">
            <h3 className="font-serif-vet fw-bold mb-1">
              ¿Quieres revisar nuestros servicios?
            </h3>
            <p className="text-light small m-0 opacity-75">
              Descubre nuestras opciones de consultas, vacunas, exámenes y cirugías en la página principal.
            </p>
          </div>
          <Link to="/" className="btn btn-blanco-vet px-4 py-2 text-decoration-none">
            🏠 Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contacto;