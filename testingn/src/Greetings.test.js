import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Greetings from "./components/Greetings";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greetings />);
    // Act
    // ...nothing
    // Assert
    const greetingsWebElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(greetingsWebElement).toBeInTheDocument();
  });

  test("renders 'it's good to see' you if button was NOT clicked", () => {
    // Arrange
    render(<Greetings />);
    // Act
    // ...nothing
    // Assert
    const greetingsWebElement = screen.getByText(/it's good to see you/i, {
      exact: false,
    });
    expect(greetingsWebElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if button was clicked", () => {
    // Arrange
    render(<Greetings />);
    // Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });
    // Assert
    const greetingsWebElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(greetingsWebElement).toBeInTheDocument();
  });

  test("does not render 'it's good to see you' if button was clicked", () => {
    // Arrange
    render(<Greetings />);
    // Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });
    // Assert
    const greetingsWebElement = screen.queryByText("it's good to see you", {
      exact: false,
    });
    expect(greetingsWebElement).toBeNull();
  });
});
