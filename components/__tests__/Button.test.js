import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonComponent from "../Button";
describe("ButtonComponent", () => {
  test("renders correctly", () => {
    const { getByText } = render(<ButtonComponent text="Press Me" />);
    const button = getByText("Press Me");
    expect(button).toBeTruthy();
  });

  test("calls btnAction when pressed", () => {
    const mockAction = jest.fn();
    const { getByText } = render(
      <ButtonComponent text="Press Me" btnAction={mockAction} />
    );
    const button = getByText("Press Me");
    fireEvent.press(button);
    expect(mockAction).toHaveBeenCalled();
  });

  test("applies custom styles", () => {
    const customContainerStyle = { backgroundColor: "red" };
    const customTextStyle = { color: "blue" };

    const { getByText, getByTestId } = render(
      <ButtonComponent
        text="Press Me"
        btnContainerStyle={customContainerStyle}
        textStyle={customTextStyle}
      />
    );

    const button = getByText("Press Me");
    const container = getByTestId("btnContainer");

    expect(container.props.style).toEqual(
      expect.objectContaining(customContainerStyle)
    );
    expect(button.props.style).toEqual(
      expect.objectContaining(customTextStyle)
    );
  });
});
