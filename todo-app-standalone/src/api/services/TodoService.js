import ApiService from "./apiService"

const TODO_API_BASE_URL = "http://localhost:8080"

export default class TodoService extends ApiService {
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