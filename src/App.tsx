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
  );
}

export default App;