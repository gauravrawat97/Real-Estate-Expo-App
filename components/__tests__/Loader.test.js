import React from "react";
import { render } from "@testing-library/react-native";
import Loader from "../Loader";
import { windowHeight, windowWidth } from "../../utils/Device";

describe("Loader component", () => {
  it("renders without crashing", () => {
    render(<Loader />);
  });

  it("renders ActivityIndicator component", () => {
    const { getByTestId } = render(<Loader />);
    const activityIndicator = getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });

  it("sets correct styles", () => {
    const { getByTestId } = render(<Loader />);
    const modalBackground = getByTestId("modal-background");
    const customContainerStyle = {
      position: "absolute",
      backgroundColor: "transparent",
      height: windowHeight,
      width: windowWidth,
      justifyContent: "center",
      alignItems: "center",
      elevation: 10,
      zIndex: 99999,
    };

    expect(modalBackground.props.style).toEqual(
      expect.objectContaining(customContainerStyle)
    );
  });
});
