import { vi } from "vitest";

export const createMockedApi = (
  method: "get" | "post" | "put" | "patch" | "delete" | "getBlob",
  response?: object
) => ({
  get:
    method === "get"
      ? vi.fn().mockReturnValue(Promise.resolve(response))
      : () => Promise.resolve({}),
  put:
    method === "put"
      ? vi.fn().mockReturnValue(Promise.resolve(response))
      : () => Promise.resolve({}),
  post:
    method === "post"
      ? vi.fn().mockReturnValue(Promise.resolve(response))
      : () => Promise.resolve(),
  patch:
    method === "patch"
      ? vi.fn().mockReturnValue(Promise.resolve(response))
      : () => Promise.resolve(),
  delete:
    method === "delete"
      ? vi.fn().mockReturnValue(Promise.resolve(response))
      : () => Promise.resolve(),
});
