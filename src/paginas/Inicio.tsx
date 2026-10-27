import { Link } from 'react-router-dom';
import CardServicio from '../componentes/moleculas/CardServicio';

function Inicio() {
  const servicios = [
<<<<<<< HEAD
    { titulo: "Consultas Veterinarias", subtitulo: "Cotiza tu consulta", precio: "$10.000 - $25.000", icono: "/img/consulta.jpg",ruta: "/servicios/categoria/consultas" },
    { titulo: "Vacunas", subtitulo: "Cotiza tu vacuna", precio: "$10.000 - $25.000", icono: "/img/vacuna.jpeg",ruta: "/servicios/categoria/vacunacion" },
    { titulo: "Cirugías", subtitulo: "Cotiza tu cirugía", precio: "$10.000 - $25.000", icono: "/img/cirugia.jpg",ruta: "/servicios/categoria/cirugia" },
    { titulo: "Exámenes", subtitulo: "Cotiza tu examen", precio: "$10.000 - $25.000", icono: "/img/examenes.jpg",ruta: "/servicios/categoria/examenes" }
=======
    { titulo: "Consultas Veterinarias", subtitulo: "Cotiza tu consulta", precio: "$10.000 - $25.000", icono: "🩺" },
    { titulo: "Vacunas", subtitulo: "Cotiza tu vacuna", precio: "$10.000 - $25.000", icono: "💉" },
    { titulo: "Cirugías", subtitulo: "Cotiza tu cirugía", precio: "$10.000 - $25.000", icono: "✂️" },
    { titulo: "Exámenes", subtitulo: "Cotiza tu examen", precio: "$10.000 - $25.000", icono: "🔬" }
>>>>>>> Proyecto_Vet_Bastian
  ];

  return (
    <div className="container py-3">
<<<<<<< HEAD
=======
      <div className="d-flex justify-content-asend gap-1 mb-2" style={{ fontSize: '13px', color: '#184e36' }}>
        <Link to="/login" className="text-decoration-none" style={{ color: '#184e36' }}>
          Iniciar sesión
        </Link>
        <span className="text-muted">|</span>
        <Link to="#" className="text-decoration-none" style={{ color: '#184e36' }}>
          Registrar usuario
        </Link>
        </div>
>>>>>>> Proyecto_Vet_Bastian

    <div className="container py-4">
      <div className="row align-items-center bg-vet-claro p-4 p-md-5 rounded border border-vet mb-5">
        <div className="col-md-6 text-start">
          <h1 className="font-serif-vet fw-bold text-vet-verde mb-3 display-6">
            TIENDA ONLINE
          </h1>
          <p className="text-secondary small mb-4" style={{ maxWidth: '420px', lineHeight: '1.6' }}>
            Encuentra el mejor servicio, medicamentos y suplementos para el cuidado y bienestar integral de tus mascotas. ¡Calidad garantizada!
          </p>
<<<<<<< HEAD
          <a href="/servicios" className="btn btn-outline-vet btn-sm px-3 py-2">
=======
          <a href="#servicios" className="btn btn-outline-vet btn-sm px-3 py-2">
>>>>>>> Proyecto_Vet_Bastian
            ↓ Ver servicios
          </a>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <div className="p-1 bg-white border border-dark d-inline-block shadow-sm">
            <img 
<<<<<<< HEAD
              src="/img/tienda.avif" 
=======
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=650&q=80" 
>>>>>>> Proyecto_Vet_Bastian
              alt="Veterinaria con mascotas" 
              className="img-fluid"
              style={{ maxHeight: '230px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div id="servicios" className="row g-4 mb-5">
=======
      <div id="servicios" className="row g-3 mb-5">
>>>>>>> Proyecto_Vet_Bastian
        {servicios.map((s, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <CardServicio {...s} />
          </div>
        ))}
      </div>

      <h2 className="font-serif-vet text-vet-verde fw-bold text-center mb-4">
        ¿Por qué elegirnos?
      </h2>
      <div className="row g-4 mb-5 text-center">
        <div className="col-md-4">
          <div className="card p-4 h-100 border border-vet shadow-sm">
            <div className="fs-2 mb-2">🕒</div>
            <h5 className="font-serif-vet fw-bold text-vet-verde">Urgencias 24 horas</h5>
            <p className="text-secondary small m-0">
              Atención inmediata todos los días del año para cuando tu mascota más lo necesita.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 border border-vet shadow-sm">
            <div className="fs-2 mb-2">🏅</div>
            <h5 className="font-serif-vet fw-bold text-vet-verde">Equipo profesional</h5>
            <p className="text-secondary small m-0">
              Médicos veterinarios con experiencia en medicina preventiva, cirugía y diagnóstico.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 border border-vet shadow-sm">
            <div className="fs-2 mb-2">📅</div>
            <h5 className="font-serif-vet fw-bold text-vet-verde">Reserva en línea</h5>
            <p className="text-secondary small m-0">
              Agenda tu hora desde el sitio sin llamadas ni esperas, en menos de un minuto.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-vet-verde text-white p-4 p-md-5 rounded d-flex flex-column flex-md-row justify-content-between align-items-center shadow">
        <div className="text-start mb-3 mb-md-0">
          <h3 className="font-serif-vet fw-bold mb-1">
            ¿Tienes dudas o necesitas atención especial?
          </h3>
          <p className="text-light small m-0 opacity-75">
            Escríbenos a través de nuestro formulario de contacto y te responderemos a la brevedad.
          </p>
        </div>
        <Link to="/contacto" className="btn btn-blanco-vet px-4 py-2 text-decoration-none">
          ✉️ Contáctanos
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Inicio;