import React, { useEffect, useState } from 'react'

export const ListadoPeliculas = () => {

  // Creamos un estado para poder obtener los datos asi lo podemos mostrar por pantalla

  const [listadoPeliculasState, setListadoPeliculasState ] = useState([]);

  const obtenerPeliculas =()=>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    console.log(peliculas);
    setListadoPeliculasState(peliculas);
  }

  // usamos useEffect para mostar de forma dinamica el contenido del  componente al cargar
  useEffect(()=>{
    console.log("soy el componente del listado de las peliculas")
    obtenerPeliculas();
  },[])
  return (
    <>

        {
          listadoPeliculasState.map(peli=>{
            return(
              <article key={peli.id}className="peli-item">
                  <h3 className="title">{}</h3>
                  <p className="description">{peli.description}</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>
            )            
          })
        }
        
            
    </>
  )
}
