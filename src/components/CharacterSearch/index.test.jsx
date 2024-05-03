import React from "react";
import { render } from "@testing-library/react";
import CharacterSearch from "./";
import {  describe, expect, it } from "vitest";


describe("CharacterSearch", () => {
  it("renders search bar and spinner while loading", () => {
    const { getByPlaceholderText, getByTestId } = render(<CharacterSearch />);
    
    expect(getByPlaceholderText("Name of character")).toBeTruthy();
    expect(getByTestId("spinner-wrapper")).toBeTruthy();
  });
});
