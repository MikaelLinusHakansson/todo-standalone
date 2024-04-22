import ApiService from "./apiService"

const USER_API_BASE_URL = "http://localhost:8080/api/auth"

class UserApiService extends ApiService {
    constructor() {
        super(USER_API_BASE_URL)
    }

    async post(data) {
        const newUser = {
            username: data.username,
            password: data.password
        }
        
        const response = await this.makeRequest('POST', '/login', newUser)
        return response 
    }

    async register(data) {
        const newUser = {
            username: data.username,
            password: data.password
        }
        
        const response = await this.makeRequest('POST', '/register', newUser)
        return response
    }
}
export default new UserApiService()