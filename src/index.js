//guardamos la API URL
const API = 'https://rickandmortyapi.com/api/character/'
//selectores HTML: seleccionamos y guardamos la posicion donde insertaremos el codigo.
const $characterContainer = document.querySelector('.character--container');
//generamos la funcion para traer la data 
(async function load() {
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
//generamos un id random para la URL
let id = Math.round(Math.random() * (493 - 1) + 1);
const characterList = await getData(`${API}${id}/`);
//generamos el template de divs a insertar en nuestro HTML
function characterTemplate(characterList) {
    htmlString = ` <div class="character--container">
    <div class="character--image-container">
    <img class="character_img" src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" alt="Photo">
    </div>
    <h3 class="character_name">Nombre: ${characterList.name}</h3>
    <h4 class="character_species">Especie: ${characterList.species}</h4>
    <h4 class="character_origin">Origen: ${characterList.origin.name}</h4>`;
    return htmlString;
}
//guardamos en una variable los datos a sumar al HTML
htmlString = characterTemplate(characterList);
//Y los insertamos.
$characterContainer.innerHTML+=htmlString;
})();//llamamos a la funcion para inicializar





