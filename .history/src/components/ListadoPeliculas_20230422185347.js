import React, { useEffect, useState } from 'react'

export const ListadoPeliculas = ({setListadoPeliculasState,listadoPeliculasState}) => {

   const [editar, setEditar] = useState(0);

    // usamos useEffect para mostar de forma dinamica el contenido del  componente al cargar
    useEffect(()=>{
      console.log("soy el componente del listado de las peliculas")
      obtenerPeliculas();
    },[])
     
    // Funcion para obtener las peliculas del localStorage
    const obtenerPeliculas =()=>{
      let peliculas = JSON.parse(localStorage.getItem("pelis"));
      console.log("soy las peliculas",peliculas);
      setListadoPeliculasState(peliculas);
      return peliculas;
    }

    // Funcion para eliminar/quitar pelicula
    const quitarPelicula = ( id) =>{
     
      // obtenemos las peliculas almacenadas
      let pelisAlmacenadas = obtenerPeliculas();
   
      // Filtrar peliculas para que elimine del LocalStorage
      let newPeliculas = pelisAlmacenadas.filter( peli=> peli.id !== parseInt(id));

      // Actualizar estado del listado
      setListadoPeliculasState(newPeliculas);

      // Actualizar los datos del LocalStorage
      localStorage.setItem("pelis",JSON.stringify(newPeliculas));
    }

  return (
    <>

        {listadoPeliculasState !==null ? listadoPeliculasState.map( peli =>{
            return(
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.title}</h3>
                  <p className="description">{peli.description}</p>
                  <button className="edit" onClick={()=>{
                    setEditar(peli.id)
                  }}>Editar</button>
                  <button className="delete" onClick={()=> quitarPelicula(peli.id)}>Borrar</button>

                  {
                    editar
                  }
              </article>
            )            
          })
          : <p>no hay peliculas</p>
        }
       
            
    </>
  )
}
