import React, { useState } from 'react';
import type { Medicamento } from '../../data/tipos';

interface Props {
  medicamento: Medicamento;
  alGuardar: (medActualizado: Medicamento) => void;
  alCancelar: () => void;
}

export const FormEditarMed: React.FC<Props> = ({ medicamento, alGuardar, alCancelar }) => {
  const [form, setForm] = useState<Medicamento>({ ...medicamento });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alGuardar(form);
  };

  return (
    <div className="card p-4 rounded-3 border border-secondary border-opacity-25 shadow-sm mb-4">
      <h5 className="fw-bold font-serif-vet text-vet-verde mb-4">
        Editar medicamento {form.codigo}
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Código</label>
            <input type="text" className="form-control bg-light" value={form.codigo} disabled />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Categoría</label>
            <select
              className="form-select"
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
            >
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

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Principio activo</label>
            <input
              type="text"
              className="form-control"
              value={form.principio}
              onChange={(e) => setForm({ ...form, principio: e.target.value })}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Presentación</label>
            <input
              type="text"
              className="form-control"
              value={form.presentacion}
              onChange={(e) => setForm({ ...form, presentacion: e.target.value })}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Especie</label>
            <input
              type="text"
              className="form-control"
              value={form.especie}
              onChange={(e) => setForm({ ...form, especie: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Stock</label>
            <input
              type="number"
              className="form-control"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Precio (CLP)</label>
            <input
              type="number"
              className="form-control"
              value={form.precio}
              onChange={(e) => setForm({ ...form, precio: Number(e.target.value) })}
              required
            />
          </div>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn text-white px-3 py-2 fw-semibold" style={{ backgroundColor: '#184e36' }}>
            Guardar cambios
          </button>
          <button type="button" onClick={alCancelar} className="btn btn-outline-secondary px-3 py-2">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditarMed;