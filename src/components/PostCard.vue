<script setup>
import { Post } from '@/models/Posts.js';
import ProfilePage from '@/pages/ProfilePage.vue';



defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <div class="border black mb-3 p-3 ">

    <div class="mb-3">
      <img :src="postProp.imgUrl" :alt="`image for you not to see `" class="img-fluid">
    </div>
    <div>
      <p>{{ postProp.body }}</p>
    </div>
    <RouterLink :to="{ name: `ProfilePage`, params: { profileId: postProp.creatorId } }">
      <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img"
        :title="`go to ${postProp.creator.name}'s profile Page'`">
    </RouterLink>
  </div>


</template>


<style lang="scss" scoped>
.creator-img {
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>