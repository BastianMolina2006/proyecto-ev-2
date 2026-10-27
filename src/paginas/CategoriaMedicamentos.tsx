import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { medicamentosSeed } from '../data/Medicamentos';
import CardMedicamentoDetalle from '../componentes/moleculas/CardMedicamentoDetalle';

const CATEGORIA_MAP: { [key: string]: string } = {
  "antibioticos": "Antibióticos",
  "antiparasitarios": "Antiparasitarios",
  "antiinflamatorios": "Antiinflamatorios",
  "dermatologia": "Dermatología",
  "digestivo": "Digestivo",
  "cardiaco": "Cardíaco",
  "analgesicos": "Analgésicos",
  "vacunas": "Vacunas",
  "suplementos": "Suplementos"
};

export const CategoriaMedicamento = () => {
  const { categoriaSlug } = useParams<{ categoriaSlug: string }>();
  const nombreCategoria = CATEGORIA_MAP[categoriaSlug || ''] || "Categoría";

  const [busqueda, setBusqueda] = useState('');
  const [especieFiltro, setEspecieFiltro] = useState('Todas');
  const [orden, setOrden] = useState('nombre');

  const productosFiltrados = useMemo(() => {
    return medicamentosSeed
      .filter((med) => med.categoria.toLowerCase() === nombreCategoria.toLowerCase())
      .filter((med) => {
        const coincideTexto = 
          med.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          med.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
          med.principio.toLowerCase().includes(busqueda.toLowerCase());
        
        const coincideEspecie = 
          especieFiltro === 'Todas' ? true : med.especie.includes(especieFiltro);

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
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small text-muted mb-3">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/medicamentos" className="text-decoration-none text-muted">Medicamentos</Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            {nombreCategoria}
          </li>
        </ol>
      </nav>

      {/* Botón Volver */}
      <div className="text-start mb-3">
        <Link 
          to="/medicamentos" 
          className="btn btn-sm btn-vet-outline"
        >
          ← Volver a Categorías
        </Link>
      </div>

      {/* Título de la categoría */}
      <div className="text-start mb-4">
        <h1 className="fw-bold font-serif-vet display-6 text-vet-verde">
          {nombreCategoria}
        </h1>
        <p className="text-secondary small">
          Productos veterinarios disponibles en esta sección.
        </p>
      </div>

      {/* Barra de Filtros */}
      <div className="row g-2 mb-4">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 border-vet text-muted">🔍</span>
            <input
              type="text"
              className="form-control border-start-0 border-vet ps-0"
              placeholder="Buscar por nombre o código..."
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
          </select>
        </div>

        <div className="col-6 col-md-3">
          <select 
            className="form-select border-vet"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="nombre">Ordenar por nombre</option>
            <option value="precio-asc">Precio: Menor a Mayor</option>
            <option value="precio-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* Cuadrícula de Medicamentos */}
      {productosFiltrados.length === 0 ? (
        <div className="alert alert-warning text-center py-5 border-vet">
          No se encontraron medicamentos en <strong>{nombreCategoria}</strong> con los criterios seleccionados.
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {productosFiltrados.map((med) => (
            <div key={med.codigo} className="col-12 col-md-6 col-lg-4">
              <CardMedicamentoDetalle medicamento={med} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriaMedicamento;