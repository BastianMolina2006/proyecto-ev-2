import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { medicamentosSeed } from '../../data/Medicamentos';
import { serviciosSeed } from '../../data/Servicios';
import { obtenerUsuarios } from '../../data/Usuarios';
import type { Medicamento } from '../../data/tipos';

export const AdminResumen = () => {
  const localMeds = localStorage.getItem('vet_medicamentos_crud');
  const medicamentos: Medicamento[] = localMeds ? JSON.parse(localMeds) : medicamentosSeed;
  
  const totalProductos = medicamentos.length + serviciosSeed.length;
  const medicamentosStockBajo = useMemo(() => {
    return medicamentos.filter(m => m.stock <= 25).sort((a, b) => a.stock - b.stock);
  }, [medicamentos]);

  const totalClientes = obtenerUsuarios().length;

  const citas = [
    { fecha: "28-10-2026 10:00", mascota: "Luna (Perro)", servicio: "Consulta general", estado: "Pendiente" },
    { fecha: "30-10-2026 15:30", mascota: "Michi (Gato)", servicio: "Vacuna bivalente felina", estado: "Confirmada" }
  ];

  return (
    <div>
      <div className="mb-4">
        <h1 className="fw-bold font-serif-vet display-6 text-vet-verde m-0">Resumen</h1>
        <p className="text-secondary small">Estado general de la clínica.</p>
      </div>

      {/* 4 Métricas */}
      <div className="row g-3 mb-5">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border p-3 rounded-4 shadow-sm" style={{ borderColor: '#e2ece6' }}>
            <div className="text-secondary mb-2 fs-4">📦</div>
            <h2 className="fw-bold m-0 font-serif-vet text-dark">{totalProductos}</h2>
            <small className="text-secondary d-block mb-3">Productos en inventario</small>
            <Link to="/admin/inventario" className="text-vet-verde fw-semibold small text-decoration-none mt-auto">
              Ver detalles →
            </Link>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border p-3 rounded-4 shadow-sm" style={{ borderColor: '#f0ad4e', borderLeft: '4px solid #ea8f12' }}>
            <div className="text-warning mb-2 fs-4">⚠️</div>
            <h2 className="fw-bold m-0 font-serif-vet text-dark">{medicamentosStockBajo.length}</h2>
            <small className="text-secondary d-block mb-3">Con stock bajo</small>
            <Link to="/admin/inventario?filtro=stock-bajo" className="text-vet-verde fw-semibold small text-decoration-none mt-auto">
              Ver detalles →
            </Link>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border p-3 rounded-4 shadow-sm" style={{ borderColor: '#e2ece6' }}>
            <div className="text-secondary mb-2 fs-4">👥</div>
            <h2 className="fw-bold m-0 font-serif-vet text-dark">{totalClientes}</h2>
            <small className="text-secondary d-block mb-3">Clientes activos</small>
            <Link to="/admin/clientes" className="text-vet-verde fw-semibold small text-decoration-none mt-auto">
              Ver detalles →
            </Link>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border p-3 rounded-4 shadow-sm" style={{ borderColor: '#e2ece6' }}>
            <div className="text-secondary mb-2 fs-4">📅</div>
            <h2 className="fw-bold m-0 font-serif-vet text-dark">{citas.length}</h2>
            <small className="text-secondary d-block mb-3">Citas agendadas</small>
          </div>
        </div>
      </div>

      {/* Tablas Inferiores */}
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <h5 className="fw-bold font-serif-vet text-dark mb-3">Próximas citas</h5>
          <div className="table-responsive rounded-3 border">
            <table className="table table-hover align-middle mb-0 small">
              <thead className="bg-light text-secondary">
                <tr>
                  <th className="py-2 px-3">FECHA</th>
                  <th>MASCOTA</th>
                  <th>SERVICIO</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody>
                {citas.map((c, i) => (
                  <tr key={i}>
                    <td className="px-3 text-muted">{c.fecha}</td>
                    <td className="fw-semibold">{c.mascota}</td>
                    <td className="text-secondary">{c.servicio}</td>
                    <td>
                      <span className={`badge px-2 py-1 ${c.estado === 'Confirmada' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {c.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <h5 className="fw-bold font-serif-vet text-dark mb-3">Medicamentos con stock bajo</h5>
          <div className="table-responsive rounded-3 border mb-3 overflow-y-auto" style={{ maxHeight: '250px' }}>
            <table className="table table-hover align-middle mb-0 small">
              <thead className="bg-light text-secondary position-sticky top-0">
                <tr>
                  <th className="py-2 px-3">MEDICAMENTO</th>
                  <th className="text-end px-3">STOCK</th>
                </tr>
              </thead>
              <tbody>
                {medicamentosStockBajo.map((m) => (
                  <tr key={m.codigo}>
                    <td className="px-3 fw-semibold text-dark">{m.nombre}</td>
                    <td className="text-end px-3">
                      <span className="badge px-2 py-1 rounded-pill" style={{ backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeeba' }}>
                        {m.stock} u.
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/admin/inventario" className="btn btn-sm text-white px-3 fw-semibold" style={{ backgroundColor: '#184e36' }}>
            Ir al inventario
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminResumen;