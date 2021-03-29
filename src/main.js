//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const firstButton = () => {
    document.querySelector('.first-page').style.display = "none";
    document.querySelector('.second-page').style.display = "block";
}

const kantoRegion = () => {
    const pokemon = data.pokemon.filter(data => data.generation.name == "kanto");
    console.log(pokemon);
    const containerK = document.querySelector(".kanto-results");
    const pokeMap = pokemon.map((data) => {
        containerK.innerHTML += `
        <li class="poke-image-k">
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
             </figure>
        </li>
`
    })

    document.querySelector('.second-page').style.display = "none";
    document.querySelector('.kanto-location').style.display = "block";
}

const johtoRegion = () => {
    const pokemonJohto = data.pokemon.filter(data => data.generation.name == "johto");
    console.log(pokemonJohto);

    const containerJ = document.querySelector(".johto-results");
    const pokeMapJ = pokemonJohto.map((data) => {
        containerJ.innerHTML += `
        <li class="poke-image-j">
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
             </figure>
        </li>
`
    })

    document.querySelector('.second-page').style.display = "none";
    document.querySelector('.johto-location').style.display = "block";
}

document.querySelector(".poke-button").addEventListener("click", firstButton);
document.querySelector(".kanto-page").addEventListener("click", kantoRegion);
document.querySelector(".johto-page").addEventListener("click", johtoRegion);