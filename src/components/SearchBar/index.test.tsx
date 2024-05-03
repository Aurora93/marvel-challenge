import { vi, describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from ".";

describe("SearchBar Component", () => {
  it("should render the SearchBar component", () => {
    const { getByTestId } = render(
      <SearchBar placeholder="" onSearch={() => {}} />
    );
    const searchInput = getByTestId("search-input");
    const searchButton = getByTestId("search-button");
    expect(searchInput).toBeDefined();
    expect(searchButton).toBeDefined();
  });

  it("should update the search term when input changes", () => {
    const { getByTestId } = render(
      <SearchBar placeholder="" onSearch={() => {}} />
    );
    const searchInput = getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Hulk" } });

    expect(searchInput.value).toBe("Hulk");
  });

  it("should call onSearch function with correct search term when search button is clicked", () => {
    const onSearchMock = vi.fn();
    const { getByTestId } = render(
      <SearchBar placeholder="" onSearch={onSearchMock} />
    );
    const searchInput = getByTestId("search-input");
    const searchButton = getByTestId("search-button");
    fireEvent.change(searchInput, { target: { value: "Hulk" } });
    fireEvent.click(searchButton);
    expect(onSearchMock).toHaveBeenCalledWith("Hulk");
  });
});
