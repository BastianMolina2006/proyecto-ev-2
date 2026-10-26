import { useParams, Link, useNavigate } from 'react-router-dom';
import { medicamentosSeed } from '../data/Medicamentos';

export const DetalleMedicamento = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const navigate = useNavigate();

  // Buscar el medicamento en el seed por su código (ej: ME001)
  const medicamento = medicamentosSeed.find(
    (m) => m.codigo.toUpperCase() === codigo?.toUpperCase()
  );

  if (!medicamento) {
    return (
      <div className="container py-5 text-center">
        <button onClick={() => navigate(-1)} className="btn btn-sm btn-vet-outline mb-3">
          ← Volver
        </button>
        <div className="alert alert-warning border-vet">
          El medicamento con código <strong>{codigo}</strong> no fue encontrado.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-3">
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small text-muted mb-3">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/medicamentos" className="text-decoration-none text-muted">Medicamentos</Link>
          </li>
          <li className="breadcrumb-item">
            <Link 
              to={`/medicamentos/categoria/${medicamento.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="text-decoration-none text-muted"
            >
              {medicamento.categoria}
            </Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            {medicamento.nombre}
          </li>
        </ol>
      </nav>

 
      <div className="text-start mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-sm btn-vet-outline px-3 py-1"
        >
          ← Volver a Productos
        </button>
      </div>

    
      <div className="card p-4 p-md-5 border-vet shadow-sm rounded-4 text-start bg-white">
        <div className="row">
          {/* Columna derecha: Detalles del Medicamento */}
          <div className="col-12 col-md-8 offset-md-4">
            
            
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="text-muted fw-semibold small">{medicamento.codigo}</span>
              <span className="badge bg-vet-claro text-vet-verde border-vet fw-semibold px-2 py-1">
                {medicamento.categoria}
              </span>
            </div>

           
            <h1 className="fw-bold font-serif-vet display-6 mb-1 text-dark">
              {medicamento.nombre}
            </h1>
            <p className="text-secondary small mb-4">
              Especie indicada: <span className="fw-semibold text-dark">{medicamento.especie}</span>
            </p>

            
            <div className="mb-4">
              <small className="text-secondary d-block">Precio unitario:</small>
              <span className="fs-5 fw-bold text-dark">
                ${medicamento.precio.toLocaleString('es-CL')} CLP
              </span>
            </div>

            
            <h5 className="fw-bold text-dark font-serif-vet mb-3 pt-2">
              Especificaciones del Producto
            </h5>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <small className="text-secondary d-block">Principio Activo</small>
                <strong className="text-dark fs-6">{medicamento.principio}</strong>
              </div>
              <div className="col-6">
                <small className="text-secondary d-block">Presentación</small>
                <strong className="text-dark fs-6">{medicamento.presentacion}</strong>
              </div>
            </div>

            
            <div>
              <small className="text-secondary d-block mb-1">Disponibilidad en clínica</small>
              <span 
                className="badge bg-vet-claro text-vet-verde border-vet px-3 py-2 fw-bold"
                style={{ fontSize: '13px' }}
              >
                {medicamento.stock} unidades en stock
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleMedicamento;