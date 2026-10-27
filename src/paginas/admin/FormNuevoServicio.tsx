import React, { useState } from 'react';
import type { Servicio } from '../../data/tipos';

interface Props {
  siguienteCodigo: string;
  alCrear: (nuevo: Servicio) => void;
  alCancelar: () => void;
}

export const FormNuevoServicio: React.FC<Props> = ({ siguienteCodigo, alCrear, alCancelar }) => {
  const [codigo, setCodigo] = useState(siguienteCodigo);
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('Perro / Gato');
  const [duracion, setDuracion] = useState('30 min');
  const [precio, setPrecio] = useState<number | ''>('');
  const [observaciones, setObservaciones] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!codigo.trim() || !categoria || !nombre.trim()) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    const nuevoItem: Servicio = {
      codigo: codigo.trim().toUpperCase(),
      categoria,
      nombre: nombre.trim(),
      especie: especie.trim(),
      duracion: duracion.trim(),
      precio: Number(precio) || 0,
      observaciones: observaciones.trim() || 'Atención clínica registrada.'
    };

    alCrear(nuevoItem);
  };

  return (
    <div className="card p-4 rounded-3 border border-secondary border-opacity-25 shadow-sm mb-4">
      <h5 className="fw-bold font-serif-vet text-vet-verde mb-4">
        Nuevo servicio
      </h5>

      <form onSubmit={handleSubmit}>
        {/* Fila 1: Código, Categoría, Nombre */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">ID / Código</label>
            <input
              type="text"
              className="form-control"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="SV032"
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Categoría</label>
            <select
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="">Seleccionar categoría</option>
              <option value="Consultas">Consultas</option>
              <option value="Vacunación">Vacunación</option>
              <option value="Cirugía">Cirugía</option>
              <option value="Desparasitación">Desparasitación</option>
              <option value="Exámenes">Exámenes</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Nombre del servicio</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Ecocardiograma"
              required
            />
          </div>
        </div>

        {/* Fila 2: Especie, Duración, Tarifa */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Especie admitida</label>
            <input
              type="text"
              className="form-control"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              placeholder="Perro / Gato"
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Duración estimada</label>
            <input
              type="text"
              className="form-control"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              placeholder="30 min"
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Tarifa (CLP)</label>
            <input
              type="number"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="25000"
              required
            />
          </div>
        </div>

        {/* Fila 3: Observaciones y requisitos */}
        <div className="mb-4">
          <label className="form-label small text-secondary mb-1">Observaciones y requisitos</label>
          <input
            type="text"
            className="form-control"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Ej: Requiere ayuno previo de 8 horas."
          />
        </div>

        {/* Botones */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn text-white px-3 py-2 fw-semibold"
            style={{ backgroundColor: '#184e36' }}
          >
            Crear servicio
          </button>
          <button
            type="button"
            onClick={alCancelar}
            className="btn btn-outline-secondary px-3 py-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNuevoServicio;