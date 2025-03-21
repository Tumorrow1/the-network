import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

import { AppState } from "@/AppState.js"
import { Profile } from "@/models/Profile.js"
import { Post } from "@/models/Posts.js"


class ProfilesService {
  async getProfileById(profileId) {
    AppState.profile = null
    const response = await api.get(`api/profiles/${profileId}`) // 2 Get Profile (Tell/Ask the API what happened, or for info)
    logger.log(response.data)
    const profile = new Profile(response.data) // 3 save profile to AppState (Save/modify AppState)
    AppState.profile = profile
  }
  async getpostsByCreatorId(creatorId) { // 2
    const response = await api.get(`api/posts?creatorId=${creatorId}`) // 2 get posts
    logger.log(`got post`, response.data)
    const profileposts = response.data.posts.map(pojo => new Post(pojo)) // 3 save posts to AppState
    AppState.profileposts = profileposts
  }

}


export const profilesService = new ProfilesService()