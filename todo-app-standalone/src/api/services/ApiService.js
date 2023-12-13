export default class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    async makeRequest(method, endpoint, data = null, returnFullResponse = null) {
        const url = `${this.baseURL}${endpoint}`

        const headers = {
            'Content-Type': 'application/json',
        }

        const config = {
            method: method,
            headers: headers,
        }

        if (data) {
            config.body = JSON.stringify(data)
        }

        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                throw new Error (`HTTP error! Status: ${response.status}`)
            }

            return returnFullResponse ? response : await response.json()
        } 

        catch (error) {
            console.error(`Error making ${method} request to ${url}`, error.message)
            throw error
        }
    }
}