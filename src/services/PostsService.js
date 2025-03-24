import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Posts.js"
import { AppState } from "@/AppState.js"

class PostsService {
  async createPost(postData) {
    const response = await api.post(`api/posts`, postData)
    logger.log(`created Posts baby`, response.data)
    const post = new Post(response.data)
    AppState.posts.push(post)
  }
  async getPostsByCreatorId(creatorId) {
    const response = await api.get(`api/posts?creatorId=${creatorId}`)
    logger.log(`got posts`, response.data)

  }

  async getPosts() {
    const response = await api.get(`api/posts`)
    logger.log(`got posts son`, response.data)
    const posts = response.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
  }

  async changePostPage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    logger.log(`maybe art`, response.data)
    const posts = response.data.posts.map(pojo => new posts(pojo))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
}





export const postsService = new PostsService()