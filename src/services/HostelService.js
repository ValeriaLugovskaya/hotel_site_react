 class HostelService {
  
    apiKey = 'http://127.0.0.1:8081/room/all';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getRoom = async (id) => {
        const res = await this.getResource(`${this.apiKey}`);
        return this._transformRoom(res[id]);
    }

  _transformRoom = (char) => {
      
        return {
                id: char.id,
                title: char.title,
                description: char.description,
                price: char.price,
                links: [
                    {link: char.links[0].link},
                    {link: char.links[1].link},
                    {link: char.links[2].link},
                    {link: char.links[3].link},
                ]
    }  
 }
 }
 export default HostelService;

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

export default HostelService; 
*/