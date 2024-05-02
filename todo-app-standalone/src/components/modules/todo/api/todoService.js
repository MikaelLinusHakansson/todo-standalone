import ApiService from '@/api/services/apiService'
const TODO_API_BASE_URL = 'http://localhost:8080/api/todo'

class TodoService extends ApiService {
  constructor() {
    super(TODO_API_BASE_URL)
  }

  async post(data, accessToken) {
    const username = localStorage.getItem('username')

    const newTodo = {
        name: data.name,
        date: data.date,
        completed: false,
        username: username
    }

    const json = await this.makeRequest('POST', '/add', newTodo, accessToken, null)
    return json
  }

  async put(data, accessToken) {
    const json = await this.makeRequest('PUT', `/update`, data, accessToken, null)
    return json
  }
    
  async getAll(accessToken) {
    const json = await this.makeRequest('GET', '/getall', null, accessToken, null)
    return json
  }

  async getById(id, accessToken) {
    const json = await this.makeRequest('GET', `/getbyid/${id}`, null, accessToken, null)
    return json
  }
    
    // async makeRequest(method, endpoint, data = null, accessToken = null , returnFullResponse = null)
  async delete(data, accessToken){
    const query = new URLSearchParams()

    query.set('id', data.id)
    
    const json = await this.makeRequest('DELETE', `/delete?${query}`, null, accessToken, null)
    return json
  }
}

export default new TodoService()