import React, { useState } from 'react'

export const BuscadorPeliculas = () => {

  const [busqueda, setBusquedda] = useState("");

  const buscarPeli = (e)=>{
    console.log(busqueda);


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
