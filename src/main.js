//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const button = () => {
    document.querySelector('.welcome').style.display = "none";
    document.querySelector('.second-page').style.display = "block";
  }


  document.querySelector(".pokeball").addEventListener("click", button);