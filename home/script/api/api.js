export default class API {
    constructor(url) {
        this.url = url;
    }

    async getData(headers) {
        try {
            const response = await fetch(this.url, {headers});
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
        }
    }
}
