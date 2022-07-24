import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, skip = 0) {
        const response = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
        return response.data
    }
}