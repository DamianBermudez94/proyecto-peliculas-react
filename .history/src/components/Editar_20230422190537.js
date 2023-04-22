import React from 'react'

export const Editar = () => {
    const titleComponent = "Editar pelicula";
  return (
    <div className='add'>
        <h3 className='title'>{titleComponent}</h3>
        <form>
            <input type="text" id="title" name="title" placeholder="Titulo de la pelicula" />
            <textarea id="description" name='description' placeholder="Descripción de la pelicula"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
