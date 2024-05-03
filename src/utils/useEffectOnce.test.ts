import { renderHook } from "@testing-library/react";
import { useEffectOnce } from "./useEffectOnce";
import { vi } from "vitest";
import { describe, expect, it } from "vitest";

describe("useEffectOnce hook", () => {
  it("should call effect only once", () => {
    const mockEffect = vi.fn();

    renderHook(() => useEffectOnce(mockEffect));

    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it("should call cleanup function if component unmounts after effect", () => {
    const mockCleanup = vi.fn();

    vi.spyOn(global.console, "error").mockImplementation(() => {});

    const { unmount } = renderHook(() => useEffectOnce(() => mockCleanup));

    unmount();

    expect(mockCleanup).toHaveBeenCalledTimes(1);

    // Restore the original implementation of console.error
    vi.restoreAllMocks();
  });
});
