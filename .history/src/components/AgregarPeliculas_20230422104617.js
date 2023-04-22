import React from 'react'

export const AgregarPeliculas = () => {
  const tituloAgregarPeliculas = "Agregar peliculas";
   const agregarPeliculas = e =>{
    e.preventDefault()
    // Conseguir los datos del formulario
    const target = e.target;
    console.log(target) 
   }
  return (
    <div className="add">
        <h3 className="title">{tituloAgregarPeliculas}</h3>
        <form onSubmit={agregarPeliculas}>
            <input type="text" id="title" name="title" placeholder="Titulo" />
            <textarea id="description" name='description' placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
