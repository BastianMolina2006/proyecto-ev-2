import { useParams, Link, useNavigate } from 'react-router-dom';
import { serviciosSeed } from '../data/Servicios';

export const DetalleServicio = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const navigate = useNavigate();

  const servicio = serviciosSeed.find(
    (s) => s.codigo.toUpperCase() === codigo?.toUpperCase()
  );

  if (!servicio) {
    return (
      <div className="container py-5 text-center">
        <button onClick={() => navigate(-1)} className="btn btn-sm btn-vet-outline mb-3">
          ← Volver
        </button>
        <div className="alert alert-warning border-vet">
          El servicio con código <strong>{codigo}</strong> no fue encontrado.
        </div>
      </div>
    );
  }

  
  const categoriaSlug = servicio.categoria
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    <div className="container py-3">
        
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small text-muted mb-3">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/servicios" className="text-decoration-none text-muted">Servicios</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/servicios/categoria/${categoriaSlug}`} className="text-decoration-none text-muted">
              {servicio.categoria}
            </Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            {servicio.nombre}
          </li>
        </ol>
      </nav>


      <div className="text-start mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-sm btn-vet-outline px-3 py-1"
        >
          ← Volver a servicios
        </button>
      </div>


      <div className="card p-4 p-md-5 border-vet shadow-sm rounded-4 text-start bg-white">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            
            
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="text-muted fw-semibold small">{servicio.codigo}</span>
              <span className="badge bg-vet-claro text-vet-verde border-vet fw-semibold px-2 py-1">
                {servicio.categoria}
              </span>
            </div>

            {/* Título y Especie */}
            <h1 className="fw-bold font-serif-vet display-6 mb-1 text-dark">
              {servicio.nombre}
            </h1>
            <p className="text-secondary small mb-4">
              Especie indicada: <span className="fw-semibold text-dark">{servicio.especie}</span>
            </p>


            <div className="mb-4">
              <small className="text-secondary d-block">Tarifa del procedimiento:</small>
              <span className="fs-5 fw-bold text-dark">
                ${servicio.precio.toLocaleString('es-CL')} CLP
              </span>
            </div>


            <h5 className="fw-bold text-dark font-serif-vet mb-3 pt-2 border-bottom pb-2">
              Información Clínica y Condiciones
            </h5>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <small className="text-secondary d-block">Duración estimada</small>
                <strong className="text-dark fs-6">{servicio.duracion}</strong>
              </div>
              <div className="col-6">
                <small className="text-secondary d-block">Especie admitida</small>
                <strong className="text-dark fs-6">{servicio.especie}</strong>
              </div>
            </div>

            <div>
              <small className="text-secondary d-block mb-2">Observaciones y requisitos</small>
              <div 
                className="p-3 rounded-3" 
                style={{ backgroundColor: '#f8faf9', border: '1px solid #e2ece6' }}
              >
                <p className="m-0 text-dark small">
                  {servicio.observaciones}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleServicio;