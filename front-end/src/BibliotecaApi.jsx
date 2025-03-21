import { useState,useEffect } from "react";
import {Navigate,useNavigate} from "react-router-dom"
import "./bibliotecaapi.css"

function BibliotecaApi(){
    const[Libros,setLibros]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4006/api/libros")
            .then(res=>res.json())
        .then(data=>setLibros(data))    
    },[])
    return(
        <div>
             <h2>LISTA DE LIBROS</h2>
            <table border="1" className="tablaUser">
               <thead>
                <tr>
                    <th>id</th>
                    <th>titulo</th>
                    <th>autor</th>
                    <th>aniopubl</th>
                    <th>stick</th>
                    <th>opción</th>
                </tr>
               </thead>
               <tbody>
                {
                    Libros.map(index=>(
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.titulo}</td>
                            <td>{index.autor}</td>
                            <td>{index.aniopubl}</td>
                            <td>{index.stick}</td>
                            <td>
                                <button onClick={()=>{navigate(`/Actualizar/${index.id}`)} }>Edit</button>
                                
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default BibliotecaApi;