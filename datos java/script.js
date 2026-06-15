const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const color = document.getElementById("color");

const mostrarNombre = document.getElementById("mostrarNombre");
const mostrarCargo = document.getElementById("mostrarCargo");

const tarjeta = document.getElementById("tarjeta");
const galeria = document.getElementById("galeria");

const btnGenerar = document.getElementById("btnGenerar");


// Actualizar nombre en tiempo real

nombre.addEventListener("input", () => {
    mostrarNombre.textContent = nombre.value;
});


// Actualizar cargo en tiempo real

cargo.addEventListener("input", () => {
    mostrarCargo.textContent = cargo.value;
});


// Cambiar color de la tarjeta

color.addEventListener("input", () => {
    tarjeta.style.backgroundColor = color.value;
});


// Guardar tarjeta en la galería

btnGenerar.addEventListener("click", () => {

    const nuevaTarjeta = document.createElement("div");

    nuevaTarjeta.classList.add("tarjeta");

    nuevaTarjeta.style.backgroundColor =
        tarjeta.style.backgroundColor;

    nuevaTarjeta.innerHTML = `
        <h3>${mostrarNombre.textContent}</h3>
        <p>${mostrarCargo.textContent}</p>
    `;

    galeria.appendChild(nuevaTarjeta);

    nombre.value = "";
    cargo.value = "";

    mostrarNombre.textContent = "Nombre";
    mostrarCargo.textContent = "Cargo";

    tarjeta.style.backgroundColor = "lightgray";
});