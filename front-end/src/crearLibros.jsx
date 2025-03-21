import { useState } from "react";

function  CrearLibros(){
    const[titulo,setTitulo]=useState("")
    const[autor,setAutor]=useState("")
    const[aniopubl,setAniopubl]=useState("")
    const[stick,setStick]=useState("")
    const handleSubmit=()=>{
        const respuesta=fetch("http://localhost:4006/api/libros",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({titulo,autor,aniopubl,stick})
        })
       
    }
    return(
        <div>
            <h1>infresa el Libros</h1>
            <form onSubmit={handleSubmit}>
                <label>titulo</label>
                <input type="text" onChange={(event)=>setTitulo(event.target.value)} placeholder="escriba el titulo"></input>
                <label>autor</label>
                <input type="text" onChange={(event)=>setAutor(event.target.value)} placeholder="escriba el Autor"></input>
                <label>anio</label>
                <input type="text" onChange={(event)=>setAniopubl(event.target.value)} placeholder="escriba el Año"></input>
                <label>stock</label>
                <input type="text" onChange={(event)=>setStick(event.target.value)} placeholder="escriba el Stock"></input>
                <button type="submit">Registrar Libros</button>
            </form>
        </div>
    )
}

export default CrearLibros