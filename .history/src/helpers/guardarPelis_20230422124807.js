export const guardarPelis = ({clave,elemento})=>{

    // Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    // Comprobar si el array exsite
    if (Array.isArray(elementos)) {
      // Actualiza y agrega un objeto al array 
      elementos.push(elemento)
    } else {

      // Crear un array con la nueva pelicula

      elementos = [elemento];
      
    }
    // Guardar los datos en el LocalStorage
    localStorage.setItem("pelis",JSON.stringify(elementos));
    // Devolver el objeto guardado
    return elemento;
   }