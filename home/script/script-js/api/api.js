export default class API {
    constructor(url) {
        this.url = url;
    }

    async getData(headers, pathParameters) {
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

    async postData(body, headers) {
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

    async deleteData(post_id, headers) {
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
