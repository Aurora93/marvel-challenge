import { Url } from "../application/characterDTOMapper";

export const getUrl = (urls: Url[]): string => {
  return urls.find((url) => url.type === "comiclink")?.url || "";
};
