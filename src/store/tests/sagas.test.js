import { call, put, takeLatest } from "redux-saga/effects";

import {
  getPokemon,
  watchGetPokemon,
  getTypes,
  watchGetTypes,
  getPokemonDetails,
  watchGetPokemonDetails,
  getPokemonEvolutions,
  watchGetPokemonEvolutions,
  watchGetPokemonTypes,
  getPokemonTypes,
} from "store/sagas";

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
describe("getPokemon", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should call getPokemon", () => {
    const watchGetPokemonSaga = watchGetPokemon();

    expect(watchGetPokemonSaga.next().value).toEqual(
      takeLatest(GET_POKEMON_REQUEST, getPokemon)
    );
  });
  it("should call getPokemonApi and setPokemon", () => {
    const getPokemonSaga = getPokemon();
    const response = {
      data: {
        results: [],
        next: "",
        previous: "",
      },
    };
    getPokemonSaga.next();
    getPokemonSaga.next();
    getPokemonSaga.next();
    getPokemonSaga.next();
    const currentUrl = getPokemonSaga.next("https://pokeapi.co/api/v2/pokemon");
    expect(currentUrl.value).toEqual(
      call(getPokemonApi, "https://pokeapi.co/api/v2/pokemon")
    );

    expect(getPokemonSaga.next(response).value).toEqual(
      put(setPokemon(response.data.results))
    );
    expect(getPokemonSaga.next().value).toEqual(
      put(setNextUrl(response.data.next))
    );
    expect(getPokemonSaga.next().value).toEqual(
      put(setPreviousUrl(response.data.previous))
    );
    expect(getPokemonSaga.next().done).toEqual(true);
  });

  it("should catch error  and call getPokemonFailed", () => {
    const getPokemonSaga = getPokemon();
    getPokemonSaga.next();
    expect(getPokemonSaga.throw("error").value).toEqual(
      put(getPokemonFailed())
    );
  });
});

describe("getPokemonTypes", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should call getPokemonTypes", () => {
    const watchGetPokemonTypesSaga = watchGetPokemonTypes();

    expect(watchGetPokemonTypesSaga.next().value).toEqual(
      takeLatest(GET_POKEMON_TYPES_REQUEST, getPokemonTypes)
    );
  });
  it("should call getPokemonTypesApi and setPokemonTypes", () => {
    let action = {
      payload: "grass",
      type: "GET_POKEMON_TYPES_REQUEST",
    };
    const payload = action.payload;
    const getPokemonTypesSaga = getPokemonTypes(action);
    const response = {
      data: {
        pokemon: [
          {
            type: { name: "fake name" },
          },
        ],
      },
    };
    expect(getPokemonTypesSaga.next().value).toEqual(
      call(getPokemonTypesApi, payload)
    );

    expect(getPokemonTypesSaga.next(response).value).toEqual(
      put(setPokemonTypes(response.data.pokemon))
    );
    expect(getPokemonTypesSaga.next().done).toEqual(true);
  });

  it("should catch error  and call getPokemonTypesFailed", () => {
    let payload = "fakeType";
    const getPokemonTypesSaga = getPokemonTypes(payload);
    getPokemonTypesSaga.next();
    expect(getPokemonTypesSaga.throw("error").value).toEqual(
      put(getPokemonTypesFailed())
    );
  });
});

describe("getTypes", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should call getTypes", () => {
    const watchGetTypesSaga = watchGetTypes();

    expect(watchGetTypesSaga.next().value).toEqual(
      takeLatest(GET_TYPES_REQUEST, getTypes)
    );
  });
  it("should call getTypesApi and setTypes", () => {
    const getTypesSaga = getTypes();
    const response = {
      data: {
        results: [
          {
            type: { name: "fake name" },
          },
        ],
      },
    };
    expect(getTypesSaga.next().value).toEqual(call(getTypesApi));

    expect(getTypesSaga.next(response).value).toEqual(
      put(setTypes(response.data.results))
    );
    expect(getTypesSaga.next().done).toEqual(true);
  });

  it("should catch error  and call setTypesFailed", () => {
    const getTypesSaga = getTypes();
    getTypesSaga.next();
    expect(getTypesSaga.throw("error").value).toEqual(put(setTypesFailed()));
  });
});

describe("getPokemonDetails", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should call getPokemonDetails", () => {
    const watchGetPokemonDetailsSaga = watchGetPokemonDetails();

    expect(watchGetPokemonDetailsSaga.next().value).toEqual(
      takeLatest(GET_POKEMON_DETAILS_REQUEST, getPokemonDetails)
    );
  });
  it("should call getPokemonDetailsApi and setPokemonDetails", () => {
    let action = {
      payload: "fakePayload",
      type: GET_POKEMON_DETAILS_REQUEST,
    };
    const payload = action.payload;
    const getPokemonDetailsSaga = getPokemonDetails(action);
    const response = {
      data: [],
    };

    expect(getPokemonDetailsSaga.next().value).toEqual(
      call(getPokemonDetailsApi, payload)
    );

    expect(getPokemonDetailsSaga.next(response).value).toEqual(
      put(setPokemonDetails(response.data))
    );
    expect(getPokemonDetailsSaga.next().done).toEqual(true);
  });

  it("should catch error  and call getPokemonDetailsFailed", () => {
    let id = 1;
    const getPokemonDetailsSaga = getPokemonDetails(id);
    getPokemonDetailsSaga.next();
    expect(getPokemonDetailsSaga.throw("error").value).toEqual(
      put(getPokemonDetailsFailed())
    );
  });
});

describe("getPokemonEvolutions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should call getPokemonEvolutions", () => {
    const watchGetPokemonEvolutionsSaga = watchGetPokemonEvolutions();

    expect(watchGetPokemonEvolutionsSaga.next().value).toEqual(
      takeLatest(GET_EVOLUTION_REQUEST, getPokemonEvolutions)
    );
  });
  it("should call getPokemonEvolutionsApi and getPokemonEvolutionsApi", () => {
    let action = {
      payload: "fakePayload",
      type: GET_EVOLUTION_REQUEST,
    };
    const payload = action.payload;
    const getPokemonEvolutionsSaga = getPokemonEvolutions(action);
    const response = {
      data: {
        chain: {
          evolves_to: [],
        },
      },
    };
    expect(getPokemonEvolutionsSaga.next().value).toEqual(
      call(getPokemonEvolutionsApi, payload)
    );

    expect(getPokemonEvolutionsSaga.next(response).value).toEqual(
      put(setPokemonEvolutions(response.data.chain.evolves_to))
    );
    expect(getPokemonEvolutionsSaga.next().done).toEqual(true);
  });

  it("should catch error  and call getPokemonEvolutionsFailed", () => {
    let id = 1;
    const getPokemonEvolutionsSaga = getPokemonEvolutions(id);
    getPokemonEvolutionsSaga.next();
    expect(getPokemonEvolutionsSaga.throw("error").value).toEqual(
      put(getPokemonEvolutionsFailed())
    );
  });
});
