import { vi } from "vitest";

export const createMockedApiReject = (
  method: "get" | "post" | "put" | "patch" | "delete" | "getBlob",
  errorMessage: string
) => ({
  get:
    method === "get"
      ? vi.fn().mockReturnValue(Promise.reject(errorMessage))
      : () => Promise.reject(),
  put:
    method === "put"
      ? vi.fn().mockReturnValue(Promise.reject(errorMessage))
      : () => Promise.reject(),
  post:
    method === "post"
      ? vi.fn().mockReturnValue(Promise.reject(errorMessage))
      : () => Promise.reject(),
  patch:
    method === "patch"
      ? vi.fn().mockReturnValue(Promise.reject(errorMessage))
      : () => Promise.reject(),
  delete:
    method === "delete"
      ? vi.fn().mockReturnValue(Promise.reject(errorMessage))
      : () => Promise.reject(),
});
