import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemons = () => {
    axios.get(baseURL + `pokemon`)
        .then((response) => response.data.results);
}

export const getPokemon = (name) => {
    axios.get(baseURL + `pokemon/${name}`)
        .then((response) => response.data);
}