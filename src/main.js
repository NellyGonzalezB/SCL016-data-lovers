//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const firstButton = () => {
  document.querySelector('.first-page').style.display = "none";
  document.querySelector('.second-page').style.display = "block";
}

const kantoRegion = () => {
  document.querySelector('.second-page').style.display = "none";
  document.querySelector('.kanto-location').style.display = "block";
}

const johtoRegion = () => {
  document.querySelector('.second-page').style.display = "none";
  document.querySelector('.johto-location').style.display = "block";
}

document.querySelector(".poke-button").addEventListener("click", firstButton);
document.querySelector(".kanto-page").addEventListener("click", kantoRegion);
document.querySelector(".johto-page").addEventListener("click", johtoRegion);