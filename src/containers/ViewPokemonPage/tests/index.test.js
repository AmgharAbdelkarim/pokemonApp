import { cleanup, fireEvent, waitFor } from "@testing-library/react";

import { renderWithRedux } from "helpers/testing";

import { ViewPokemon } from "containers/ViewPokemonPage";
import { createBrowserHistory } from "history";

afterEach(cleanup);

describe("ViewPokemon", () => {
  let props;
  beforeEach(() => {
    props = {
      pokemon: {
        name: "fake name",
        weight: 124,
        height: 12,
        abilities: [
          {
            ability: {
              name: "water-absorb",
              url: "https://pokeapi.co/api/v2/ability/11/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "damp",
              url: "https://pokeapi.co/api/v2/ability/6/",
            },
            is_hidden: false,
            slot: 2,
          },
          {
            ability: {
              name: "swift-swim",
              url: "https://pokeapi.co/api/v2/ability/33/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        types: [
          {
            type: {
              name: "fakeType",
            },
          },
        ],
        sprites: {
          front_default: "fake image Url",
        },
      },
      evolution: [
        {
          species: {
            name: "fakeName",
          },
        },
      ],
      loading: false,
      hasError: false,
      getPokemonDetails: jest.fn(),
      getPokemonEvolutions: jest.fn(),
      match: {
        params: "fakePokemon",
      },
    };
  });
  afterEach(cleanup);
  it("should ViewPokemon render correctly", () => {
    const { asFragment } = renderWithRedux(<ViewPokemon {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render loading state if loading is true", () => {
    let newProps = { ...props, loading: true };
    const { getByText } = renderWithRedux(<ViewPokemon {...newProps} />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
  it("should render error state if hasError is true", () => {
    let newProps = { ...props, hasError: true };
    const { getByText } = renderWithRedux(<ViewPokemon {...newProps} />);
    expect(getByText("Something Went Wrong")).toBeInTheDocument();
  });
  it("should redirect to view pokemon page if i click on pokemon", async () => {
    const history = createBrowserHistory();
    jest.spyOn(history, "push");
    const { getByText } = renderWithRedux(
      <ViewPokemon {...props} history={history} />
    );
    const pokemon = getByText("fakeName");
    fireEvent.click(pokemon);
    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith("/pokemon/fakeName")
    );
  });
  it("should redirect to view type page if i click on type", async () => {
    const history = createBrowserHistory();
    jest.spyOn(history, "push");
    const { getByText } = renderWithRedux(
      <ViewPokemon {...props} history={history} />
    );
    const pokemon = getByText("fakeType");
    fireEvent.click(pokemon);
    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith("/type/fakeType")
    );
  });
});
