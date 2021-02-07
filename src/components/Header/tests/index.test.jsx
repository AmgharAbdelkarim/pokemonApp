import { cleanup, render } from "@testing-library/react";

import Header from "components/Header";

afterEach(cleanup);

describe("Header", () => {
  it("should Header render correctly", () => {
    const { asFragment, getByText } = render(Header());
    expect(getByText("poke App")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
