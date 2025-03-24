<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/PostCard.vue';
import PostForm from '@/components/PostForm.vue';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const posts = computed(() => AppState.posts)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

onMounted(() => {
  getPosts()
})

async function changepage(pageNumber) {
  try {
    console.log(`maybe a change`)
    await postsService.changePostPage(pageNumber)
  } catch (error) {
    Pop.error(error, `not able to change page`)
    logger.error(`not change of page`, error)
  }
}

async function getPosts() {
  try {
    await postsService.getPosts()
  } catch (error) {
    Pop.error(error, `none of them dang old posts`)
    logger.error(`where them post boi`, error)
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-5 text-indigo">check out the posts by you and others</h1>
      </div>
    </div>
  </section>
  <section>
    <PostForm :postprop="posts" />
  </section>
  <section class="container">
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-8">
        <PostCard :postProp="post" />
      </div>
      <div class="d-flex align-items-center">
        <button @click="changepage(currentPage - 1)" class="btn btn-primary" type="button">
          Newer
        </button>
        <p>{{ currentPage }} of {{ totalPages }}</p>
        <button @click="changepage(currentPage + 1)" class="btn btn-primary" type="button">
          older
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
