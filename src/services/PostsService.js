import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Posts.js"
import { AppState } from "@/AppState.js"

class PostsService {

  async getPosts() {
    const response = await api.get(`api/posts`)
    logger.log(`got posts son`, response.data)
    const posts = response.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
  }
}



export const postsService = new PostsService()