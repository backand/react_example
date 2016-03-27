import superagent from 'superagent';

export class HTTP {

  static get(url, headers) {
    return new Promise((resolve, reject) => {
      const request = superagent.get(url);

      for (let key in headers) {
        request.set(key, headers[key]);
      }

      request.end((err, resp) => {
        if (err) {
          reject(err.response);
          return;
        }

        resolve(resp.body);
      });
    });

  }

  static post(url, data, headers) {
    return new Promise((resolve, reject) => {
      const request = superagent.post(url)
        .send(data);

      for (let key in headers) {
        request.set(key, headers[key]);
      }

      request.end((err, resp) => {
        if (err) {
          reject(err.response);
          return;
        }

        resolve(resp.body);
      });
    });
  }

  static getAuthHeader(authType, token) {
    if (authType === 'anonymous') {
      return { AnonymousToken: token };
    }

    return { Authorization: `Bearer ${token}` };
  }

}
