// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputText = document.getElementById("amigo");
const btnAñadir = document.getElementById("button-add");
const btnSortear = document.querySelector('.button-draw');

btnAñadir.addEventListener('click', ejecutar);

const arrayAmigos = [];
const contenedorListaAmigos = document.getElementById("listaAmigos");
let text = "";

function ejecutar() {
    text = inputText.value // texto input
    if (text !== "") { // verifica que no este vacio
        generarLista(text);
        inputText.value = ""; // limpia input
    } else {
      alert("Escribe un nombre");
    } 
} 

function generarLista(text) {
    arrayAmigos.push(text);
    contenedorListaAmigos.textContent = "";
    arrayAmigos.forEach((nombre) => {
        contenedorListaAmigos.innerHTML +=`<li>${nombre}</li>`;
    });
};

btnSortear.addEventListener('click',Sortear);

function Sortear(){
    const random = Math.floor(Math.random()*arrayAmigos.length);
    const AmigoSecreto = arrayAmigos[random];
    const contentResultado = document.getElementById('resultado');
    contentResultado.innerHTML = `<li>El amigo secreto es: ${AmigoSecreto}</li>`;
};


