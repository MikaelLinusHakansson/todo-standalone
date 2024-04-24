export default class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async makeRequest(method, endpoint, data = null, accessToken = null , returnFullResponse = null) {
    const url = `${this.baseURL}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
    }

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`
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

      if (method === 'DELETE') {
          return null
      }

      return returnFullResponse ? response : await response.json()
    }
            
    catch (error) {
      console.error(`Error making ${method} request to ${url}`, error.message)
      throw error
    }
  }
}