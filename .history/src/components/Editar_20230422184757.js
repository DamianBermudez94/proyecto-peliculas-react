import React from 'react'

export const Editar = () => {
  return (
    <div>
        <h3>Editar pelicula</h3>
        <form>
            <input type="text" id="title" name="title" placeholder="Titulo de la pelicula" />
            <textarea id="description" name='description' placeholder="Descripción de la pelicula"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
