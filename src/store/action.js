import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAILED,
  GET_TYPES_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_FAILED,
  SET_CURRENT_URL,
  SET_NEXT_URL,
  SET_PREVIOUS_URL,
  SET_TYPE_SELECTED,
  SET_SIZE,
  CLEAR_TYPE_SELECTED,
  GET_EVOLUTION_REQUEST,
  GET_EVOLUTION_SUCCESS,
  GET_EVOLUTION_FAILED,
  GET_POKEMON_TYPES_REQUEST,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_FAILED,
} from "./constants";

export const getPokemon = (payload) => ({
  type: GET_POKEMON_REQUEST,
  payload,
});
export const setPokemon = (payload) => ({
  type: GET_POKEMON_SUCCESS,
  payload,
});
export const getPokemonFailed = () => ({
  type: GET_POKEMON_FAILED,
});

export const getPokemonTypes = (payload) => ({
  type: GET_POKEMON_TYPES_REQUEST,
  payload,
});
export const setPokemonTypes = (payload) => ({
  type: GET_POKEMON_TYPES_SUCCESS,
  payload,
});
export const getPokemonTypesFailed = () => ({
  type: GET_POKEMON_TYPES_FAILED,
});

export const getTypes = () => ({
  type: GET_TYPES_REQUEST,
});
export const setTypes = (payload) => ({
  type: GET_TYPES_SUCCESS,
  payload,
});
export const setTypesFailed = () => ({
  type: GET_TYPES_FAILED,
});
export const getPokemonDetails = (payload) => ({
  type: GET_POKEMON_DETAILS_REQUEST,
  payload,
});
export const setPokemonDetails = (payload) => ({
  type: GET_POKEMON_DETAILS_SUCCESS,
  payload,
});
export const getPokemonDetailsFailed = () => ({
  type: GET_POKEMON_DETAILS_FAILED,
});

export const getPokemonEvolutions = (payload) => ({
  type: GET_EVOLUTION_REQUEST,
  payload,
});
export const setPokemonEvolutions = (payload) => ({
  type: GET_EVOLUTION_SUCCESS,
  payload,
});
export const getPokemonEvolutionsFailed = () => ({
  type: GET_EVOLUTION_FAILED,
});

export const setCurrentUrl = (payload) => ({
  type: SET_CURRENT_URL,
  payload,
});

export const setNextUrl = (payload) => ({
  type: SET_NEXT_URL,
  payload,
});

export const setPreviousUrl = (payload) => ({
  type: SET_PREVIOUS_URL,
  payload,
});

export const setTypeSelected = (payload) => ({
  type: SET_TYPE_SELECTED,
  payload,
});

export const setSize = (payload) => ({
  type: SET_SIZE,
  payload,
});

export const clearTypeSelected = () => ({
  type: CLEAR_TYPE_SELECTED,
});
