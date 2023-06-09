import './App.css';
import Nav from './componentes/Nav/Nav';
import Habilidades from './componentes/Habilidades/Habilidades';
import Proyectos from './componentes/Proyectos/Proyectos';
import Inicio from './componentes/Inicio/Inicio';
import Home from './componentes/home/home';
import Contact from './componentes/Contacto/Contacto';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />}/> 
        <Route path="/habilidades" element={<Habilidades />}/>
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </div>
  );
}

export default App;
