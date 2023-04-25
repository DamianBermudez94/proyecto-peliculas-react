import React, { useState } from 'react'

export const BuscadorPeliculas = ({listadoPeliculasState,setListadoPeliculasState}) => {

  // Estado para la busqueda
  const [busqueda, setBusqueda] = useState("");

  // Estado para chequear si esta buscando correctamente
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e)=>{
    // creamos y actualizamo estado
    setBusqueda(e.target.value);

    // filtrar para buscar coincidencias
    let pelisEncontradas = listadoPeliculasState.filter(peli=>{
      console.log("soy la peli",peli);
      // recorremos el array de peliculas con el parametro titulo para que pueda realizar la busqueda
      // metedo tolowerCase para que tomo los valares y los pase a minusculas
      // metodo includes busca si la busqueda esta incluida en el string
      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
    })

    // filtramos para que si no le pasamos la busqueda correcta que devuelva todos los elementos del array

    if (busqueda.length <= 1 ||  pelisEncontradas <= 0 ) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setBusqueda(true);
    }else{
      setNoEncontrado(false)
    }
    // Seteamos el estado con las peliculas buscadas
    setListadoPeliculasState(pelisEncontradas)
  }
  return (
    <div className="search">
        <h3 className="title">Buscador:{busqueda}</h3>
        {(noEncontrado == true && busqueda.length >1) &&(
          <span className='no-encontrado'>No se ha encontrado la pelicula</span>
        )}
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
