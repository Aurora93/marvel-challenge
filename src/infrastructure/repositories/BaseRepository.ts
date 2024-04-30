import md5 from "crypto-js/md5";

abstract class BaseRepository {
  protected _createQueryParams(params: { [key: string]: any }) {
    if (!params) {
      return "";
    }

    const queryParams = Object.entries(params)
      .map(([key, value]) => {
        if (value === true) {
          return encodeURIComponent(key);
        }
        if (typeof value === "string" && value.length > 0) {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (Array.isArray(value) && value.length > 0) {
          const arrayQueryParams = value.map((item) =>
            encodeURIComponent(item)
          );
          return `${encodeURIComponent(key)}=${arrayQueryParams.join(",")}`;
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .filter((param) => param !== "")
      .join("&");

    return queryParams ? `?${queryParams}` : "";
  }

  protected _createAuthParams() {
    const ts = new Date().getTime();

    const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
    const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;

    const hash = md5(ts + privateKey + publicKey);

    return this._createQueryParams({
      apikey: publicKey,
      ts,
      hash,
    });
  }
}

export default BaseRepository;
