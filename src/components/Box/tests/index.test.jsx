import React from "react";

import { cleanup, render } from "@testing-library/react";

import Box from "components/Box";

afterEach(cleanup);

describe("Box", () => {
  it("should Box render correctly", () => {
    const props = {
      clickHandler: jest.fn(),
      name: "fake pokemon",
    };
    const { asFragment, getByText } = render(<Box {...props} />);
    expect(getByText("fake pokemon")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
