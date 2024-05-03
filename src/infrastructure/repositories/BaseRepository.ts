import md5 from "crypto-js/md5";

abstract class BaseRepository {
  public _createQueryParams(
    params: { [key: string]: any },
    isAuthParams?: boolean
  ) {
    if (!params) {
      return "";
    }

    const queryParams = Object.entries(params)
      .filter(([, value]) => {
        if (typeof value === "string" && value.length === 0) {
          return false;
        }
        return true;
      })
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
      .join("&");

    if (isAuthParams) {
      return queryParams ? `?${queryParams}` : "";
    }
    return queryParams ? `&${queryParams}` : "";
  }

  public _createAuthParams() {
    const ts = new Date().getTime();

    const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
    const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;

    const hash = md5(ts + privateKey + publicKey);

    return this._createQueryParams(
      {
        apikey: publicKey,
        ts,
        hash,
      },
      true
    );
  }
}

export default BaseRepository;
