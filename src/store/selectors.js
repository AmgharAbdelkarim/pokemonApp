import { createSelector } from "reselect";

export const selectPokemon = (state) => state.pokemon;
export const selectPokemonTypes = (state) => state.pokemonTypes;
export const selectTypes = (state) => state.types;
export const selectPokemonDetails = (state) => state.pokemonDetails;
export const selectCurrentUrl = (state) => state.currentUrl;
export const selectNextUrl = (state) => state.nextUrl;
export const selectPrevUrl = (state) => state.prevUrl;
export const selectSize = (state) => state.size;
export const selectLoading = (state) => state.loading;
export const selectHasError = (state) => state.hasError;
export const selectSelectedTypes = (state) => state.selectedTypes;
export const selectPokemonEvolution = (state) => state.pokemonEvolution;

export const getPokemonSelector = createSelector(
  selectPokemon,
  (pokemon) => pokemon
);

export const getPokemonTypesSelector = createSelector(
  selectPokemonTypes,
  (pokemonTypes) => pokemonTypes
);

export const getTypesSelector = createSelector(selectTypes, (types) => types);

export const getPokemonDetailsSelector = createSelector(
  selectPokemonDetails,
  (pokemonDetails) => pokemonDetails
);

export const getPokemonEvolutionSelector = createSelector(
  selectPokemonEvolution,
  (pokemonEvolution) => pokemonEvolution
);

export const getCurrentUrlSelector = createSelector(
  selectCurrentUrl,
  (currentUrl) => currentUrl
);

export const getNextUrlSelector = createSelector(
  selectNextUrl,
  (nextUrl) => nextUrl
);

export const getPrevUrlSelector = createSelector(
  selectPrevUrl,
  (prevUrl) => prevUrl
);

export const getSizeSelector = createSelector(selectSize, (size) => size);

export const getLoadingSelector = createSelector(
  selectLoading,
  (loading) => loading
);

export const getHasErrorSelector = createSelector(
  selectHasError,
  (hasError) => hasError
);

export const getSelectSelectedTypes = createSelector(
  selectSelectedTypes,
  (selectedTypes) => selectedTypes
);
