import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, skip = 0) {
        const response = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`)
        return response.data
    }

    static async getCommentByPost(postId) {
        const response = await axios.get(`https://dummyjson.com/comments/post/${postId}`)
        return response
    }
}