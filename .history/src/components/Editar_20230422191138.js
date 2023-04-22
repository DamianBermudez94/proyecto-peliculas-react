import React from 'react'

export const Editar = () => {
    const titleComponent = "Editar pelicula";
  return (
    <div className='edit-form'>
        <h3 className='title'>{titleComponent}</h3>
        <form>
            <input  type="text" 
                    id="title" 
                    className='titulo-editado' 
                    name="title" 
                    defaultValue="Titulo de la pelicula" 
            />
            <textarea id="description" 
                    name='description' 
                    className="description-editada"
                    defaultValue="Descripción de la pelicula"
            />
            <input type="submit" id="save" value="Actualizar" />
        </form>
    </div>
  )
}
