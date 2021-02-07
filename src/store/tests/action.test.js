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
} from "store/constants";
import {
  getPokemon,
  setPokemon,
  getPokemonFailed,
  getTypes,
  setTypes,
  setTypesFailed,
  getPokemonDetails,
  setPokemonDetails,
  getPokemonDetailsFailed,
  getPokemonEvolutions,
  setPokemonEvolutions,
  getPokemonEvolutionsFailed,
  setCurrentUrl,
  setNextUrl,
  setPreviousUrl,
  setTypeSelected,
  setSize,
  clearTypeSelected,
} from "store/action";

describe("getPokemon", () => {
  it("should set loading to true", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_POKEMON_REQUEST,
      payload,
    };

    expect(getPokemon(payload)).toEqual(expectedResult);
  });
});

describe("setPokemon", () => {
  it("should set loading to false and set pokemon", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_POKEMON_SUCCESS,
      payload,
    };

    expect(setPokemon(payload)).toEqual(expectedResult);
  });
});
describe("getPokemonFailed", () => {
  it("should set loading to false and hasError to true", () => {
    const expectedResult = {
      type: GET_POKEMON_FAILED,
    };

    expect(getPokemonFailed()).toEqual(expectedResult);
  });
});

describe("getTypes", () => {
  it("should set loading to true", () => {
    const expectedResult = {
      type: GET_TYPES_REQUEST,
    };

    expect(getTypes()).toEqual(expectedResult);
  });
});

describe("setTypes", () => {
  it("should set loading to false and set types", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_TYPES_SUCCESS,
      payload,
    };

    expect(setTypes(payload)).toEqual(expectedResult);
  });
});
describe("setTypesFailed", () => {
  it("should set loading to false and hasError to true", () => {
    const expectedResult = {
      type: GET_TYPES_FAILED,
    };

    expect(setTypesFailed()).toEqual(expectedResult);
  });
});

describe("getPokemonDetails", () => {
  it("should set loading to true", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_POKEMON_DETAILS_REQUEST,
      payload,
    };

    expect(getPokemonDetails(payload)).toEqual(expectedResult);
  });
});

describe("setPokemonDetails", () => {
  it("should set loading to false and set setPokemonDetails", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_POKEMON_DETAILS_SUCCESS,
      payload,
    };

    expect(setPokemonDetails(payload)).toEqual(expectedResult);
  });
});
describe("getPokemonDetailsFailed", () => {
  it("should set loading to false and hasError to true", () => {
    const expectedResult = {
      type: GET_POKEMON_DETAILS_FAILED,
    };

    expect(getPokemonDetailsFailed()).toEqual(expectedResult);
  });
});

describe("getPokemonEvolutions", () => {
  it("should set loading to true", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_EVOLUTION_REQUEST,
      payload,
    };

    expect(getPokemonEvolutions(payload)).toEqual(expectedResult);
  });
});

describe("setPokemonEvolutions", () => {
  it("should set loading to false and set pokemonEvolutions", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: GET_EVOLUTION_SUCCESS,
      payload,
    };

    expect(setPokemonEvolutions(payload)).toEqual(expectedResult);
  });
});
describe("getPokemonEvolutionsFailed", () => {
  it("should set loading to false and hasError to true", () => {
    const expectedResult = {
      type: GET_EVOLUTION_FAILED,
    };

    expect(getPokemonEvolutionsFailed()).toEqual(expectedResult);
  });
});

describe("setCurrentUrl", () => {
  it("should set current url", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: SET_CURRENT_URL,
      payload,
    };

    expect(setCurrentUrl(payload)).toEqual(expectedResult);
  });
});

describe("setNextUrl", () => {
  it("should set next url", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: SET_NEXT_URL,
      payload,
    };

    expect(setNextUrl(payload)).toEqual(expectedResult);
  });
});
describe("setPreviousUrl", () => {
  it("should setPreviousUrl", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: SET_PREVIOUS_URL,
      payload,
    };

    expect(setPreviousUrl(payload)).toEqual(expectedResult);
  });
});

describe("setTypeSelected", () => {
  it("should setTypeSelected", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: SET_TYPE_SELECTED,
      payload,
    };

    expect(setTypeSelected(payload)).toEqual(expectedResult);
  });
});

describe("setSize", () => {
  it("should setSize", () => {
    const payload = "fake-payload";
    const expectedResult = {
      type: SET_SIZE,
      payload,
    };

    expect(setSize(payload)).toEqual(expectedResult);
  });
});

describe("clearTypeSelected", () => {
  it("should clearTypeSelected", () => {
    const expectedResult = {
      type: CLEAR_TYPE_SELECTED,
    };

    expect(clearTypeSelected()).toEqual(expectedResult);
  });
});
