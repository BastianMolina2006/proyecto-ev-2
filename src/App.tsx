<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom';
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

import AdminLayout from './paginas/admin/AdminLayout';
import AdminResumen from './paginas/admin/AdminResumen';
import AdminInventario from './paginas/admin/AdminInventario';
import AdminClientes from './paginas/admin/AdminClientes';


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

          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminResumen />} />
          <Route path="inventario" element={<AdminInventario />} />
          <Route path="clientes" element={<AdminClientes />} />
        </Route>
          <Route path="/administracion" element={<Navigate to="/admin" replace />} />

          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </div>
=======
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/organismos/Navbar';
import Footer from './componentes/organismos/Footer';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Noticias from './paginas/Noticias';
import DetalleNoticia from './paginas/DetalleNoticia';
import Contacto from './paginas/Contacto'; // <-- Importar Contacto

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<DetalleNoticia />} />
        <Route path="/contacto" element={<Contacto />} /> {/* <-- Agregar la ruta */}
        <Route path="*" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
>>>>>>> Proyecto_Vet_Bastian
  );
}

export default App;