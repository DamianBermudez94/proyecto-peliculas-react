import React, { useState } from 'react'

export const AgregarPeliculas = () => {
  // Estado del componente
  const [peliculasState, setPeliculasState] = useState({});

  const { title, description} = peliculasState;
  // title del componente
  const tituloAgregarPeliculas = "Agregar peliculas";

  // Función para obtener los datos del formulario
   const agregarPeliculas = e =>{
    e.preventDefault()
    // Conseguir los datos del formulario
    const target = e.target;
    const title = target.title.value;
    const description = target.description.value;
    // crear un objeto para guardar las peliculas

    const listaPeliculas = {
      // funcion que permite crear ID de formar aleatoria
      id:new Date().getTime(),
      description,
      title
    }
    // guardar los datos del estado
    setPeliculasState(listaPeliculas)
   
    console.log(title,description) 
   }
  return (
    <div className="add">
        <h3 className="title">{tituloAgregarPeliculas}</h3>
        {(title && description) && "Has agregado la pelicula:" + title}
        <form onSubmit={agregarPeliculas}>
            <input type="text" id="title" name="title" placeholder="Titulo de la pelicula" />
            <textarea id="description" name='description' placeholder="Descripción de la pelicula"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
