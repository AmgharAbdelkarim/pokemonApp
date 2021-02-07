import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  setPokemon,
  setNextUrl,
  setPreviousUrl,
  getPokemonFailed,
  setTypes,
  setTypesFailed,
  setPokemonDetails,
  getPokemonDetailsFailed,
  setPokemonEvolutions,
  getPokemonEvolutionsFailed,
  setPokemonTypes,
  getPokemonTypesFailed,
} from "store/action";
import {
  getPokemonApi,
  getTypesApi,
  getPokemonDetailsApi,
  getPokemonEvolutionsApi,
  getPokemonTypesApi,
} from "store/api";
import {
  GET_POKEMON_REQUEST,
  GET_TYPES_REQUEST,
  GET_POKEMON_DETAILS_REQUEST,
  GET_EVOLUTION_REQUEST,
  GET_POKEMON_TYPES_REQUEST,
} from "store/constants";
import {
  getCurrentUrlSelector,
  getPokemonSelector,
  getNextUrlSelector,
  getPrevUrlSelector,
} from "store/selectors";
export function* getPokemon() {
  try {
    const nextUrl = yield select(getNextUrlSelector);
    const prevUrl = yield select(getPrevUrlSelector);
    const pokemon = yield select(getPokemonSelector);
    const url = yield select(getCurrentUrlSelector);
    const { data: response } = yield call(getPokemonApi, url);

    if (response.results) {
      yield put(setPokemon(response.results));
    } else if ((nextUrl || prevUrl) && response.pokemon) {
      yield put(setPokemon(response.pokemon));
    } else if (response.pokemon) {
      yield put(setPokemon([...pokemon, ...response.pokemon]));
    }
    yield put(setNextUrl(response.next));
    yield put(setPreviousUrl(response.previous));
  } catch {
    yield put(getPokemonFailed());
  }
}

export function* watchGetPokemon() {
  yield takeLatest(GET_POKEMON_REQUEST, getPokemon);
}

export function* getPokemonTypes({ payload }) {
  try {
    const { data: response } = yield call(getPokemonTypesApi, payload);
    yield put(setPokemonTypes(response.pokemon));
  } catch {
    yield put(getPokemonTypesFailed());
  }
}

export function* watchGetPokemonTypes() {
  yield takeLatest(GET_POKEMON_TYPES_REQUEST, getPokemonTypes);
}

export function* getTypes() {
  try {
    const { data: response } = yield call(getTypesApi);
    yield put(setTypes(response.results));
  } catch {
    yield put(setTypesFailed());
  }
}

export function* watchGetTypes() {
  yield takeLatest(GET_TYPES_REQUEST, getTypes);
}

export function* getPokemonDetails({ payload }) {
  try {
    const { data: response } = yield call(getPokemonDetailsApi, payload);
    yield put(setPokemonDetails(response));
  } catch {
    yield put(getPokemonDetailsFailed());
  }
}

export function* watchGetPokemonDetails() {
  yield takeLatest(GET_POKEMON_DETAILS_REQUEST, getPokemonDetails);
}
export function* getPokemonEvolutions({ payload }) {
  try {
    const { data: response } = yield call(getPokemonEvolutionsApi, payload);
    yield put(setPokemonEvolutions(response.chain.evolves_to));
  } catch {
    yield put(getPokemonEvolutionsFailed());
  }
}

export function* watchGetPokemonEvolutions() {
  yield takeLatest(GET_EVOLUTION_REQUEST, getPokemonEvolutions);
}
export default [
  watchGetPokemon,
  watchGetPokemonTypes,
  watchGetTypes,
  watchGetPokemonDetails,
  watchGetPokemonEvolutions,
];
