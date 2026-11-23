import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerNoticia, formatearFecha, type NoticiaApi } from '../servicios/noticiasApi';

export default function DetalleNoticia() {
  const { id } = useParams<{ id: string }>();
  const [noticia, setNoticia] = useState<NoticiaApi | null>(null);
  const [cargando, setCargando] = useState(true);

  // GET /api/noticias/{id}
  useEffect(() => {
    if (!id) return;
    obtenerNoticia(id.trim())
      .then(setNoticia)
      .catch(() => setNoticia(null))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return <div className="container py-5 text-center text-muted">Cargando noticia...</div>;
  }

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
          <p className="text-muted small mb-4">{formatearFecha(noticia.fecha)}</p>

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
            {noticia.contenido.split(/\n\s*\n/).map((parrafo, index) => (
              <p key={index} className="text-secondary lh-base mb-3">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="bg-light p-4 rounded-4 border mb-4">
            <h6 className="fw-bold text-vet-verde mb-3">Puntos clave:</h6>
            <ul className="list-unstyled mb-0">
              {(noticia.detalles || '')
                .split('\n')
                .filter((linea) => linea.trim() !== '')
                .map((linea, idx) => {
                  const [etiqueta, ...resto] = linea.split(':');
                  return (
                    <li key={idx} className="mb-2 text-secondary small">
                      <strong className="text-dark">{etiqueta}:</strong> {resto.join(':').trim()}
                    </li>
                  );
                })}
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