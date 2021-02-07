import { cleanup, render } from "@testing-library/react";

import EmptyState from "components/EmptyState";

afterEach(cleanup);

describe("EmptyState", () => {
  it("should EmptyState render correctly", () => {
    const { asFragment, getByText } = render(EmptyState());
    expect(getByText("No Data Found")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
