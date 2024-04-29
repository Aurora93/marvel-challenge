interface Api {
  get(url: string): Promise<any>;
  put(url: string, body: object): Promise<any>;
  post(url: string, body: object): Promise<any>;
  patch(url: string, body?: object): Promise<any>;
  getBlob(url: string): Promise<Blob>;
  delete(url: string): Promise<any>;
}

export default Api;
