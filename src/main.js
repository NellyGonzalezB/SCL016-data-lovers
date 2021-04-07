//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import card from './card.js';

const firstButton = () => {
    document.querySelector('.first-page').style.display = "none";
    document.querySelector('.second-page').style.display = "block";
}

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

    document.querySelector('.second-page').style.display = "none";
    document.querySelector('.kanto-location').style.display = "block";
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

    document.querySelector('.second-page').style.display = "none";
    document.querySelector('.johto-location').style.display = "block";
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


/*
const pokeData = data.pokemon;
const poketype = pokeData.filter(pokeData => pokeData.type == "poison");
console.log(poketype);


const pokedragon = pokeData.filter(pokeData => pokeData.type == "dragon");
console.log(pokedragon);


const pokefairy = pokeData.filter(pokeData => pokeData.type == "fairy");
console.log(pokefairy);


const pokefire = pokeData.filter(pokeData => pokeData.type == "fire");
console.log(pokefire);


const pokeghost = pokeData.filter(pokeData => pokeData.type == "ghost");
console.log(pokeghost);

const pokeground = pokeData.filter(pokeData => pokeData.type == "ground");
console.log(pokeground);

const pokenormal = pokeData.filter(pokeData => pokeData.type == "normal");
console.log(pokenormal);

const pokedark = pokeData.filter(pokeData => pokeData.type == "dark");
console.log(pokedark);

const pokelectric = pokeData.filter(pokeData => pokeData.type == "electric");
console.log(pokelectric);

const pokefight = pokeData.filter(pokeData => pokeData.type == "fighting");
console.log(pokefight);

const pokefly = pokeData.filter(pokeData => pokeData.type == "flying");
console.log(pokefly);

const pokegrass = pokeData.filter(pokeData => pokeData.type == "grass");
console.log(pokegrass);

const pokeice = pokeData.filter(pokeData => pokeData.type == "ice");
console.log(pokeice);

const pokerock = pokeData.filter(pokeData => pokeData.type == "rock");
console.log(pokerock);

const pokewater = pokeData.filter(pokeData => pokeData.type == "water");
console.log(pokewater);

*/

document.querySelector(".poke-button").addEventListener("click", firstButton);
document.querySelector(".kanto-link").addEventListener("click", kantoRegion);
document.querySelector(".johto-link").addEventListener("click", johtoRegion);

