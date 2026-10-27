import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface NoticiaInfo {
  id: string;
  titulo: string;
  categoria: string;
  fecha: string;
  imagen: string;
  subtitulo: string;
  parrafos: string[];
  detallesExtra: { etiqueta: string; valor: string }[];
}

const NOTICIAS_PAGINAS: Record<string, NoticiaInfo> = {
  "1": {
    id: "1",
    titulo: "Campaña de Vacunación Antirrábica en la Comuna",
    categoria: "Salud Pública",
    fecha: "24 de Octubre, 2026",
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    subtitulo: "Se abren nuevos puntos de atención veterinaria gratuita para perros y gatos.",
    parrafos: [
      "Esta semana iniciamos una nueva fecha de vacunación antirrábica e implantación de microchips en conjunto con el equipo municipal. La idea es facilitar el acceso a la atención básica para todos los vecinos que necesiten al día los controles de sus mascotas.",
      "La rabia es una enfermedad grave pero totalmente prevenible si mantenemos las vacunas al día. La dosis debe reforzarse una vez al año, tanto en perros como en gatos, sin importar si salen poco de casa.",
      "Atenderemos por orden de llegada. Les pedimos llevar a los perros con correa y a los gatos en su caja de transporte para evitar escapes o incidentes durante la espera."
    ],
    detallesExtra: [
      { etiqueta: "Ubicación", valor: "Plaza de Armas y centros comunitarios" },
      { etiqueta: "Horario", valor: "Lunes a viernes de 09:00 a 14:00 hrs" },
      { etiqueta: "Requisitos", valor: "Mascotas mayores a 2 meses y carnet de vacunación anterior si lo tienen" }
    ]
  },
  "2": {
    id: "2",
    titulo: "Microchip en Mascotas: Qué es y Cómo Funciona",
    categoria: "Tenencia Responsable",
    fecha: "18 de Octubre, 2026",
    imagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    subtitulo: "Guía rápida sobre la implantación del dispositivo y el registro obligatorio.",
    parrafos: [
      "El microchip es un pequeño dispositivo electrónico que se aplica debajo de la piel de la mascota. El procedimiento dura solo unos segundos y no requiere anestesia ni cuidados especiales posteriores.",
      "A diferencia de lo que se cree, el chip no funciona como un GPS en tiempo real. Lo que contiene es un número único de 15 dígitos que se lee con un escáner en cualquier veterinaria o clínica municipal.",
      "Una vez puesto el chip, es fundamental completar el registro en la plataforma nacional con los datos del tutor. Sin ese paso, el número del chip no queda asociado a nadie en caso de extravío."
    ],
    detallesExtra: [
      { etiqueta: "Procedimiento", valor: "Aplicación subcutánea en consulta" },
      { etiqueta: "Obligatoriedad", valor: "Exigido por la Ley de Tenencia Responsable" },
      { etiqueta: "Incluye", valor: "Inscripción en la plataforma oficial" }
    ]
  },
  "3": {
    id: "3",
    titulo: "Control de Peso y Alimentación en Mascotas",
    categoria: "Nutrición",
    fecha: "10 de Octubre, 2026",
    imagen: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
    subtitulo: "Recomendaciones prácticas para prevenir la obesidad en perros y gatos.",
    parrafos: [
      "El sobrepeso en animales es un problema cada vez más frecuente que suele pasar desapercibido. A largo plazo, los kilos de más generan desgaste en las articulaciones y aumentan el riesgo de diabetes o problemas cardíacos.",
      "La causa más común suele ser la falta de medición en las porciones diarias y el exceso de premios o comida casera entre horarios. Medir la ración con un vaso dosificador o balanza marca una gran diferencia.",
      "Si notas que tu mascota ha subido de peso o le cuesta moverse con fluidez, lo ideal es realizar una evaluación nutricional para ajustar la dieta según su edad, nivel de actividad y estado de salud."
    ],
    detallesExtra: [
      { etiqueta: "Evaluación", valor: "Revisión de peso y condición corporal en consulta" },
      { etiqueta: "Recomendación", valor: "Uso de alimentos de prescripción o bajo en calorías" },
      { etiqueta: "Seguimiento", valor: "Controles periódicos cada 30 días" }
    ]
  }
};

export default function DetalleNoticia() {
  const { id } = useParams<{ id: string }>();
  const noticiaId = id ? String(id).trim() : "";
  const noticia = NOTICIAS_PAGINAS[noticiaId];

  if (!noticia) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold text-danger">Página no encontrada</h3>
        <p className="text-muted mb-4">No encontramos la noticia que estás buscando.</p>
        <Link to="/noticias" className="btn btn-outline-vet">
          Volver a noticias
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-start">
          <div className="mb-4">
            <Link to="/noticias" className="text-decoration-none text-muted small fw-bold">
              ← Volver a Noticias
            </Link>
          </div>

          <span className="badge bg-vet-verde mb-2">{noticia.categoria}</span>
          <h1 className="fw-bold text-vet-verde font-serif-vet mb-2">
            {noticia.titulo}
          </h1>
          <p className="text-muted small mb-4">{noticia.fecha}</p>

          <div className="mb-4 rounded-4 overflow-hidden shadow-sm">
            <img 
              src={noticia.imagen} 
              alt={noticia.titulo} 
              className="w-100 object-fit-cover" 
              style={{ maxHeight: '380px' }} 
            />
          </div>

          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h5 className="fw-bold text-vet-verde mb-3">{noticia.subtitulo}</h5>
            {noticia.parrafos.map((parrafo, index) => (
              <p key={index} className="text-secondary lh-base mb-3">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="bg-light p-4 rounded-4 border mb-4">
            <h6 className="fw-bold text-vet-verde mb-3">Puntos clave:</h6>
            <ul className="list-unstyled mb-0">
              {noticia.detallesExtra.map((detalle, idx) => (
                <li key={idx} className="mb-2 text-secondary small">
                  <strong className="text-dark">{detalle.etiqueta}:</strong> {detalle.valor}
                </li>
              ))}
            </ul>
        </div>

        <div className="text-start">
            <Link to="/noticias" className="btn btn-outline-vet btn-sm">
            Volver al listado
            </Link>
        </div>
        </div>
    </div>
    </div>
);
}