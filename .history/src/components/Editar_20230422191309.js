import React from 'react'

export const Editar = ({peli}) => {
    const titleComponent = "Editar pelicula";
  return (
    <div className='edit-form'>
        <h3 className='title'>{titleComponent}</h3>
        <form>
            <input  type="text" 
                    id="title" 
                    className='titulo-editado' 
                    name="title" 
                    defaultValue={peli.title} 
            />
            <textarea id="description" 
                    name='description' 
                    className="description-editada"
                    defaultValue={peli.description}
            />
            <input type="submit" id="save" value="Actualizar" />
        </form>
    </div>
  )
}
