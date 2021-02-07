import { cleanup, fireEvent, waitFor } from "@testing-library/react";

import { renderWithRedux } from "helpers/testing";

import { Types } from "containers/TypesPage";
import { createBrowserHistory } from "history";

afterEach(cleanup);

describe("Types", () => {
  let props;
  beforeEach(() => {
    props = {
      pokemon: [
        {
          pokemon: {
            name: "pidgey",
            url: "https://pokeapi.co/api/v2/pokemon/16/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "pidgeotto",
            url: "https://pokeapi.co/api/v2/pokemon/17/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "pidgeot",
            url: "https://pokeapi.co/api/v2/pokemon/18/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "rattata",
            url: "https://pokeapi.co/api/v2/pokemon/19/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "raticate",
            url: "https://pokeapi.co/api/v2/pokemon/20/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "spearow",
            url: "https://pokeapi.co/api/v2/pokemon/21/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "fearow",
            url: "https://pokeapi.co/api/v2/pokemon/22/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "jigglypuff",
            url: "https://pokeapi.co/api/v2/pokemon/39/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "wigglytuff",
            url: "https://pokeapi.co/api/v2/pokemon/40/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "meowth",
            url: "https://pokeapi.co/api/v2/pokemon/52/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "persian",
            url: "https://pokeapi.co/api/v2/pokemon/53/",
          },
          slot: 1,
        },
        {
          pokemon: {
            name: "farfetchd",
            url: "https://pokeapi.co/api/v2/pokemon/83/",
          },
          slot: 1,
        },
      ],
      size: 0,
      loading: false,
      hasError: false,
      getPokemonTypes: jest.fn(),
      setSize: jest.fn(),
      match: {
        params: "fakeType",
      },
    };
  });
  afterEach(cleanup);
  it("should Types render correctly", () => {
    const { asFragment } = renderWithRedux(<Types {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render loading state if loading is true", () => {
    let newProps = { ...props, loading: true };
    const { getByText } = renderWithRedux(<Types {...newProps} />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
  it("should render error state if hasError is true", () => {
    let newProps = { ...props, hasError: true };
    const { getByText } = renderWithRedux(<Types {...newProps} />);
    expect(getByText("Something Went Wrong")).toBeInTheDocument();
  });
  it("should call setSize action when we click on nextButton", async () => {
    const { getByRole } = renderWithRedux(<Types {...props} size={-20} />);
    const nextButton = getByRole("button", { name: /next/ });
    fireEvent.click(nextButton);
    await waitFor(() => expect(props.setSize).toHaveBeenCalledWith(0));
  });
  it("should call setSize action when we click on prevButton", async () => {
    const { getByRole } = renderWithRedux(<Types {...props} size={20} />);
    const prevButton = getByRole("button", { name: /previous/ });
    fireEvent.click(prevButton);
    await waitFor(() => expect(props.setSize).toHaveBeenCalledWith(0));
  });
  it("should next button be disabled", () => {
    let newProps = { ...props, size: 20 };
    const { getByRole } = renderWithRedux(<Types {...newProps} />);
    const nextButton = getByRole("button", { name: /next/ });
    expect(nextButton).toBeDisabled();
  });
  it("should next button be disabled", async () => {
    let newProps = { ...props, size: 0 };
    const { getByRole } = renderWithRedux(<Types {...newProps} />);
    const prevButton = getByRole("button", { name: /previous/ });
    expect(prevButton).toBeDisabled();
  });

  it("should redirect to view pokemon page if i click on pokemon", async () => {
    const history = createBrowserHistory();
    jest.spyOn(history, "push");
    const { getByText } = renderWithRedux(
      <Types {...props} history={history} />
    );
    const pokemon = getByText("pidgey");
    fireEvent.click(pokemon);
    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith("/pokemon/pidgey")
    );
  });
});
