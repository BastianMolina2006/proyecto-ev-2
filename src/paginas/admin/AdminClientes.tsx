import { obtenerUsuarios } from '../../data/Usuarios';

export const AdminClientes = () => {
  const usuarios = obtenerUsuarios();

  return (
    <div>
      <h2 className="fw-bold font-serif-vet text-vet-verde mb-1">Clientes Registrados</h2>
      <p className="text-secondary small mb-4">Usuarios registrados en el sistema de la clínica.</p>

      <div className="table-responsive border rounded-3 shadow-sm">
        <table className="table table-hover align-middle mb-0 small">
          <thead className="bg-light text-secondary">
            <tr>
              <th className="py-3 px-3">RUN</th>
              <th>NOMBRE Y APELLIDO</th>
              <th>CORREO</th>
              <th>COMUNA</th>
              <th>TIPO DE USUARIO</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.run}>
                <td className="px-3 text-muted fw-bold">{u.run}</td>
                <td className="fw-semibold text-dark">{u.nombre} {u.apellidos}</td>
                <td>{u.correo}</td>
                <td>{u.comuna}</td>
                <td>
                  <span className={`badge px-2 py-1 ${u.tipoUsuario === 'Administrador' ? 'bg-dark' : 'bg-success'}`}>
                    {u.tipoUsuario}
                  </span>
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