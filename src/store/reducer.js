import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_POKEMON_TYPES_REQUEST,
  GET_POKEMON_TYPES_SUCCESS,
  GET_POKEMON_TYPES_FAILED,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAILED,
  GET_TYPES_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_FAILED,
  GET_EVOLUTION_REQUEST,
  GET_EVOLUTION_SUCCESS,
  GET_EVOLUTION_FAILED,
  SET_CURRENT_URL,
  SET_NEXT_URL,
  SET_PREVIOUS_URL,
  SET_TYPE_SELECTED,
  SET_SIZE,
  CLEAR_TYPE_SELECTED,
} from "store/constants";

const initialState = {
  pokemon: [],
  pokemonTypes: [],
  pokemonDetails: [],
  pokemonEvolution: [],
  types: [],
  currentUrl: "https://pokeapi.co/api/v2/pokemon",
  nextUrl: "",
  prevUrl: "",
  size: 0,
  selectedTypes: [],
  loading: false,
  hasError: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case GET_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case GET_POKEMON_TYPES_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_POKEMON_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonTypes: action.payload,
      };
    case GET_POKEMON_TYPES_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };

    case GET_TYPES_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        types: action.payload,
      };
    case GET_TYPES_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case GET_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonDetails: action.payload,
      };
    case GET_POKEMON_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case GET_EVOLUTION_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_EVOLUTION_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonEvolution: action.payload,
      };
    case GET_EVOLUTION_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case SET_CURRENT_URL:
      return {
        ...state,
        currentUrl: action.payload,
      };
    case SET_NEXT_URL:
      return {
        ...state,
        nextUrl: action.payload,
      };
    case SET_PREVIOUS_URL:
      return {
        ...state,
        prevUrl: action.payload,
      };
    case SET_TYPE_SELECTED:
      return {
        ...state,
        selectedTypes: [...state.selectedTypes, action.payload],
      };
    case CLEAR_TYPE_SELECTED:
      return {
        ...state,
        selectedTypes: [],
      };
    case SET_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
}
