import { cleanup, render } from "@testing-library/react";

import Card from "components/Card";

afterEach(cleanup);

describe("Card", () => {
  it("should Card render correctly", () => {
    const props = {
      clickHandler: jest.fn(),
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
    };
    const { asFragment } = render(<Card {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
