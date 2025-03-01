// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
let nombre = document.getElementById('nombre');
//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
function validarNombre(nombre){
    if(nombre === ''){
        alert('Por favor, inserte un nombre');
    }
}

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
function agregarAmigo(nombre) {
  amigos.push({ nombre });
}

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarCampo() {
  nombre.value = '';
}




//Crea una función que recorra el array amigos 
function mostrarAmigos(amigos) {
    let lista = document.getElementById('lista');   
    lista.innerHTML = '';
    for( let i=0 ; i< amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigo[i];
        lista.appendChild(li);
    }
}
