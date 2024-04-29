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
}

export default BaseRepository;
