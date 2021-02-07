import { cleanup, render } from "@testing-library/react";

import LoadingState from "components/Loading";

afterEach(cleanup);

describe("LoadingState", () => {
  it("should LoadingState render correctly", () => {
    const { asFragment, getByText } = render(LoadingState());
    expect(getByText("Loading...")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
