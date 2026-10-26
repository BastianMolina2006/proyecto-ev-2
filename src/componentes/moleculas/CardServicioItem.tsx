import React from 'react';
import { Link } from 'react-router-dom';
import type { Servicio } from '../../data/tipos';

interface Props {
  servicio: Servicio;
}

export const CardServicioItem: React.FC<Props> = ({ servicio }) => {
  return (
    <div className="card h-100 border-vet p-3 text-start shadow-sm rounded-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="badge bg-vet-claro text-vet-verde border-vet fw-semibold px-2 py-1">
          {servicio.especie}
        </span>
        <small className="text-secondary fw-semibold">{servicio.codigo}</small>
      </div>

      <h5 className="fw-bold my-1 font-serif-vet text-dark">
        {servicio.nombre}
      </h5>

      <p className="small text-muted mb-1">
        <strong className="text-secondary">Duración:</strong> {servicio.duracion}
      </p>
      <p className="small text-muted mb-3 text-truncate" title={servicio.observaciones}>
        <strong className="text-secondary">Obs:</strong> {servicio.observaciones}
      </p>

      <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top border-vet">
        <span className="fs-5 fw-bold text-vet-verde">
          ${servicio.precio.toLocaleString('es-CL')}
        </span>
        <Link 
          to={`/servicios/${servicio.codigo}`} 
          className="btn btn-sm btn-vet-outline rounded-pill px-3"
        >
          Ver detalle →
        </Link>
      </div>
    </div>
  );
};

export default CardServicioItem;