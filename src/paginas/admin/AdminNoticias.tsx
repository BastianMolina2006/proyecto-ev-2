import { useEffect, useState } from 'react';
import {
  listarNoticias,
  crearNoticia,
  actualizarNoticia,
  eliminarNoticia,
  formatearFecha,
  type NoticiaApi,
  type NoticiaNueva,
} from '../../servicios/noticiasApi';

const FORMULARIO_VACIO: NoticiaNueva = {
  titulo: '',
  categoria: '',
  fecha: new Date().toISOString().slice(0, 10),
  imagen: '',
  subtitulo: '',
  resumen: '',
  contenido: '',
  detalles: '',
};

export const AdminNoticias = () => {
  const [noticias, setNoticias] = useState<NoticiaApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // Formulario: editandoId = null significa "nueva noticia"
  const [mostrarForm, setMostrarForm] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [form, setForm] = useState<NoticiaNueva>(FORMULARIO_VACIO);

  const cargar = async () => {
    try {
      setNoticias(await listarNoticias());
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudieron cargar las noticias.');
    } finally {
      setCargando(false);
    }
  };

  // Carga inicial (GET)
  useEffect(() => {
    listarNoticias()
      .then(setNoticias)
      .catch((e: Error) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  const cambiar = (campo: keyof NoticiaNueva, valor: string) => setForm({ ...form, [campo]: valor });

  const abrirNueva = () => {
    setEditandoId(null);
    setForm(FORMULARIO_VACIO);
    setMostrarForm(true);
  };

  const abrirEditar = (n: NoticiaApi) => {
    const { id, ...datos } = n;
    setEditandoId(id);
    setForm({ ...datos, detalles: datos.detalles ?? '', imagen: datos.imagen ?? '', subtitulo: datos.subtitulo ?? '' });
    setMostrarForm(true);
  };

  // POST /api/noticias o PUT /api/noticias/{id}
  const guardar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.categoria.trim() || !form.fecha || !form.resumen.trim() || !form.contenido.trim()) {
      alert('Completa título, categoría, fecha, resumen y contenido.');
      return;
    }
    try {
      if (editandoId === null) {
        await crearNoticia(form);
      } else {
        await actualizarNoticia(editandoId, form);
      }
      setMostrarForm(false);
      await cargar();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'No se pudo guardar la noticia.');
    }
  };

  // DELETE /api/noticias/{id}
  const eliminar = async (n: NoticiaApi) => {
    if (!confirm(`¿Eliminar la noticia "${n.titulo}"?`)) return;
    try {
      await eliminarNoticia(n.id);
      await cargar();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'No se pudo eliminar la noticia.');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold font-serif-vet text-vet-verde mb-1">Noticias</h2>
          <p className="text-secondary small m-0">Administra las noticias que se muestran en el sitio.</p>
        </div>
        <button
          onClick={abrirNueva}
          className="btn btn-sm text-white px-3 py-2 fw-semibold rounded-2"
          style={{ backgroundColor: '#184e36' }}
        >
          Nueva noticia
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {mostrarForm && (
        <div className="card p-4 rounded-3 border shadow-sm mb-4">
          <h5 className="fw-bold font-serif-vet text-vet-verde mb-3">
            {editandoId === null ? 'Nueva noticia' : 'Editar noticia'}
          </h5>
          <form onSubmit={guardar}>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary mb-1">Título</label>
                <input className="form-control" value={form.titulo} onChange={(e) => cambiar('titulo', e.target.value)} />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label small text-secondary mb-1">Categoría</label>
                <input className="form-control" value={form.categoria} onChange={(e) => cambiar('categoria', e.target.value)} />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label small text-secondary mb-1">Fecha</label>
                <input type="date" className="form-control" value={form.fecha} onChange={(e) => cambiar('fecha', e.target.value)} />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary mb-1">URL de la imagen</label>
                <input className="form-control" value={form.imagen} onChange={(e) => cambiar('imagen', e.target.value)} />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary mb-1">Subtítulo</label>
                <input className="form-control" value={form.subtitulo} onChange={(e) => cambiar('subtitulo', e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label small text-secondary mb-1">Resumen (se ve en el listado)</label>
                <input className="form-control" value={form.resumen} onChange={(e) => cambiar('resumen', e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label small text-secondary mb-1">Contenido (separa los párrafos con una línea en blanco)</label>
                <textarea rows={6} className="form-control" value={form.contenido} onChange={(e) => cambiar('contenido', e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label small text-secondary mb-1">Puntos clave (una línea por dato, formato «Etiqueta: valor»)</label>
                <textarea rows={3} className="form-control" value={form.detalles} onChange={(e) => cambiar('detalles', e.target.value)} />
              </div>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn text-white fw-semibold px-4" style={{ backgroundColor: '#184e36' }}>
                {editandoId === null ? 'Crear noticia' : 'Guardar cambios'}
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => setMostrarForm(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-responsive border rounded-3 shadow-sm">
        <table className="table table-hover align-middle mb-0 small">
          <thead className="bg-light text-secondary">
            <tr>
              <th className="py-3 px-3">FECHA</th>
              <th>TÍTULO</th>
              <th>CATEGORÍA</th>
              <th className="text-end px-3">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {cargando && (
              <tr>
                <td colSpan={4} className="text-center text-muted py-4">Cargando...</td>
              </tr>
            )}
            {noticias.map((n) => (
              <tr key={n.id}>
                <td className="px-3 text-muted">{formatearFecha(n.fecha)}</td>
                <td className="fw-semibold text-dark">{n.titulo}</td>
                <td>{n.categoria}</td>
                <td className="text-end px-3">
                  <div className="d-inline-flex gap-1">
                    <button
                      onClick={() => abrirEditar(n)}
                      className="btn btn-sm btn-outline-success py-1 px-2"
                      style={{ fontSize: '0.75rem' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminar(n)}
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

export default AdminNoticias;
