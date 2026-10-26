import { Link } from 'react-router-dom';

export const Servicios = () => {
  const categorias = [
    {
      nombre: "Consultas",
      slug: "consultas",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 14l2 2 4-4"></path>
        </svg>
      )
    },
    {
      nombre: "Vacunación",
      slug: "vacunacion",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <line x1="12" y1="8" x2="12" y2="14"></line>
          <line x1="9" y1="11" x2="15" y2="11"></line>
        </svg>
      )
    },
    {
      nombre: "Cirugía",
      slug: "cirugia",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
          <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
          <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      nombre: "Desparasitación",
      slug: "desparasitacion",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <circle cx="12" cy="12" r="6"></circle>
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4" y1="8" x2="6" y2="10"></line>
          <line x1="18" y1="14" x2="20" y2="16"></line>
          <line x1="4" y1="16" x2="6" y2="14"></line>
          <line x1="18" y1="10" x2="20" y2="8"></line>
        </svg>
      )
    },
    {
      nombre: "Exámenes",
      slug: "examenes",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <path d="M11 8a3 3 0 0 0-3 3"></path>
        </svg>
      )
    },
    {
      nombre: "Otros",
      slug: "otros",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="container py-3">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small text-muted mb-4">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted">Inicio</Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            Servicios
          </li>
        </ol>
      </nav>

      {/* Título Principal */}
      <div className="text-center mb-5">
        <h1 className="fw-bold font-serif-vet display-5 tracking-wide mb-2 text-dark">
          NUESTROS SERVICIOS
        </h1>
        <p className="text-secondary small">
          Selecciona una categoría para ver los servicios disponibles.
        </p>
      </div>

      {/* Grilla 3x2 de Categorías de Servicios */}
      <div className="row g-4 mb-5">
        {categorias.map((cat) => (
          <div key={cat.slug} className="col-12 col-md-6 col-lg-4">
            <Link to={`/servicios/categoria/${cat.slug}`} className="text-decoration-none">
              <div className="card h-100 text-center border-vet shadow-sm rounded-3 overflow-hidden">
                <div className="bg-vet-claro d-flex align-items-center justify-content-center py-4" style={{ minHeight: '130px' }}>
                  <div className="text-vet-verde" style={{ width: '48px', height: '48px' }}>
                    {cat.svgIcon}
                  </div>
                </div>
                <div className="card-body bg-white py-3">
                  <h5 className="card-title fw-bold text-vet-verde m-0 fs-6">
                    {cat.nombre}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;