import ApiService from "./apiService"

const TODO_API_BASE_URL = "http://localhost:8080/api/todo"

class TodoService extends ApiService {
    constructor() {
        super(TODO_API_BASE_URL)
    }

    async post(data) {
        const newTodo = {
            name: data.name,
            date: data.date,
            completed: false
        }

        return await this.makeRequest('POST', '/add', newTodo)
    }

    async put(id, data) {
        return await this.makeRequest('PUT', `/update/${id}`, data)
    }

    async getAll() {
        return await this.makeRequest('GET', '/getall')
    }

    async delete(data){
        await this.makeRequest('DELETE', `/delete/${data}`)
    }
}

export default new TodoService();