import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white border-bottom border-vet">

      <nav className="navbar navbar-expand-lg bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-vet-verde font-serif-vet fw-bold fs-4 d-flex align-items-center gap-2 m-0" to="/">
            <span style={{ width: '13px', height: '13px', backgroundColor: '#184e36', borderRadius: '50%', display: 'inline-block' }}></span>
            Veterinaria San Marcos
          </Link>

          <div className="navbar-nav d-flex flex-row gap-4 fs-6">
            <Link className="nav-link text-vet-verde fw-bold" to="/">Home</Link>
            <Link className="nav-link text-secondary" to="/medicamentos">Medicamentos</Link>
            <Link className="nav-link text-secondary" to="/servicios">Servicios</Link>
            <Link className="nav-link text-secondary" to="/nosotros">Nosotros</Link>
            <Link className="nav-link text-secondary" to="/noticias">Noticias</Link>
            <Link className="nav-link text-secondary" to="/contacto">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;