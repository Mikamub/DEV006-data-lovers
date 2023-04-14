// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data.books[0]);

// Funcionalidad para el boton de inicio
document.getElementById("botonInicioHP").addEventListener('click', function () { //aqui se llama el id del boton
  window.scrollTo({ // atributo de mover por la pagina
    top: 0, //aqui se le indica que tiene que moverse verticalmete hasta el punto 0/inicio
    behavior: "smooth"//forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de libros
document.getElementById("botonInicioLibros").addEventListener('click', function () { //aqui se llama el id del boton
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("libros").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de casas
document.getElementById("botonInicioCasas").addEventListener('click', function () { //aqui se llama el id del boton
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});

// Funcionalidad para el boton de personajes
document.getElementById("botonInicioPersonajes").addEventListener('click', function () {//aqui se llama el id del boton
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de hechizos
document.getElementById("botonInicioHechizos").addEventListener('click', function () {//aqui se llama el id del boton
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop,
    behavior: "smooth"
  });
});
// Funcionalidad para el boton de pociones
document.getElementById("botonInicioPociones").addEventListener('click', function () {//aqui se llama el id del boton
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});

const infoDataLibro = document.createElement("p");
infoDataLibro.classList.add("info-libro");

document.querySelectorAll(".libroPortada").forEach(function(libro) {
  libro.addEventListener('mouseover', function () {
    const valor = libro.getAttribute('value');
    const titulo = data.books[valor].title;
    const fechaLanzamiento = data.books[valor].releaseDay;
    const autor = data.books[valor].author;
    const descripcion = data.books[valor].description;

    infoDataLibro.innerText = "Libro: " + titulo + "\n" + "Día de lanzamiento: " + fechaLanzamiento + "\n" + "Autor: " + autor + "\n" + "Descripción: " + descripcion;
    libro.appendChild(infoDataLibro);

    // Agregar la clase 'girar' a la imagen
    libro.querySelector('img').classList.add('rotar');
  });

  libro.addEventListener('mouseleave', function () {
    // Eliminar el párrafo de información del libro
    libro.removeChild(infoDataLibro);

    // Esperar a que se complete la transición y luego agregar la clase 'mostrar-info'
    libro.querySelector('img').addEventListener('transitionend', function() {
      libro.querySelector('img').classList.remove('rotar');
      libro.classList.remove('mostrar-info');
    }, {once: true});

    // Agregar la clase 'mostrar-info' a la capa contenedora del libro
    libro.classList.add('mostrar-info');
  });
});
