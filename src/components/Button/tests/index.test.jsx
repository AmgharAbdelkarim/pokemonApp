import { cleanup, render } from "@testing-library/react";

import Button from "components/Button";

afterEach(cleanup);

describe("Button", () => {
  it("should Button render correctly", () => {
    const props = {
      clickHandler: jest.fn(),
      children: "fake button label",
      disabled: true,
    };
    const { asFragment, getByText } = render(<Button {...props} />);
    expect(getByText("fake button label")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it("should Button Be Disabled", () => {
    const props = {
      clickHandler: jest.fn(),
      children: "fake button label",
      disabled: true,
    };
    const { asFragment, getByText, getByRole } = render(<Button {...props} />);
    expect(getByText("fake button label")).toBeInTheDocument();
    const submitButton = getByRole("button", { name: /fake button label/ });

    expect(submitButton).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });
  it("should Button be Enabled", () => {
    const props = {
      clickHandler: jest.fn(),
      children: "fake button label",
      disabled: false,
    };
    const { asFragment, getByText, getByRole } = render(<Button {...props} />);
    expect(getByText("fake button label")).toBeInTheDocument();
    const submitButton = getByRole("button", { name: /fake button label/ });

    expect(submitButton).toBeEnabled();
    expect(asFragment()).toMatchSnapshot();
  });
});
