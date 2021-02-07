import { cleanup, render } from "@testing-library/react";

import Footer from "components/Footer";

afterEach(cleanup);

describe("Footer", () => {
  it("should Footer render correctly", () => {
    const { asFragment, getByText } = render(Footer());
    expect(getByText("All rights reserved © 2020")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
