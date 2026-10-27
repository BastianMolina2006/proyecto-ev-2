import React, { useState } from 'react';
import type { Medicamento } from '../../data/tipos';

interface Props {
  siguienteCodigo: string;
  alCrear: (nuevo: Medicamento) => void;
  alCancelar: () => void;
}

export const FormNuevoMed: React.FC<Props> = ({ siguienteCodigo, alCrear, alCancelar }) => {
  const [codigo, setCodigo] = useState(siguienteCodigo);
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [principio, setPrincipio] = useState('');
  const [presentacion, setPresentacion] = useState('Blíster 10 comp.');
  const [especie, setEspecie] = useState('Perro / Gato');
  const [stock, setStock] = useState<number | ''>('');
  const [precio, setPrecio] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!codigo.trim() || !categoria || !nombre.trim() || !principio.trim()) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    const nuevoItem: Medicamento = {
      codigo: codigo.trim().toUpperCase(),
      categoria,
      nombre: nombre.trim(),
      principio: principio.trim(),
      presentacion: presentacion.trim(),
      especie: especie.trim(),
      stock: Number(stock) || 0,
      precio: Number(precio) || 0
    };

    alCrear(nuevoItem);
  };

  return (
    <div className="card p-4 rounded-3 border border-secondary border-opacity-25 shadow-sm mb-4">
      <h5 className="fw-bold font-serif-vet text-vet-verde mb-4">
        Nuevo medicamento
      </h5>

      <form onSubmit={handleSubmit}>
        {/* Fila 1: Código, Categoría, Nombre */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Código</label>
            <input
              type="text"
              className="form-control"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="ME001"
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
              placeholder=""
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Fila 2: Principio activo, Presentación, Especie */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Principio activo</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={principio}
              onChange={(e) => setPrincipio(e.target.value)}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Presentación</label>
            <input
              type="text"
              className="form-control"
              placeholder="Blíster 10 comp."
              value={presentacion}
              onChange={(e) => setPresentacion(e.target.value)}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Especie</label>
            <input
              type="text"
              className="form-control"
              placeholder="Perro / Gato"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Fila 3: Stock y Precio (CLP) */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Stock</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              value={stock}
              onChange={(e) => setStock(e.target.value === '' ? '' : Number(e.target.value))}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label small text-secondary mb-1">Precio (CLP)</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              value={precio}
              onChange={(e) => setPrecio(e.target.value === '' ? '' : Number(e.target.value))}
              required
            />
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn text-white px-3 py-2 fw-semibold"
            style={{ backgroundColor: '#184e36' }}
          >
            Crear medicamento
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

export default FormNuevoMed;