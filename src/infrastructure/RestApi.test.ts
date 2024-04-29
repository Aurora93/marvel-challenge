import { vi, describe, beforeEach, it, expect } from "vitest";
import { RestApi } from "./RestApi";

describe("RestApi", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const expectedHeadersWithContentType = {
    "Content-Type": "application/json",
  };

  const testApiUrl = "https://testApiUrl.com";

  const mockedResponse = { test: "test" };
  const body = { bodyworkNumber: "123456" };

  const createApi = () => new RestApi();

  const mockJsonPromise = Promise.resolve(mockedResponse);
  const mockedFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
    ok: true,
  });

  const mockedRejectedFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
    ok: false,
    status: 500,
  });

  const createMockedRequestInit = ({
    method,
    withBody,
  }: {
    method: string;
    withBody: boolean;
  }) => {
    if (withBody) {
      return {
        method,
        headers: expectedHeadersWithContentType,
        body: JSON.stringify(body),
      };
    }
    return {
      method,
      headers: expectedHeadersWithContentType,
    };
  };

  describe("Get method", () => {
    it("should fetch correctly", () => {
      const api = createApi();
      global.fetch = vi.fn().mockImplementation(() => mockedFetchPromise);

      return api.get(testApiUrl).then((res: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toBeCalledWith(testApiUrl);
        expect(res).toEqual(mockedResponse);
      });
    });

    it("should return error if response is KO", () => {
      const api = createApi();
      const errorMessage = "Error: 500";
      global.fetch = vi
        .fn()
        .mockImplementation(() => mockedRejectedFetchPromise);

      return api.get(testApiUrl).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });

    it("should return error if fetch returns error", () => {
      const api = createApi();
      const errorMessage = "Test error";
      const mockFetchPromise = Promise.reject(errorMessage);
      global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

      return api.get(testApiUrl).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });
  });

  describe("Put method", () => {
    it("should fetch correctly", () => {
      const api = createApi();
      global.fetch = vi.fn().mockImplementation(() => mockedFetchPromise);

      return api.put(testApiUrl, body).then((res: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toBeCalledWith(
          testApiUrl,
          createMockedRequestInit({ method: "PUT", withBody: true })
        );
        expect(res).toEqual(mockedResponse);
      });
    });

    it("should return error if response is KO", () => {
      const api = createApi();
      const errorMessage = "Error: 500";
      global.fetch = vi
        .fn()
        .mockImplementation(() => mockedRejectedFetchPromise);

      return api.put(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });

    it("should return error if fetch returns error", () => {
      const api = createApi();
      const errorMessage = "Test error";
      const mockFetchPromise = Promise.reject(errorMessage);
      global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

      return api.put(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });
  });

  describe("Post method", () => {
    it("should fetch correctly", () => {
      const api = createApi();
      global.fetch = vi.fn().mockImplementation(() => mockedFetchPromise);

      return api.post(testApiUrl, body).then((res: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toBeCalledWith(
          testApiUrl,
          createMockedRequestInit({ method: "POST", withBody: true })
        );
        expect(res).toEqual(mockedResponse);
      });
    });

    it("should return error if response is KO", () => {
      const api = createApi();
      const errorMessage = "Error: 500";
      global.fetch = vi
        .fn()
        .mockImplementation(() => mockedRejectedFetchPromise);

      return api.post(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });

    it("should return error if fetch returns error", () => {
      const api = createApi();
      const errorMessage = "Test error";
      const mockFetchPromise = Promise.reject(errorMessage);
      global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

      return api.post(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });
  });

  describe("Patch method", () => {
    it("should fetch correctly", () => {
      const api = createApi();
      global.fetch = vi.fn().mockImplementation(() => mockedFetchPromise);

      return api.patch(testApiUrl).then((res: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toBeCalledWith(
          testApiUrl,
          createMockedRequestInit({ method: "PATCH", withBody: false })
        );
        expect(res).toEqual(mockedResponse);
      });
    });

    it("should return error if response is KO", () => {
      const api = createApi();
      const errorMessage = "Error: 500";
      global.fetch = vi
        .fn()
        .mockImplementation(() => mockedRejectedFetchPromise);

      return api.put(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });

    it("should return error if fetch returns error", () => {
      const api = createApi();
      const errorMessage = "Test error";
      const mockFetchPromise = Promise.reject(errorMessage);
      global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

      return api.put(testApiUrl, body).catch((err: any) => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(err).not.toBeUndefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(errorMessage);
      });
    });
  });
});
