import Api from "../domain/Api";

class RestApi implements Api {
  get(url: string) {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  put(url: string, body: object) {
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  post(url: string, body: object) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  patch(url: string, body?: object) {
    const options: any = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  delete(url: string) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  getBlob(url: string) {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.blob();
        }
        throw new Error(`${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export default new RestApi();
export { RestApi };
