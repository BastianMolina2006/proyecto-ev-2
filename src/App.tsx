import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/organismos/Navbar';
import Footer from './componentes/organismos/Footer';

import Inicio from './paginas/Inicio';
import Medicamentos from './paginas/Medicamentos';
import CategoriaMedicamento from './paginas/CategoriaMedicamentos';
import DetalleMedicamento from './paginas/DetalleMedicamento';

import Servicios from './paginas/Servicios';
import CategoriaServicio from './paginas/CategoriaServicio';
import DetalleServicio from './paginas/DetalleServicio';

import Login from './paginas/Login';
import Registro from './paginas/Registro';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          
          <Route path="/medicamentos/categoria/:categoriaSlug" element={<CategoriaMedicamento />} />
          <Route path="/medicamentos/:codigo" element={<DetalleMedicamento />} />

          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/categoria/:categoriaSlug" element={<CategoriaServicio />} />
          <Route path="/servicios/:codigo" element={<DetalleServicio />} />

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;