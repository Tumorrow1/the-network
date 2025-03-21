<script setup>
import { Post } from '@/models/Posts.js';



defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <div class="border black mb-3 ">

    <div class="mb-3">
      <img :src="postProp.imgUrl" :alt="`image for you not to see `" class="img-fluid">
    </div>
    <div>
      <p>{{ postProp.body }}</p>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <p>{{ postProp.creator.picture }}</p>

    </div>
  </div>

</template>


<style lang="scss" scoped></style>