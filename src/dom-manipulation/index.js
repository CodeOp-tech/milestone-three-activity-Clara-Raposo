/*
 * Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
 * para completar las preguntas debajo cuando hagas "submit" en el formulario:
 * x1. Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
 * x2. Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
 * 3. Haz un loop que cambie la clase de cada <li> a "list-item"
 * x5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
 * de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
 * pero crédito extra si lo logras sin añadir elementos adicionales.
 * 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */

function handleSubmit() {
  alert("Submit!");

  event.preventDefault();

  let form = event.target;

  //Cambia el tipo de letra
  const bodyPage = document.querySelector("body");
  bodyPage.style.fontFamily = "Verdana, sans-serif";

  //Muestra el contenido del los inputs en el span
  spanRestaurant.innerHTML = `${
    document.getElementById("restaurantsInput").value
  }`;
  spanNeighborhood.innerHTML = `${
    document.getElementById("neighborhoodInput").value
  }`;
  spanHometown.innerHTML = `${document.getElementById("hometownInput").value}`;

  //Crea un nuevo elemento <img>
  const newImg = document.createElement("img");
  const titleH1 = document.querySelector("h1");

  newImg.setAttribute("src", "foto.jpg");

  bodyPage.insertBefore(newImg, titleH1);

  //Cambia la clase de li a "list-item"
  const listUl = document.querySelector("ul");
  const liElement = listUl.children;

  for (let i = 0; i < liElement.length; i++) {
    liElement[i].classList.add("list-item");
  }

  form.reset();
}
const spanRestaurant = document.getElementById("restaurant");
const spanNeighborhood = document.getElementById("neighborhood");
const spanHometown = document.getElementById("hometown");

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
