<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/PostCard.vue';
import { Post } from '@/models/Posts.js';
import { Profile } from '@/models/Profile.js';
import { postsService } from '@/services/PostsService.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'


const profile = computed(() => AppState.profile) //4 bring profile back into component
const posts = computed(() => AppState.profileposts) // 4 bring posts back into component 🔁
const route = useRoute()

onMounted(() => {
  getProfileById() // 1
  getPostsByCreatorId() // 1


})

async function getPostsByCreatorId() { // 1 Ask for Posts (Action/Ask)
  try {
    const profileId = route.params.profileId
    await profilesService.getpostsByCreatorId(profileId)
  }
  catch (error) {
    Pop.error(error);
    logger.error(`No posts by that creator`, error)
  }
}

async function getProfileById() { // 1 ask for Profile
  try {
    const profileId = route.params.profileId

    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error, `couldnt get profile`)
    logger.log(`no profile man`, error)
  }
}
</script>
s

<template>
  <!-- 5 draw profile -->
  <section v-if="profile" class="container">
    <div class="row">
      <div class="col-8">
        <div class="text-center my-3 rounded-4 profile-bg d-flex align-items-center justify-content-center"
          :style="{ backgroundImage: `url(${profile.coverImg})` }">
          <div>
            <img :src="profile.picture" :alt="'A pretty picture of ' + profile.name" class="round-img profile-img my-2">
            <div class="text-light">{{ profile.bio }}</div>
            <h1 class="mb-2 text-light">{{ profile.name }}</h1>
            <a v-if="profile.github" :href="profile.github">
              <span><i class="mdi mdi-github"></i></span>
            </a>
            <a v-if="profile.linkedin" :href="profile.linkedin">
              <span><i class="mdi mdi-linkedin"></i></span>
            </a>
            <a v-if="profile.graduated" :href="profile.graduated">
              <span><i class="mdi mdi-school"></i></span>
            </a>
            <a v-if="profile.resume" :href="profile.resume">
              <span><i class="mdi mdi-note"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">

      <!-- 5 draw UGLY posts -->
      <!-- {{ posts }} -->

      <!-- 6 draw PRETTY posts -->
      <div v-for="post in posts" :key="post.id" class="col-8">
        <PostCard :postProp="post" />
      </div>
    </div>


  </section>






</template>


<style lang="scss" scoped>
.profile-bg {
  background-size: cover;
  background-position: center;
  min-height: 70dvh;
}

.profile-img {
  max-width: 100%;
  height: 30dvh;
  object-fit: cover;
}
</style>