import React from 'react';
import { Link } from 'react-router-dom';

interface CardCategoriaProps {
  nombre: string;
  slug: string;
  svgIcon: React.ReactNode;
}

export const CardCategoria: React.FC<CardCategoriaProps> = ({ nombre, slug, svgIcon }) => {
  return (
    <Link to={`/medicamentos/categoria/${slug}`} className="text-decoration-none">
      <div className="card h-100 text-center border-vet shadow-sm rounded-3 overflow-hidden">
        <div className="bg-vet-claro d-flex align-items-center justify-content-center py-4" style={{ minHeight: '130px' }}>
          <div className="text-vet-verde" style={{ width: '50px', height: '50px' }}>
            {svgIcon}
          </div>
        </div>
        <div className="card-body bg-white py-3">
          <h5 className="card-title fw-bold text-vet-verde m-0 fs-6">
            {nombre}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default CardCategoria;