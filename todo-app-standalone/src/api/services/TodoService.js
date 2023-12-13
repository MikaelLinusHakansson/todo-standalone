import ApiService from "./apiService"

const TODO_API_BASE_URL = "http://localhost:8080"

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
}

export default new TodoService();