import { AgregarPeliculas } from "./components/AgregarPeliculas";
import { BuscadorPeliculas } from "./components/BuscadorPeliculas";
import { ListadoPeliculas } from "./components/ListadoPeliculas";
import { useState } from "react";

function App() {
      // Creamos un estado para poder obtener los datos asi lo podemos mostrar por pantalla
      const [listadoPeliculasState, setListadoPeliculasState ] = useState([]);
  return (
      
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">

            {/*aqui van las peliculas*/}
         <ListadoPeliculas 
                listadoPeliculasState={listadoPeliculasState} setListadoPeliculasState={setListadoPeliculasState}
        />
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
           <BuscadorPeliculas/>
           <AgregarPeliculas 
                setListadoPeliculasState={setListadoPeliculasState}
            />

          
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

    </div>
  );
}

export default App;