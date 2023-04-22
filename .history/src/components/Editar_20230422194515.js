import React from 'react'

export const Editar = ({peli, obtenerPeliculas}) => {
    const titleComponent = "Editar pelicula";
    const editarPeliculas = (e, id)=>{
        // Evitamos que el formulario recargue la web
        e.preventDefault()

        // obtenemos los valores del formulario
        let target = e.target;
        console.log(target);

        // Buscar el indice del objeto de la pelicula a actualizar
        const pelisAlmacenadas = obtenerPeliculas();

        // Recorremos con el metodo findIndex y comparamos si una condicion se cumple
        const indice = pelisAlmacenadas.findIndex(peli => peli.id === id)
        
        // Crear objeto con ese id de ese indice, con el titulo y la descripcion
        let peliActualizada = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        // Actulizar el elemento con ese indice
        pelisAlmacenadas[indice]= peliActualizada;

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
