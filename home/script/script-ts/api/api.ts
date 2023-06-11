export default class API {
    private url:string;

    constructor(url: string) {
        this.url = url;
    }

    async getData(headers?:HeadersInit, pathParameters?:string) {
        try {
            const response = await fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, { headers });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
        }
    }

    async postData(body:object, headers?:HeadersInit) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }

    async deleteData(post_id:string, headers?:HeadersInit) {
        try {
            const response = await fetch(`${this.url}/${post_id}`, {
                method: 'DELETE',
                headers: headers,
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }
}
