import React, { useEffect} from 'react'

export const ListadoPeliculas = ({setListadoPeliculasState,listadoPeliculasState}) => {

    // Creamos un estado para poder obtener los datos asi lo podemos mostrar por pantalla
    //const [listadoPeliculasState, setListadoPeliculasState ] = useState([]);

    // usamos useEffect para mostar de forma dinamica el contenido del  componente al cargar
    useEffect(()=>{
      console.log("soy el componente del listado de las peliculas")
      obtenerPeliculas();
    },[])

    const obtenerPeliculas =()=>{
      let peliculas = JSON.parse(localStorage.getItem("pelis"));
      console.log("soy las peliculas",peliculas);
      setListadoPeliculasState(peliculas);
    }

 

  return (
    <>

        {listadoPeliculasState !=null ? listadoPeliculasState.map( peli =>{
            return(
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.title}</h3>
                  <p className="description">{peli.description}</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>
            )            
          })
          : <p>no hay peliculas</p>
        }
        
            
    </>
  )
}
