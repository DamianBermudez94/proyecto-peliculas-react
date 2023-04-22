import React from 'react'

export const Editar = ({peli, obtenerPeliculas}) => {
    const titleComponent = "Editar pelicula";
    const editarPeliculas = (e, id)=>{
        e.preventDefault()
        let target = e.target;
        console.log(target);
        
    }
  return (
    <div className='edit-form'>
        <h3 className='title'>{titleComponent}</h3>
        <form onSubmit={e => editarPeliculas(e, peli.id)}>
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
