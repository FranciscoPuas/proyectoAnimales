import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

// Función para popular las opciones de animales en el select
const populateAnimalOptions = () => {
  fetch("assets/js/animales.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      const animalesData = data.animales; // Accede al arreglo "animales"
      const animalSelect = document.getElementById("animal");
      animalesData.forEach((animal) => {
        const option = document.createElement("option");
        option.value = animal.name;
        option.text = animal.name;
        animalSelect.add(option);
      });
    })
    .catch((error) => console.error("Error al cargar los datos:", error));
};

// Función para agregar un animal a la lista visual
const agregarAnimal = (animal) => {
  const animalesDiv = document.getElementById("Animales");
  const animalHTML = `
    <div class="card m-2 bg-dark text-white">
      <img src="assets/imgs/${animal.imagen}" class="card-img-top" alt="${animal.nombre}" data-toggle="modal" data-target="#exampleModal" onclick="mostrarModal('${animal.nombre}', '${animal.edad}', '${animal.comentarios}', '${animal.imagen}')">
      <div class="card-body text-center">
        <button class="btn btn-light" onclick="reproducirSonido('${animal.sonido}')">Escuchar</button>
      </div>
    </div>`;
  animalesDiv.innerHTML += animalHTML;
};

// Mostrar modal con información del animal
window.mostrarModal = (nombre, edad, comentarios, imagen) => {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `
    <h5>${nombre}</h5>
    <img src="assets/imgs/${imagen}" class="img-fluid mb-3" alt="${nombre}">
    <p>Edad: ${edad}</p>
    <p>Comentarios: ${comentarios}</p>`;
};

// Reproducir sonido del animal
window.reproducirSonido = (sonido) => {
  const audio = document.getElementById("player");
  audio.src = `assets/sounds/${sonido}`;
  audio
    .play()
    .catch((error) => console.error("Error al reproducir el sonido:", error));
};

// Manejo del evento de registro de un nuevo animal
document.getElementById("btnRegistrar").addEventListener("click", () => {
  const nombreAnimal = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  fetch("assets/js/animales.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      const animalesData = data.animales; // Accede al arreglo "animales"
      const animalData = animalesData.find((a) => a.name === nombreAnimal);

      if (animalData) {
        let animal;
        switch (animalData.name) {
          case "Leon":
            animal = new Leon(edad, comentarios);
            break;
          case "Lobo":
            animal = new Lobo(edad, comentarios);
            break;
          case "Oso":
            animal = new Oso(edad, comentarios);
            break;
          case "Serpiente":
            animal = new Serpiente(edad, comentarios);
            break;
          case "Aguila":
            animal = new Aguila(edad, comentarios);
            break;
          default:
            console.error("Animal no soportado:", animalData.name);
            return;
        }

        if (animal) {
          agregarAnimal({
            nombre: animal.nombre,
            edad: animal.edad,
            comentarios: animal.comentarios,
            imagen: animal.imagen,
            sonido: animalData.sonido,
          });
        }
      }
    })
    .catch((error) => console.error("Error al cargar los datos:", error));
});

// Inicializa la carga de opciones de animales
populateAnimalOptions();
