//guardamos la API URL
const API = 'https://rickandmortyapi.com/api/character/'
const $btnLoad = document.querySelector('#btnCharacter');
const $characterContainer = document.querySelector('.character--container');
const $btnContainer = document.querySelector('.btnContainer');
//generamos la funcion para traer la data 

(async function load(){

async function getData(url) {
    const array = [];
    try{
        //traemos la data
        let response = await fetch(url);
        //identificamos la cantidad de personajes
        let data = await response.json();
        //ciclo for para iterar las paginas en las que esta subdividida la info
        for (let i = 1; i<= data.info.pages;i++) {
            let response = await fetch(`${url}?page=${i}`);
            let data = await response.json();
            //ciclo for para mover a un array la info de los personajes
            for (let i = 0; i<data.results.length;i++){
            array.push(data.results[i])
            }
        }
        //una vez listo el array, lo retornamos
        return array;
        
    }
    catch(error){console.error(error)}
};

function characterTemplate(character){
    return(
     `  <div class="character--image-container">
        <img class="character_img" src="${character.image}" alt="Photo">
        </div>
        <h3 class="character_name">Nombre: ${character.name}</h3>
        <h4 class="character_species">Especie: ${character.species}</h4>
        <h4 class="character_origin">Origen: ${character.origin.name}</h4>`
        )
    }

    function createTemplate(HTMLString) {
        const html = 
        document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        return html.body.children[0];
      }
    
    function addClassToElement($element,className) {
        $element.classList.add(className);
    }

function getCharacter(){
    //generamos un id random para la URL
    let id = Math.round(Math.random() * (493 - 1) + 1);
    const character = arrayCharacters[id];
    const HTMLString = characterTemplate(character);
    const characterElement = createTemplate(HTMLString);
    $characterContainer.innerHTML = HTMLString;
    /* $characterContainer.append(characterElement); */
    }

async function cacheExists() {
    const cacheList = window.sessionStorage.getItem('arrayCharacters');
    if (cacheList) {
        
        return JSON.parse(cacheList);
    } else {
        const array = await getData(API);
        
        window.sessionStorage.setItem('arrayCharacters',JSON.stringify(array));
        return array;
    }
}
    //cargamos el array

const arrayCharacters =await cacheExists();
//mostramos el boton
addClassToElement($btnContainer,'show-btn');
$btnLoad.addEventListener('click',getCharacter);


})();
