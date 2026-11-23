import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarNoticias, formatearFecha, type NoticiaApi } from '../servicios/noticiasApi';

export default function Noticias() {
  const [busqueda, setBusqueda] = useState('');
  const [noticias, setNoticias] = useState<NoticiaApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // GET /api/noticias
  useEffect(() => {
    listarNoticias()
      .then(setNoticias)
      .catch((e: Error) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  const noticiasFiltradas = noticias.filter(noticia =>
    noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    noticia.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold text-vet-verde m-0 font-serif-vet">Noticias y Novedades Animales</h2>
          <p className="text-muted m-0">Información oficial y artículos de interés veterinario.</p>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control border-vet"
            placeholder="Buscar por título o categoría..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {noticiasFiltradas.length > 0 ? (
          noticiasFiltradas.map(noticia => (
            <div key={noticia.id} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-vet-verde mb-2">{noticia.categoria}</span>
                  <h5 className="card-title fw-bold text-vet-verde">{noticia.titulo}</h5>
                  <h6 className="card-subtitle mb-2 text-muted small">{formatearFecha(noticia.fecha)}</h6>
                  <p className="card-text text-secondary mt-3">{noticia.resumen}</p>
                </div>
                <div className="mt-3">
                  <Link
                    to={`/noticias/${noticia.id}`}
                    className="btn btn-sm btn-outline-vet w-100"
                  >
                    Leer noticia completa
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5 text-muted">
            {cargando
              ? 'Cargando noticias...'
              : error || 'No se encontraron noticias que coincidan con la búsqueda.'}
          </div>
        )}
      </div>
    </div>
  );
}