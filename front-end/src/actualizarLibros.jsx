import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Actualizar(){
    const {id}=useParams()
    const[titulo,setTitulo]=useState("")
    const[autor,setAutor]=useState("")
    const[anio,setAnio]=useState("")
    const[stock,setStock]=useState("")
    useEffect(()=>{
        buscarId();
    },[])

    const buscarId = async ()=>{
        const res=await fetch(`http://localhost:4006/api/libros/${id}`);
        const data=await res.json();
        setTitulo(data.titulo);
        setAutor(data.autor);
        setAnio(data.anio);
        setStock(data.stock);
    }
    const actualizarReserva= async()=>{
        await fetch(`http://localhost:4006/api/libros/${id}`,{
            method:"PUT",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({titulo,autor,anio,stock})
            
        })
    }
    return (
        <div>
        <form onSubmit={actualizarReserva}>
            <label>titulo</label>
            <input type="text" value={titulo} onChange={(event)=>setTitulo(event.target.value)} placeholder="escriba el titulo"></input>
            <label>autor</label>
            <input type="text" value={autor} onChange={(event)=>setAutor(event.target.value)} placeholder="escriba el autor"></input>
            <label>anio</label>
            <input type="text" value={anio} onChange={(event)=>setAnio(event.target.value)} placeholder="escriba la anio"></input>
            <label>stock</label>
            <input type="text" value={anio} onChange={(event)=>setStock(event.target.value)} placeholder="escriba la stock"></input>
            <button type="submit">Registrar Libros</button>
        </form>
        </div>  
    );
}

export default Actualizar;