import axios from "axios";

export function getPokemonApi(url = "https://pokeapi.co/api/v2/pokemon") {
  return axios.get(url);
}

export function getPokemonTypesApi(type) {
  return axios.get("https://pokeapi.co/api/v2/type/" + type);
}

export function getTypesApi() {
  return axios.get("https://pokeapi.co/api/v2/type");
}

export function getPokemonDetailsApi(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export function getPokemonEvolutionsApi(id) {
  return axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
}
