//guardamos la API URL
const API = 'https://rickandmortyapi.com/api/character/'
const btnLoad = document.getElementsByClassName('.btnCharacter');
//selectores HTML: seleccionamos y guardamos la posicion donde insertaremos el codigo.
const $characterContainer = document.querySelector('.character--container');
//generamos la funcion para traer la data 
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        htmlString = ` <div class="character--container">
        <div class="character--image-container">
        <img class="character_img" src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg" alt="Photo">
        </div>
        <h3 class="character_name">Nombre: ${data.name}</h3>
        <h4 class="character_species">Especie: ${data.species}</h4>
        <h4 class="character_origin">Origen: ${data.origin.name}</h4>`;
    $characterContainer.innerHTML = htmlString;
    }

function getCharacter(){
//generamos un id random para la URL
let id = Math.round(Math.random() * (493 - 1) + 1);
const characterList = getData(`${API}${id}`)
}


