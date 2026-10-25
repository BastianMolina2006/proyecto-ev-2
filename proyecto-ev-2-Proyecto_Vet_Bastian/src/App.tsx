import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/organismos/Navbar';
import Footer from './componentes/organismos/Footer';
import Inicio from './paginas/Inicio';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;