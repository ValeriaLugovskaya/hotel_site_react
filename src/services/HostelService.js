/* class HostelService {
  
    apiKey = 'f6e4ac667f544936bed6a7fc74a69704';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async () => {
        
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=f6e4ac667f544936bed6a7fc74a69704`);
        
        return this._transformCharacter(res);
    }

 _transformCharacter = (res) => {
        return {
            thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
            name: res.data.results[0].name,
        }
} 
/* 
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    } 
 
}

export default HostelService; */