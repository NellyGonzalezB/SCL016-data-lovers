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
            document.querySelector(".johto-location").style.display = "none";
            document.querySelector(".information-card").style.display = "block";
        })
    })
}


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


const pokeCard = () => {
        document.querySelector('.kanto-location').style.display = "none";
        document.querySelector('.information-card').style.display = "block";    
}
*/ 

const clickCard = (event) => {
    const pokeCard = event.currentTarget.name; 
    console.log(pokeCard); 

    //document.querySelector(".poke-image").style.display = "none";
   // document.querySelector(".information-card").style.display = "block";
}


document.querySelector(".poke-button").addEventListener("click", firstButton);
document.querySelector(".kanto-page").addEventListener("click", kantoRegion);
document.querySelector(".johto-page").addEventListener("click", johtoRegion);

//.addEventListener("click", pokeCard);