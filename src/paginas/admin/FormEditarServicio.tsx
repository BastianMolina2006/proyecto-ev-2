import React, { useState } from 'react';
import type { Servicio } from '../../data/tipos';

interface Props {
  servicio: Servicio;
  alGuardar: (servActualizado: Servicio) => void;
  alCancelar: () => void;
}

export const FormEditarServicio: React.FC<Props> = ({ servicio, alGuardar, alCancelar }) => {
  const [form, setForm] = useState<Servicio>({ ...servicio });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alGuardar(form);
  };

  return (
    <div className="card p-4 rounded-3 border border-secondary border-opacity-25 shadow-sm mb-4">
      <h5 className="fw-bold font-serif-vet text-vet-verde mb-4">
        Editar servicio {form.codigo}
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">ID</label>
            <input type="text" className="form-control bg-light" value={form.codigo} disabled />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Categoría</label>
            <select
              className="form-select"
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
            >
              <option value="Consultas">Consultas</option>
              <option value="Vacunación">Vacunación</option>
              <option value="Cirugía">Cirugía</option>
              <option value="Desparasitación">Desparasitación</option>
              <option value="Exámenes">Exámenes</option>
              <option value="Otros">Otros</option>
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
            <label className="form-label small text-secondary mb-1">Especie</label>
            <input
              type="text"
              className="form-control"
              value={form.especie}
              onChange={(e) => setForm({ ...form, especie: e.target.value })}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Duración</label>
            <input
              type="text"
              className="form-control"
              value={form.duracion}
              onChange={(e) => setForm({ ...form, duracion: e.target.value })}
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

        <div className="mb-4">
          <label className="form-label small text-secondary mb-1">Observaciones</label>
          <input
            type="text"
            className="form-control"
            value={form.observaciones}
            onChange={(e) => setForm({ ...form, observaciones: e.target.value })}
            required
          />
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

export default FormEditarServicio;