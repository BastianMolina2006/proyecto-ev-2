import { useEffect, useState } from 'react';
import { listarUsuarios, actualizarUsuario, eliminarUsuario, type UsuarioApi } from '../../servicios/usuariosApi';

const TIPOS_USUARIO = ['Cliente', 'Recepcionista', 'Veterinario', 'Administrador'];

export const AdminClientes = () => {
  const [usuarios, setUsuarios] = useState<UsuarioApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const cargar = async () => {
    try {
      setUsuarios(await listarUsuarios());
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudieron cargar los usuarios.');
    } finally {
      setCargando(false);
    }
  };

  // Carga inicial (GET)
  useEffect(() => {
    listarUsuarios()
      .then(setUsuarios)
      .catch((e: Error) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  // PUT /api/usuarios/{id}: cambia el tipo (rol) del usuario
  const cambiarTipo = async (u: UsuarioApi, nuevoTipo: string) => {
    try {
      await actualizarUsuario(u.id, { ...u, tipoUsuario: nuevoTipo });
      await cargar();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'No se pudo actualizar el usuario.');
    }
  };

  // DELETE /api/usuarios/{id}
  const eliminar = async (u: UsuarioApi) => {
    if (!confirm(`¿Eliminar a ${u.nombre} ${u.apellidos}?`)) return;
    try {
      await eliminarUsuario(u.id);
      await cargar();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'No se pudo eliminar el usuario.');
    }
  };

  return (
    <div>
      <h2 className="fw-bold font-serif-vet text-vet-verde mb-1">Clientes Registrados</h2>
      <p className="text-secondary small mb-4">Usuarios registrados en el sistema de la clínica.</p>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive border rounded-3 shadow-sm">
        <table className="table table-hover align-middle mb-0 small">
          <thead className="bg-light text-secondary">
            <tr>
              <th className="py-3 px-3">RUN</th>
              <th>NOMBRE Y APELLIDO</th>
              <th>CORREO</th>
              <th>COMUNA</th>
              <th>TIPO DE USUARIO</th>
              <th className="text-end px-3">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {cargando && (
              <tr>
                <td colSpan={6} className="text-center text-muted py-4">Cargando...</td>
              </tr>
            )}
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td className="px-3 text-muted fw-bold">{u.run}</td>
                <td className="fw-semibold text-dark">{u.nombre} {u.apellidos}</td>
                <td>{u.correo}</td>
                <td>{u.comuna}</td>
                <td>
                  <span className={`badge px-2 py-1 ${u.tipoUsuario === 'Administrador' ? 'bg-dark' : 'bg-success'}`}>
                    {u.tipoUsuario}
                  </span>
                </td>
                <td className="text-end px-3">
                  <div className="d-inline-flex gap-1">
                    <select
                      value={u.tipoUsuario}
                      onChange={(e) => cambiarTipo(u, e.target.value)}
                      className="form-select form-select-sm py-1"
                      style={{ fontSize: '0.75rem', width: 'auto' }}
                      aria-label={`Tipo de usuario de ${u.nombre}`}
                    >
                      {TIPOS_USUARIO.map((tipo) => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => eliminar(u)}
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

export default AdminClientes;
