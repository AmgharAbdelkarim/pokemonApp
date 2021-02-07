import { cleanup, render } from "@testing-library/react";

import Error from "components/Error";

afterEach(cleanup);

describe("EmptyState", () => {
  it("should EmptyState render correctly", () => {
    const { asFragment, getByText } = render(Error());
    expect(getByText("Something Went Wrong")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
