import { BrowserRouter as Router } from"react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BibliotecaApi from "./BibliotecaApi";
import CrearLibros from "./crearLibros";
import Actualizar from "./actualizarLibros";



function App() {


  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> <Link to="/BibliotecaApi">BibliotecaApi</Link></li>
            <li><Link to="/CrearLibros">CrearLibros</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<BibliotecaApi/>}/>
        <Route path="/BibliotecaApi" element={<BibliotecaApi/>}></Route>
        <Route path="/CrearLibros" element={<CrearLibros/>}></Route>
        <Route path="/Actualizar/:id" element={<Actualizar/>}></Route>
        <Route path="/buscarId" element={<Actualizar/>}></Route>
        
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
