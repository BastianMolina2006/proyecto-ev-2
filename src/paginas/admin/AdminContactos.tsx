import { useEffect, useState } from 'react';
import {
  listarContactos,
  marcarContactoAtendido,
  eliminarContacto,
  type ContactoApi,
} from '../../servicios/contactosApi';

export const AdminContactos = () => {
  const [contactos, setContactos] = useState<ContactoApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const cargar = async () => {
    try {
      setContactos(await listarContactos());
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudieron cargar los mensajes.');
    } finally {
      setCargando(false);
    }
  };

  // Carga inicial (GET)
  useEffect(() => {
    listarContactos()
      .then(setContactos)
      .catch((e: Error) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  // PUT /api/contactos/{id}/atendido
  const atender = async (id: number) => {
    try {
      await marcarContactoAtendido(id);
      await cargar();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'No se pudo actualizar el mensaje.');
    }
  };

  // DELETE /api/contactos/{id}
  const eliminar = async (c: ContactoApi) => {
    if (!confirm(`¿Eliminar el mensaje de ${c.nombreCompleto}?`)) return;
    try {
      await eliminarContacto(c.id);
      await cargar();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'No se pudo eliminar el mensaje.');
    }
  };

  return (
    <div>
      <h2 className="fw-bold font-serif-vet text-vet-verde mb-1">Mensajes de contacto</h2>
      <p className="text-secondary small mb-4">Mensajes enviados desde el formulario de contacto del sitio.</p>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive border rounded-3 shadow-sm">
        <table className="table table-hover align-middle mb-0 small">
          <thead className="bg-light text-secondary">
            <tr>
              <th className="py-3 px-3">FECHA</th>
              <th>NOMBRE</th>
              <th>CORREO</th>
              <th>MENSAJE</th>
              <th>ESTADO</th>
              <th className="text-end px-3">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {cargando && (
              <tr>
                <td colSpan={6} className="text-center text-muted py-4">Cargando...</td>
              </tr>
            )}
            {!cargando && contactos.length === 0 && !error && (
              <tr>
                <td colSpan={6} className="text-center text-muted py-4">Aún no hay mensajes.</td>
              </tr>
            )}
            {contactos.map((c) => (
              <tr key={c.id}>
                <td className="px-3 text-muted">{new Date(c.fechaCreacion).toLocaleString('es-CL')}</td>
                <td className="fw-semibold text-dark">{c.nombreCompleto}</td>
                <td>{c.correo}</td>
                <td style={{ maxWidth: '280px' }}>{c.mensaje}</td>
                <td>
                  <span className={`badge px-2 py-1 ${c.estado === 'ATENDIDO' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {c.estado}
                  </span>
                </td>
                <td className="text-end px-3">
                  <div className="d-inline-flex gap-1">
                    {c.estado === 'PENDIENTE' && (
                      <button
                        onClick={() => atender(c.id)}
                        className="btn btn-sm btn-outline-success py-1 px-2"
                        style={{ fontSize: '0.75rem' }}
                      >
                        Marcar atendido
                      </button>
                    )}
                    <button
                      onClick={() => eliminar(c)}
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
  );
};

export default AdminContactos;
