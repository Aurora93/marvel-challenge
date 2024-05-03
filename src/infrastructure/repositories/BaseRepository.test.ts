import BaseRepository from "./BaseRepository";
import { describe, it, expect, vi } from "vitest";

describe("BaseRepository", () => {
  class RepositoryToTest extends BaseRepository {}
  const createRepository = () => new RepositoryToTest();

  describe("_createQueryParams method", () => {
    it("should create correct query params method with string params", () => {
      const repository = createRepository();
      const params = { id: "128248191", stringParam: "12345" };
      const expectedQueryParams = `&id=${params.id}&stringParam=${params.stringParam}`;
      const response = repository["_createQueryParams"](params);

      expect(response).toEqual(expectedQueryParams);
    });

    it("should create correct query params method with empty string params", () => {
      const repository = createRepository();
      const params = { id: "", stringParam: "12345" };
      const expectedQueryParams = `&stringParam=${params.stringParam}`;
      const response = repository["_createQueryParams"](params);

      expect(response).toEqual(expectedQueryParams);
    });

    it("should create correct query params method with boolean params", () => {
      const repository = createRepository();
      const params = { test: true };
      const expectedQueryParams = `&test`;
      const response = repository["_createQueryParams"](params);

      expect(response).toEqual(expectedQueryParams);
    });

    it("should create correct query params method with false boolean params", () => {
      const repository = createRepository();
      const params = { booleanParam: false, otherBooleanParam: true };
      const expectedQueryParams = `&booleanParam=false&otherBooleanParam`;
      const response = repository["_createQueryParams"](params);
      expect(response).toEqual(expectedQueryParams);
    });

    it("should create correct query params method with array params", () => {
      const repository = createRepository();
      const params = { arrayParams: ["element1", "element2", "element3"] };
      const expectedQueryParams = `&arrayParams=${params.arrayParams[0]},${params.arrayParams[1]},${params.arrayParams[2]}`;
      const response = repository["_createQueryParams"](params);

      expect(response).toEqual(expectedQueryParams);
    });

    it("should create correct query params method with mixed params", () => {
      const repository = createRepository();
      const params = {
        arrayParams: ["element1", "element2", "element3"],
        id: "",
        stringParam: "12345",
        booleanParam: true,
      };
      const expectedQueryParams = `&arrayParams=${params.arrayParams[0]},${params.arrayParams[1]},${params.arrayParams[2]}&stringParam=${params.stringParam}&booleanParam`;
      const response = repository["_createQueryParams"](params);

      expect(response).toEqual(expectedQueryParams);
    });
  });

  describe("_createAuthParams method", () => {
    it("should create correct auth params", () => {
      const repository = createRepository();

      const publicKey = "mockPublicKey";
      const privateKey = "mockPrivateKey";
      //  const mockHash = "mockHash";
      const mockedTime = 1234567890;
      Date.prototype.getTime = vi.fn(() => mockedTime);

      vi.stubEnv("VITE_MARVEL_API_PRIVATE_KEY", privateKey);
      vi.stubEnv("VITE_MARVEL_API_PUBLIC_KEY", publicKey);

      const expectedQueryParams = `?apikey=${publicKey}&ts=${mockedTime}&hash=503fd25bb6ba0aec68471484f273b7fe`;

      const response = repository["_createAuthParams"]();
      expect(response).toEqual(expectedQueryParams);
    });
  });
});
