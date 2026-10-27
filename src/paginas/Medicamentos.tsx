import { Link } from 'react-router-dom';
import CardCategoria from '../componentes/moleculas/CardCategoria';

export const Medicamentos = () => {
  const categorias = [
    {
      nombre: "Antibióticos",
      slug: "antibioticos",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <line x1="8.5" y1="2.5" x2="21.5" y2="15.5"></line>
          <line x1="2.5" y1="8.5" x2="15.5" y2="21.5"></line>
          <path d="M10.5 4.5 L4.5 10.5 A4.24 4.24 0 0 0 10.5 16.5 L16.5 10.5 A4.24 4.24 0 0 0 10.5 4.5 Z"></path>
          <circle cx="18" cy="18" r="3"></circle>
        </svg>
      )
    },
    {
      nombre: "Antiparasitarios",
      slug: "antiparasitarios",
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
      nombre: "Antiinflamatorios",
      slug: "antiinflamatorios",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
        </svg>
      )
    },
    {
      nombre: "Dermatología",
      slug: "dermatologia",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    },
    {
      nombre: "Digestivo",
      slug: "digestivo",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      nombre: "Cardíaco",
      slug: "cardiaco",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21.23l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z"></path>
          <polyline points="3.5 12 8.5 12 10 9 14 15 15.5 12 20.5 12"></polyline>
        </svg>
      )
    },
    {
      nombre: "Analgésicos",
      slug: "analgesicos",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <rect x="4" y="4" width="16" height="16" rx="4" transform="rotate(45 12 12)"></rect>
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="10" cy="10" r="1"></circle>
          <circle cx="14" cy="14" r="1"></circle>
        </svg>
      )
    },
    {
      nombre: "Vacunas",
      slug: "vacunas",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <line x1="12" y1="8" x2="12" y2="14"></line>
          <line x1="9" y1="11" x2="15" y2="11"></line>
        </svg>
      )
    },
    {
      nombre: "Suplementos",
      slug: "suplementos",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-100 h-100">
          <rect x="3" y="10" width="18" height="11" rx="2"></rect>
          <path d="M7 10V6a5 5 0 0 1 10 0v4"></path>
          <line x1="7" y1="14" x2="7" y2="18"></line>
          <line x1="12" y1="14" x2="12" y2="18"></line>
          <line x1="17" y1="14" x2="17" y2="18"></line>
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
            Medicamentos
          </li>
        </ol>
      </nav>

      {/* Título Principal */}
      <div className="text-center mb-5">
        <h1 className="fw-bold font-serif-vet display-5 tracking-wide mb-2 text-dark">
          NUESTROS PRODUCTOS
        </h1>
        <p className="text-secondary small">
          Selecciona una categoría para ver los productos disponibles.
        </p>
      </div>

      {/* Cuadrícula 3x3 */}
      <div className="row g-4 mb-5">
        {categorias.map((cat) => (
          <div key={cat.slug} className="col-12 col-md-6 col-lg-4">
            <CardCategoria 
              nombre={cat.nombre} 
              slug={cat.slug} 
              svgIcon={cat.svgIcon} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicamentos;