import axios from "axios";
import {
  getPokemonApi,
  getTypesApi,
  getPokemonDetailsApi,
  getPokemonEvolutionsApi,
} from "../api";

jest.mock("axios");

describe("pokemon apis", () => {
  describe("getPokemonApi", () => {
    it("getPokemonApi", () => {
      let url = "https://pokeapi.co/api/v2/pokemon";
      getPokemonApi(url);
      expect(axios.get).toBeCalledWith(url);
    });
  });
  describe("getTypesApi", () => {
    it("getTypesApi", () => {
      getTypesApi();
      expect(axios.get).toBeCalledWith("https://pokeapi.co/api/v2/type");
    });
  });

  describe("getPokemonDetailsApi", () => {
    it("getPokemonDetailsApi", () => {
      let id = 1;
      getPokemonDetailsApi(id);
      expect(axios.get).toBeCalledWith(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
    });
  });

  describe("getPokemonEvolutionsApi", () => {
    it("getPokemonEvolutionsApi", () => {
      let id = 1;
      getPokemonEvolutionsApi(id);
      expect(axios.get).toBeCalledWith(
        `https://pokeapi.co/api/v2/evolution-chain/${id}`
      );
    });
  });
});
