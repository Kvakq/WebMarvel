class MarvelSerice {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=2be89561a4879af05f6b8473e2d55219";

  getResurce = async (url) => {
    let res = await fetch(`${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResurce(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getResurce(`${this._apiBase}characters/${id}?${this._apiKey}`);
  };
}

export default MarvelSerice;
