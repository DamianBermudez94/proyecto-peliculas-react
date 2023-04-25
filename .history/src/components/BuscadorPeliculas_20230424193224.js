import React, { useState } from 'react'

export const BuscadorPeliculas = ({listadoPeliculasState,setListadoPeliculasState}) => {

  const [busqueda, setBusqueda] = useState("");

  const buscarPeli = (e)=>{
    // creamos y actualizamo estado
    setBusqueda(e.target.value);

    // filtrar para buscar coincidencias
    let plisEncontradas = listadoPeliculasState.filter(peli=>{
    
      // recorremos el array de peliculas con el parametro titulo para que pueda realizar la busqueda

      // metedo tolowerCase para que tomo los valares y los pase a mayusculas

      // metodo includes busca si la busqueda esta incluida en el array
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    })

  }
  return (
    <div className="search">
        <h3 className="title">Buscador:{busqueda}</h3>
        <form >
            <input  type="text" 
                    id="search_field"
                    name='busqueda'
                    value={busqueda}
                    autoComplete='off'
                    onChange={buscarPeli}
            />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
