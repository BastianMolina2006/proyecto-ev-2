import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { medicamentosSeed } from '../../data/Medicamentos';
import { serviciosSeed } from '../../data/Servicios';
import FormNuevoMed from './FormNuevoMed';
import FormEditarMed from './FormEditarMed';
import FormNuevoServicio from './FormNuevoServicio';
import FormEditarServicio from './FormEditarServicio';
import type { Medicamento, Servicio } from '../../data/tipos';

export const AdminInventario = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Control de subpestañas: Medicamentos vs Servicios
  const [subPestana, setSubPestana] = useState<'medicamentos' | 'servicios'>('medicamentos');

  // ================= ESTADOS: MEDICAMENTOS (TEMPORAL EN MEMORIA) =================
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>(medicamentosSeed);
  const [mostrarNuevoMed, setMostrarNuevoMed] = useState(false);
  const [editandoMed, setEditandoMed] = useState<Medicamento | null>(null);

  // Filtros Medicamentos
  const [filtroTextoMed, setFiltroTextoMed] = useState('');
  const [filtroCatMed, setFiltroCatMed] = useState('Todas');
  const [filtroEspMed, setFiltroEspMed] = useState('Todas');
  const [filtroStockMed, setFiltroStockMed] = useState('Todos');
  const [ordenMed, setOrdenMed] = useState('nombre');
  const [soloStockBajo, setSoloStockBajo] = useState(searchParams.get('filtro') === 'stock-bajo');

  // ================= ESTADOS: SERVICIOS (TEMPORAL EN MEMORIA) =================
  const [servicios, setServicios] = useState<Servicio[]>(serviciosSeed);
  const [mostrarNuevoServ, setMostrarNuevoServ] = useState(false);
  const [editandoServ, setEditandoServ] = useState<Servicio | null>(null);

  // Filtros Servicios
  const [filtroTextoServ, setFiltroTextoServ] = useState('');
  const [filtroCatServ, setFiltroCatServ] = useState('Todas');
  const [filtroEspServ, setFiltroEspServ] = useState('Todas');
  const [ordenServ, setOrdenServ] = useState('nombre');

  // ================= MANEJADORES DE ESTADO (VOLÁTILES) =================
  const guardarMedicamentos = (nuevos: Medicamento[]) => {
    setMedicamentos(nuevos);
  };

  const guardarServicios = (nuevos: Servicio[]) => {
    setServicios(nuevos);
  };

  // ================= LIMPIEZA DE FILTROS =================
  const limpiarFiltrosMed = () => {
    setFiltroTextoMed('');
    setFiltroCatMed('Todas');
    setFiltroEspMed('Todas');
    setFiltroStockMed('Todos');
    setOrdenMed('nombre');
    setSoloStockBajo(false);
  };

  const limpiarFiltrosServ = () => {
    setFiltroTextoServ('');
    setFiltroCatServ('Todas');
    setFiltroEspServ('Todas');
    setOrdenServ('nombre');
  };

  // ================= FILTRADO REACTIVO =================
  const medicamentosFiltrados = useMemo(() => {
    return medicamentos.filter(m => {
      const matchTexto = 
        m.nombre.toLowerCase().includes(filtroTextoMed.toLowerCase()) ||
        m.principio.toLowerCase().includes(filtroTextoMed.toLowerCase()) ||
        m.codigo.toLowerCase().includes(filtroTextoMed.toLowerCase());

      const matchCat = filtroCatMed === 'Todas' ? true : m.categoria.toLowerCase() === filtroCatMed.toLowerCase();
      const matchEsp = filtroEspMed === 'Todas' ? true : m.especie.toLowerCase().includes(filtroEspMed.toLowerCase());
      
      let matchStock = true;
      if (soloStockBajo || filtroStockMed === 'Bajo') {
        matchStock = m.stock <= 25;
      }

      return matchTexto && matchCat && matchEsp && matchStock;
    }).sort((a, b) => {
      if (ordenMed === 'precio-asc') return a.precio - b.precio;
      if (ordenMed === 'precio-desc') return b.precio - a.precio;
      if (ordenMed === 'stock-asc') return a.stock - b.stock;
      return a.nombre.localeCompare(b.nombre);
    });
  }, [medicamentos, filtroTextoMed, filtroCatMed, filtroEspMed, filtroStockMed, ordenMed, soloStockBajo]);

  const serviciosFiltrados = useMemo(() => {
    return servicios.filter(s => {
      const matchTexto = 
        s.nombre.toLowerCase().includes(filtroTextoServ.toLowerCase()) ||
        s.codigo.toLowerCase().includes(filtroTextoServ.toLowerCase());

      const matchCat = filtroCatServ === 'Todas' ? true : s.categoria.toLowerCase() === filtroCatServ.toLowerCase();
      const matchEsp = filtroEspServ === 'Todas' ? true : s.especie.toLowerCase().includes(filtroEspServ.toLowerCase());

      return matchTexto && matchCat && matchEsp;
    }).sort((a, b) => {
      if (ordenServ === 'precio-asc') return a.precio - b.precio;
      if (ordenServ === 'precio-desc') return b.precio - a.precio;
      return a.nombre.localeCompare(b.nombre);
    });
  }, [servicios, filtroTextoServ, filtroCatServ, filtroEspServ, ordenServ]);

  return (
    <div>
      {/* Cabecera Principal */}
      <div className="mb-3">
        <h1 className="fw-bold font-serif-vet display-6 text-vet-verde m-0">Inventario</h1>
        <p className="text-secondary small">Administra medicamentos y servicios de la clínica.</p>
      </div>

      {/* Pestañas de Selección */}
      <div className="d-flex align-items-center gap-3 border-bottom pb-3 mb-3">
        <button
          type="button"
          onClick={() => {
            setSubPestana('medicamentos');
            setEditandoMed(null);
            setMostrarNuevoMed(false);
          }}
          className={`btn d-flex align-items-center gap-2 pb-2 px-2 fw-semibold border-0 ${
            subPestana === 'medicamentos' ? 'text-dark border-bottom border-2 border-dark' : 'text-secondary bg-transparent'
          }`}
          style={{ borderRadius: 0 }}
        >
          Medicamentos <span className="badge rounded-pill bg-light text-dark border px-2 py-1">{medicamentos.length}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setSubPestana('servicios');
            setEditandoServ(null);
            setMostrarNuevoServ(false);
          }}
          className={`btn d-flex align-items-center gap-2 pb-2 px-2 fw-semibold border-0 ${
            subPestana === 'servicios' ? 'text-dark border-bottom border-2 border-dark' : 'text-secondary bg-transparent'
          }`}
          style={{ borderRadius: 0 }}
        >
          Servicios <span className="badge rounded-pill bg-light text-dark border px-2 py-1">{servicios.length}</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* --------------------- SUBPESTAÑA: MEDICAMENTOS -------------------------- */}
      {/* ========================================================================= */}
      {subPestana === 'medicamentos' && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-secondary">Inventario de medicamentos y productos veterinarios.</small>
            <button 
              onClick={() => {
                setMostrarNuevoMed(true);
                setEditandoMed(null);
              }}
              className="btn btn-sm text-white px-3 py-2 fw-semibold rounded-2"
              style={{ backgroundColor: '#184e36' }}
            >
              Nuevo medicamento
            </button>
          </div>

          {/* Alerta de Stock Bajo */}
          <div 
            className="d-flex justify-content-between align-items-center p-3 rounded-2 mb-4" 
            style={{ backgroundColor: '#fef7e0', border: '1px solid #f9e3a3' }}
          >
            <div className="small">
              <strong>{medicamentos.filter(m => m.stock <= 25).length}</strong> productos con stock bajo
            </div>
            <button
              onClick={() => setSoloStockBajo(!soloStockBajo)}
              className="btn btn-sm btn-outline-secondary bg-white text-dark py-1 px-3"
            >
              {soloStockBajo ? 'Ver todos' : 'Ver solo stock bajo'}
            </button>
          </div>

          {/* Formulario de Creación */}
          {mostrarNuevoMed && (
            <FormNuevoMed
              siguienteCodigo={`ME0${medicamentos.length + 1 < 10 ? '0' : ''}${medicamentos.length + 1}`}
              alCrear={(nuevo) => {
                guardarMedicamentos([nuevo, ...medicamentos]);
                setMostrarNuevoMed(false);
              }}
              alCancelar={() => setMostrarNuevoMed(false)}
            />
          )}

          {/* Formulario de Edición */}
          {editandoMed && (
            <FormEditarMed
              medicamento={editandoMed}
              alGuardar={(actualizado) => {
                guardarMedicamentos(medicamentos.map(m => m.codigo === actualizado.codigo ? actualizado : m));
                setEditandoMed(null);
              }}
              alCancelar={() => setEditandoMed(null)}
            />
          )}

          {/* Filtros de Medicamentos */}
          <div className="row g-2 mb-3 align-items-center">
            <div className="col-12 col-md-3">
              <input
                type="text"
                placeholder="Buscar por nombre, principio..."
                className="form-control"
                value={filtroTextoMed}
                onChange={(e) => setFiltroTextoMed(e.target.value)}
              />
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={filtroCatMed} onChange={(e) => setFiltroCatMed(e.target.value)}>
                <option value="Todas">Todas las categorías</option>
                <option value="Antibióticos">Antibióticos</option>
                <option value="Antiparasitarios">Antiparasitarios</option>
                <option value="Antiinflamatorios">Antiinflamatorios</option>
                <option value="Dermatología">Dermatología</option>
                <option value="Digestivo">Digestivo</option>
                <option value="Cardíaco">Cardíaco</option>
                <option value="Analgésicos">Analgésicos</option>
                <option value="Vacunas">Vacunas</option>
                <option value="Suplementos">Suplementos</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={filtroEspMed} onChange={(e) => setFiltroEspMed(e.target.value)}>
                <option value="Todas">Todas las especies</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={filtroStockMed} onChange={(e) => setFiltroStockMed(e.target.value)}>
                <option value="Todos">Todo el stock</option>
                <option value="Bajo">Stock bajo (≤ 25)</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={ordenMed} onChange={(e) => setOrdenMed(e.target.value)}>
                <option value="nombre">Ordenar por nombre</option>
                <option value="precio-asc">Precio menor</option>
                <option value="precio-desc">Precio mayor</option>
                <option value="stock-asc">Menor stock</option>
              </select>
            </div>
            <div className="col-12 col-md-1">
              <button onClick={limpiarFiltrosMed} className="btn btn-outline-secondary w-100">
                Limpiar
              </button>
            </div>
          </div>

          {/* Tabla de Medicamentos */}
          <div className="table-responsive border rounded-3 mb-5">
            <table className="table table-hover align-middle mb-0 small">
              <thead className="bg-light text-secondary">
                <tr>
                  <th className="py-3 px-3">CÓDIGO</th>
                  <th>MEDICAMENTO</th>
                  <th>CATEGORÍA</th>
                  <th>STOCK</th>
                  <th>PRECIO</th>
                  <th className="text-end px-3">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {medicamentosFiltrados.map((m) => (
                  <tr key={m.codigo}>
                    <td className="px-3 text-muted fw-semibold">{m.codigo}</td>
                    <td className="fw-semibold text-dark">{m.nombre}</td>
                    <td>
                      <span className="badge px-2 py-1 rounded-pill fw-normal" style={{ backgroundColor: '#eef5f1', color: '#184e36', border: '1px solid #cce2d6' }}>
                        {m.categoria}
                      </span>
                    </td>
                    <td>
                      <span className="me-2">{m.stock}</span>
                      {m.stock <= 25 && (
                        <span className="badge px-2 py-1 rounded-pill" style={{ backgroundColor: '#fef1d6', color: '#8f5b08', fontSize: '0.72rem' }}>
                          Stock bajo
                        </span>
                      )}
                    </td>
                    <td className="fw-semibold">${m.precio.toLocaleString('es-CL')}</td>
                    <td className="text-end px-3">
                      <div className="d-inline-flex gap-1">
                        <button 
                          onClick={() => {
                            setEditandoMed(m);
                            setMostrarNuevoMed(false);
                          }} 
                          className="btn btn-sm btn-outline-success py-1 px-2" 
                          style={{ fontSize: '0.75rem' }}
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => navigate(`/medicamentos/${m.codigo}`)} 
                          className="btn btn-sm btn-outline-primary py-1 px-2" 
                          style={{ fontSize: '0.75rem' }}
                        >
                          Ver
                        </button>
                        <button 
                          onClick={() => {
                            if (confirm(`¿Eliminar ${m.nombre}?`)) {
                              guardarMedicamentos(medicamentos.filter(x => x.codigo !== m.codigo));
                            }
                          }} 
                          className="btn btn-sm btn-danger py-1 px-2" 
                          style={{ fontSize: '0.75rem', backgroundColor: '#a61c1c' }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ----------------------- SUBPESTAÑA: SERVICIOS --------------------------- */}
      {/* ========================================================================= */}
      {subPestana === 'servicios' && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-secondary">Listado de todos los servicios disponibles en el sistema.</small>
            <button 
              onClick={() => {
                setMostrarNuevoServ(true);
                setEditandoServ(null);
              }}
              className="btn btn-sm text-white px-3 py-2 fw-semibold rounded-2"
              style={{ backgroundColor: '#184e36' }}
            >
              Nuevo servicio
            </button>
          </div>

          {/* Formulario de Creación de Servicio */}
          {mostrarNuevoServ && (
            <FormNuevoServicio
              siguienteCodigo={`SV0${servicios.length + 1}`}
              alCrear={(nuevo) => {
                guardarServicios([nuevo, ...servicios]);
                setMostrarNuevoServ(false);
              }}
              alCancelar={() => setMostrarNuevoServ(false)}
            />
          )}

          {/* Formulario de Edición de Servicio */}
          {editandoServ && (
            <FormEditarServicio
              servicio={editandoServ}
              alGuardar={(actualizado) => {
                guardarServicios(servicios.map(s => s.codigo === actualizado.codigo ? actualizado : s));
                setEditandoServ(null);
              }}
              alCancelar={() => setEditandoServ(null)}
            />
          )}

          {/* Filtros de Servicios */}
          <div className="row g-2 mb-3 align-items-center">
            <div className="col-12 col-md-4">
              <input
                type="text"
                placeholder="Buscar servicio por nombre o código..."
                className="form-control"
                value={filtroTextoServ}
                onChange={(e) => setFiltroTextoServ(e.target.value)}
              />
            </div>
            <div className="col-6 col-md-3">
              <select className="form-select" value={filtroCatServ} onChange={(e) => setFiltroCatServ(e.target.value)}>
                <option value="Todas">Todas las categorías</option>
                <option value="Consultas">Consultas</option>
                <option value="Vacunación">Vacunación</option>
                <option value="Cirugía">Cirugía</option>
                <option value="Desparasitación">Desparasitación</option>
                <option value="Exámenes">Exámenes</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={filtroEspServ} onChange={(e) => setFiltroEspServ(e.target.value)}>
                <option value="Todas">Todas las especies</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Perra">Perra</option>
                <option value="Gata">Gata</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select" value={ordenServ} onChange={(e) => setOrdenServ(e.target.value)}>
                <option value="nombre">Ordenar por nombre</option>
                <option value="precio-asc">Precio menor</option>
                <option value="precio-desc">Precio mayor</option>
              </select>
            </div>
            <div className="col-6 col-md-1">
              <button onClick={limpiarFiltrosServ} className="btn btn-outline-secondary w-100">
                Limpiar
              </button>
            </div>
          </div>

          {/* Tabla de Servicios */}
          <div className="table-responsive border rounded-3 mb-5">
            <table className="table table-hover align-middle mb-0 small">
              <thead className="bg-light text-secondary">
                <tr>
                  <th className="py-3 px-3">ID</th>
                  <th>SERVICIO</th>
                  <th>CATEGORÍA</th>
                  <th>PRECIO</th>
                  <th className="text-end px-3">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {serviciosFiltrados.map((s) => (
                  <tr key={s.codigo}>
                    <td className="px-3 text-muted fw-semibold">{s.codigo}</td>
                    <td className="fw-semibold text-dark">{s.nombre}</td>
                    <td>
                      <span 
                        className="badge px-2 py-1 rounded-pill fw-normal"
                        style={{ backgroundColor: '#eef5f1', color: '#184e36', border: '1px solid #cce2d6' }}
                      >
                        {s.categoria}
                      </span>
                    </td>
                    <td className="fw-semibold">${s.precio.toLocaleString('es-CL')}</td>
                    <td className="text-end px-3">
                      <div className="d-inline-flex gap-1">
                        <button 
                          onClick={() => {
                            setEditandoServ(s);
                            setMostrarNuevoServ(false);
                          }}
                          className="btn btn-sm btn-outline-success py-1 px-2"
                          style={{ fontSize: '0.75rem' }}
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => navigate(`/servicios/${s.codigo}`)} 
                          className="btn btn-sm btn-outline-primary py-1 px-2" 
                          style={{ fontSize: '0.75rem' }}
                        >
                          Ver
                        </button>
                        <button 
                          onClick={() => {
                            if (confirm(`¿Eliminar ${s.nombre}?`)) {
                              guardarServicios(servicios.filter(x => x.codigo !== s.codigo));
                            }
                          }}
                          className="btn btn-sm btn-danger py-1 px-2"
                          style={{ fontSize: '0.75rem', backgroundColor: '#a61c1c' }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInventario;