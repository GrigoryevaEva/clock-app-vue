class BaseApi {

  async get(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Api: An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json()
    return data
  }
}

export const api = new BaseApi()