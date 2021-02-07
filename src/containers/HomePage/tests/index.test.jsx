import { cleanup, fireEvent, waitFor } from "@testing-library/react";

import { renderWithRedux } from "helpers/testing";

import { Home } from "containers/HomePage";
import { createBrowserHistory } from "history";

afterEach(cleanup);

describe("Home", () => {
  let props;
  beforeEach(() => {
    props = {
      pokemon: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
        },
        {
          name: "charmeleon",
          url: "https://pokeapi.co/api/v2/pokemon/5/",
        },
        {
          name: "charizard",
          url: "https://pokeapi.co/api/v2/pokemon/6/",
        },
        {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon/7/",
        },
        {
          name: "wartortle",
          url: "https://pokeapi.co/api/v2/pokemon/8/",
        },
        {
          name: "blastoise",
          url: "https://pokeapi.co/api/v2/pokemon/9/",
        },
        {
          name: "caterpie",
          url: "https://pokeapi.co/api/v2/pokemon/10/",
        },
        {
          name: "metapod",
          url: "https://pokeapi.co/api/v2/pokemon/11/",
        },
        {
          name: "butterfree",
          url: "https://pokeapi.co/api/v2/pokemon/12/",
        },
        {
          name: "weedle",
          url: "https://pokeapi.co/api/v2/pokemon/13/",
        },
        {
          name: "kakuna",
          url: "https://pokeapi.co/api/v2/pokemon/14/",
        },
        {
          name: "beedrill",
          url: "https://pokeapi.co/api/v2/pokemon/15/",
        },
        {
          name: "pidgey",
          url: "https://pokeapi.co/api/v2/pokemon/16/",
        },
        {
          name: "pidgeotto",
          url: "https://pokeapi.co/api/v2/pokemon/17/",
        },
        {
          name: "pidgeot",
          url: "https://pokeapi.co/api/v2/pokemon/18/",
        },
        {
          name: "rattata",
          url: "https://pokeapi.co/api/v2/pokemon/19/",
        },
        {
          name: "raticate",
          url: "https://pokeapi.co/api/v2/pokemon/20/",
        },
      ],
      size: 0,
      types: [],
      loading: false,
      hasError: false,
      currentUrl: "https://pokeapi.co/api/v2/pokemon",
      nextUrl: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      prevUrl: "https://pokeapi.co/api/v2/pokemon",
      getPokemon: jest.fn(),
      selectedTypes: [],
      setTypeSelected: jest.fn(),
      setCurrentUrl: jest.fn(),
      setSize: jest.fn(),
      getTypes: jest.fn(),
      clearTypeSelected: jest.fn(),
    };
  });
  afterEach(cleanup);
  it("should Home render correctly", () => {
    const { asFragment } = renderWithRedux(<Home {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render loading state if loading is true", () => {
    let newProps = { ...props, loading: true };
    const { getByText } = renderWithRedux(<Home {...newProps} />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
  it("should render error state if hasError is true", () => {
    let newProps = { ...props, hasError: true };
    const { getByText } = renderWithRedux(<Home {...newProps} />);
    expect(getByText("Something Went Wrong")).toBeInTheDocument();
  });
  it("should call setCurrentUrl action when we click on nextButton", async () => {
    const { getByRole } = renderWithRedux(<Home {...props} />);
    const nextButton = getByRole("button", { name: /next/ });
    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(props.setCurrentUrl).toHaveBeenCalledWith(props.nextUrl)
    );
  });
  it("should call setCurrentUrl action when we click on prevButton", async () => {
    const { getByRole } = renderWithRedux(<Home {...props} />);
    const prevButton = getByRole("button", { name: /previous/ });
    fireEvent.click(prevButton);
    await waitFor(() =>
      expect(props.setCurrentUrl).toHaveBeenCalledWith(props.prevUrl)
    );
  });
  it("should next button be disabled if next url is empty", () => {
    let newProps = { ...props, size: 20, nextUrl: "" };
    const { getByRole } = renderWithRedux(<Home {...newProps} />);
    const nextButton = getByRole("button", { name: /next/ });
    expect(nextButton).toBeDisabled();
  });
  it("should next button be disabled if prev url is empty", async () => {
    let newProps = { ...props, prevUrl: "" };
    const { getByRole } = renderWithRedux(<Home {...newProps} />);
    const prevButton = getByRole("button", { name: /previous/ });
    expect(prevButton).toBeDisabled();
  });

  it("should redirect to view pokemon page if i click on pokemon", async () => {
    const history = createBrowserHistory();
    jest.spyOn(history, "push");
    const { getByText } = renderWithRedux(
      <Home {...props} history={history} />
    );
    const pokemon = getByText("bulbasaur");
    fireEvent.click(pokemon);
    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith("/pokemon/bulbasaur")
    );
  });
});
