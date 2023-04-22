import React from 'react'

export const Editar = () => {
    const titleComponent = "Editar pelicula";
  return (
    <div className='edit-form'>
        <h3 className='title'>{titleComponent}</h3>
        <form>
            <input type="text" id="title" name="title" defaultValue="Titulo de la pelicula" />
            <textarea id="description" name='description' defaultValue="Descripción de la pelicula"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
