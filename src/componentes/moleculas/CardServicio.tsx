<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

=======
>>>>>>> Proyecto_Vet_Bastian
interface CardProps {
  titulo: string;
  subtitulo: string;
  precio: string;
  icono: string;
<<<<<<< HEAD
  ruta?: string;
}

function CardServicio({ titulo, subtitulo, precio, icono, ruta = "/servicios" }: CardProps) {
  return (
    <Link to={ruta} className="text-decoration-none text-reset">
      <div 
        className="card h-100 shadow-sm border border-vet overflow-hidden transition-all"
        style={{ cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        
        <div style={{ height: '140px', backgroundColor: '#edf4f0' }}>
          <img 
            src={icono} 
            alt={titulo} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block'
            }} 
          />
        </div>

        
        <div className="card-body d-flex justify-content-between align-items-end p-3">
          <div className="text-start">
            <h6 className="card-title text-vet-verde fw-bold mb-1 fs-6">{titulo}</h6>
            <small className="text-muted">{subtitulo}</small>
          </div>
          <span className="fw-bold text-dark small">{precio}</span>
        </div>
      </div>
    </Link>
=======
}

function CardServicio({ titulo, subtitulo, precio, icono }: CardProps) {
  return (
    <div className="card text-center h-100 shadow-sm border border-vet">
      <div className="py-4 fs-1" style={{ backgroundColor: '#edf4f0' }}>
        {icono}
      </div>
      <div className="card-body d-flex justify-content-between align-items-end p-3">
        <div className="text-start">
          <h6 className="card-title text-vet-verde fw-bold mb-1 fs-6">{titulo}</h6>
          <small className="text-muted">{subtitulo}</small>
        </div>
        <span className="fw-bold text-dark small">{precio}</span>
      </div>
    </div>
>>>>>>> Proyecto_Vet_Bastian
  );
}

export default CardServicio;