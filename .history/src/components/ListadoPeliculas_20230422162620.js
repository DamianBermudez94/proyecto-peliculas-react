import React, { useEffect } from 'react'

export const ListadoPeliculas = () => {
  const obtenerPeliculas =()=>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    console.log(peliculas);
  }
  useEffect(()=>{
    console.log("soy el componente del listado de las peliculas")
    obtenerPeliculas();
  },[])
  return (
    <>
        <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">victorroblesweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

            
    </>
  )
}
