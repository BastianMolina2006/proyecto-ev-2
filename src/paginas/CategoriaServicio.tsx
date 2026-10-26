import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviciosSeed } from '../data/Servicios';
import CardServicioItem from '../componentes/moleculas/CardServicioItem';

const CATEGORIAS_SERVICIOS_MAP: { [key: string]: string } = {
  "consultas": "Consultas",
  "vacunacion": "Vacunación",
  "cirugia": "Cirugía",
  "desparasitacion": "Desparasitación",
  "examenes": "Exámenes",
  "otros": "Otros"
};

export const CategoriaServicio = () => {
  const { categoriaSlug } = useParams<{ categoriaSlug: string }>();
  const nombreCategoria = CATEGORIAS_SERVICIOS_MAP[categoriaSlug || ''] || "Servicios";

  const [busqueda, setBusqueda] = useState('');
  const [especieFiltro, setEspecieFiltro] = useState('Todas');
  const [orden, setOrden] = useState('nombre');

  const serviciosFiltrados = useMemo(() => {
    return serviciosSeed
      .filter((s) => s.categoria.toLowerCase() === nombreCategoria.toLowerCase())
      .filter((s) => {
        const coincideTexto = 
          s.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          s.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
          s.observaciones.toLowerCase().includes(busqueda.toLowerCase());
        
        const coincideEspecie = 
          especieFiltro === 'Todas' ? true : s.especie.toLowerCase().includes(especieFiltro.toLowerCase());

        return coincideTexto && coincideEspecie;
      })
      .sort((a, b) => {
        if (orden === 'precio-asc') return a.precio - b.precio;
        if (orden === 'precio-desc') return b.precio - a.precio;
        return a.nombre.localeCompare(b.nombre);
      });
  }, [nombreCategoria, busqueda, especieFiltro, orden]);

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
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            {nombreCategoria}
          </li>
        </ol>
      </nav>

      <div className="text-start mb-3">
        <Link to="/servicios" className="btn btn-sm btn-vet-outline">
          ← Volver a Servicios
        </Link>
      </div>

      <div className="text-start mb-4">
        <h1 className="fw-bold font-serif-vet display-6 text-vet-verde">
          {nombreCategoria}
        </h1>
        <p className="text-secondary small">
          Prestaciones veterinarias disponibles en esta categoría.
        </p>
      </div>

      <div className="row g-2 mb-4">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 border-vet text-muted">🔍</span>
            <input
              type="text"
              className="form-control border-start-0 border-vet ps-0"
              placeholder="Buscar servicio por nombre o código..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        <div className="col-6 col-md-3">
          <select 
            className="form-select border-vet"
            value={especieFiltro}
            onChange={(e) => setEspecieFiltro(e.target.value)}
          >
            <option value="Todas">Todas las especies</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave / Conejo</option>
          </select>
        </div>

        <div className="col-6 col-md-3">
          <select 
            className="form-select border-vet"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="nombre">Ordenar por nombre</option>
            <option value="precio-asc">Tarifa: Menor a Mayor</option>
            <option value="precio-desc">Tarifa: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {serviciosFiltrados.length === 0 ? (
        <div className="alert alert-warning text-center py-5 border-vet">
          No se encontraron servicios en <strong>{nombreCategoria}</strong> con los filtros seleccionados.
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {serviciosFiltrados.map((s) => (
            <div key={s.codigo} className="col-12 col-md-6 col-lg-4">
              <CardServicioItem servicio={s} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriaServicio;