interface CardProps {
  titulo: string;
  subtitulo: string;
  precio: string;
  icono: string;
}

function CardServicio({ titulo, subtitulo, precio, icono }: CardProps) {
  return (
    <div className="card text-center h-100 shadow-sm border border-vet overflow-hidden">
      
      <div style={{ height: '140px', backgroundColor: '#edf4f0' }}>
        <img 
          src={icono} 
          alt={titulo} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
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
  );
}

export default CardServicio;