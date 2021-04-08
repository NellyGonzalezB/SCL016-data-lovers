//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import card from './card.js';




/*const pokeOrder = data.pokemon;
const pokeAZ = pokeOrder.filter(pokeOrder => pokeOrder.name);
pokeAZ.sort((a, b) => {
    if (a.name<b.name) {
        return -1;
        }
    if (a.name>b.name) {
//       return 1;
//    }
})
console.log(pokeAZ);
*/
const firstButton = () => {
    document.querySelector(".first-page").style.display = "none";
    document.querySelector(".second-page").style.display = "block";
}

const menu = () => {
    document.querySelector('.first-page').style.display = "block";
    document.querySelector('.second-page').style.display = "none";
}

const regions = () => {
    document.querySelector('.second-page').style.display = "none";
}

const menuKanto = () => {
    document.querySelector('.kanto-location').style.display = "block";
    document.querySelector('.second-page').style.display = "none";
}

const menuJohto = () => {
    document.querySelector('.johto-location').style.display = "block";
    document.querySelector('.second-page').style.display = "none";
}

const pokeOrder = data.pokemon;
const pokeAZ = pokeOrder.filter(pokeOrder => pokeOrder.name);
pokeAZ.sort((a, b) => {
    if (a.name<b.name) {
        return -1;
        }
  
//const order = document.querySelector(".aOrder");
     //   order.innerHTML += ("aOrder");
})
console.log(pokeAZ);


const kantoRegion = () => {
    const pokemon = data.pokemon.filter(data => data.generation.name == "kanto");
        console.log(pokemon);
    const containerK = document.querySelector(".kanto-results");
    pokemon.map((data) => {
        containerK.innerHTML += `
        <li class="poke-image" id=${data.name}>
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
             </figure>
        </li>
        `
    })

    document.querySelector(".second-page").style.display = "none";
    document.querySelector(".kanto-location").style.display = "block";
    document.querySelectorAll(".poke-image").forEach((element) =>{
        element.addEventListener("click", (event) =>{
            const pokeCard = event.currentTarget.id; 
            console.log(pokeCard);
            const pokeInfo = data.pokemon.filter(info => info.name == pokeCard);
            console.log(pokeInfo);
            const kCard = document.querySelector(".page-container");
            pokeInfo.map((data) => {
                kCard.innerHTML += `
                <div class="card-container">
                <div class="img-container">
                    <h1 class="poke-number">N°${data.num}</h1>
                    <div class="circle" id="circle">
                        <img class="card-image" src=${data.img} alt="">
                    </div>
                </div>
                <div class="info-container">
                    <div class="poke-description">
                        <h1 class="card-name">${data.name}</h1>
                        <p class="about">${data.about}</p>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <h3 class="pokemon-height">Height</h3>
                            </td>
                            <td>
                                <h3 class="pokemon-weight">Weight</h3>
                            </td>
                            <td>
                                <h3 class="pokemon-type">Type</h3>
                            </td>
                        </tr>
                        <tr>
                            <td class="height">${data.size.height}</td>
                            <td class="weight">${data.size.weight}</td>
                            <td class="type-icon">${data.type}</td>
                          
                        </tr>
                    </table>
                </div>
            </div>
                `
           
            })
            document.querySelector(".kanto-location").style.display = "none";
            document.querySelector(".information-card").style.display = "block";
        })
           
    })
 
}

const johtoRegion = () => {
    const pokemonJohto = data.pokemon.filter(data => data.generation.name == "johto");
    console.log(pokemonJohto);

    const containerJ = document.querySelector(".johto-results");
    pokemonJohto.map((data) => {
        containerJ.innerHTML += `
        <li class="poke-image" id=${data.name}>
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
             </figure>
        </li>
        `
    })

    document.querySelector(".second-page").style.display = "none";
    document.querySelector(".johto-location").style.display = "block";
    document.querySelectorAll(".poke-image").forEach((element) =>{
        element.addEventListener("click", (event) =>{
            const pokeCardJ = event.currentTarget.id; 
            console.log(pokeCardJ);
            const pokeInfoJ = data.pokemon.filter(info => info.name == pokeCardJ);
            console.log(pokeInfoJ);
            const jCard = document.querySelector(".page-container");
            pokeInfoJ.map((data) => {
                jCard.innerHTML += `
                <div class="card-container">
                <div class="img-container">
                    <h1 class="poke-number">N°${data.num}</h1>
                    <div class="circle" id="circle">
                        <img class="card-image" src=${data.img} alt="">
                    </div>
                </div>
                <div class="info-container">
                    <div class="poke-description">
                        <h1 class="card-name">${data.name}</h1>
                        <p class="about">${data.about}</p>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <h3 class="pokemon-height">Height</h3>

                            </td>
                            <td>
                                <h3 class="pokemon-weight">Weight</h3>
                            </td>
                            <td>
                                <h3 class="pokemon-type">Type</h3>
                            </td>
                        </tr>
                        <tr>
                            <td class="height">${data.size.height}</td>
                            <td class="weight">${data.size.weight}</td>
                            <td class="type-icon">${data.type}</td>
                        </tr>
                    </table>
                </div>
            </div>
                `
            })
            document.querySelector(".johto-location").style.display = "none";
            document.querySelector(".information-card").style.display = "block";
        })
    })

}



document.querySelector(".poke-button").addEventListener("click", firstButton);
document.querySelector(".kanto-link").addEventListener("click", kantoRegion);
document.querySelector(".johto-link").addEventListener("click", johtoRegion);
document.querySelector(".home").addEventListener("click", menu);
document.querySelector(".region").addEventListener("click", regions);
document.querySelector(".kanto-menu").addEventListener("click", menuKanto);
document.querySelector(".johto-menu").addEventListener("click", menuJohto);





/*const pokeCard = () = {
    const about = data.pokemon.filter (data => data.about);
    const height = data.pokemon.filter (data => data.size.height);
    const weight = data.pokemon.filter (data => data.size.weight); 
    const type = data.pokemon.filter (data => data.type);
    const evolution = data.pokemon.filter (data => data.evolution.name);

const card = document.querySelector(".values");
    const pokeInfoK = pokeCard.map((data) => {
        values.InnerHTML += `
        <div class="values">
          <tr>
            <td class="height">${data.size.height}</td>
            <td class="weight">${data.size.weight}</td>
             <td class="type-icon">${data.type}</td>
          </tr>   
        </div>    
    `
    })



const pokedragon = pokeData.filter(pokeData => pokeData.type.includes ("dragon"));
console.log(pokedragon);


const pokefairy = pokeData.filter(pokeData => pokeData.type.includes ("fairy"));
console.log(pokefairy);


const pokefire = pokeData.filter(pokeData => pokeData.type.includes ("fire"));
console.log(pokefire);


const pokeghost = pokeData.filter(pokeData => pokeData.type.includes ("ghost"));
console.log(pokeghost);

const pokeground = pokeData.filter(pokeData => pokeData.type.includes ("ground"));
console.log(pokeground);

const pokenormal = pokeData.filter(pokeData => pokeData.type.includes ("normal"));
console.log(pokenormal);

const pokedark = pokeData.filter(pokeData => pokeData.type.includes ("dark"));
console.log(pokedark);

const pokelectric = pokeData.filter(pokeData => pokeData.type.includes ("electric"));
console.log(pokelectric);

const pokefight = pokeData.filter(pokeData => pokeData.type.includes ("fighting"));
console.log(pokefight);

const pokefly = pokeData.filter(pokeData => pokeData.type.includes ("flying"));
console.log(pokefly);

const pokegrass = pokeData.filter(pokeData => pokeData.type.includes ("grass"));
console.log(pokegrass);

const pokeice = pokeData.filter(pokeData => pokeData.type.includes ("ice"));
console.log(pokeice);

const pokerock = pokeData.filter(pokeData => pokeData.type.includes ("rock"));
console.log(pokerock);

const pokewater = pokeData.filter(pokeData => pokeData.type.includes ("water"));
console.log(pokewater);
*/


//.addEventListener("click", pokeCard);