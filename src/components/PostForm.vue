<script setup>
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editablePostData = ref({
  body: ``,
  imgUrl: ``,
  creator: ``,
  id: ``,
  likeids: ``,
  crearorId: ``,
})


async function createPost() {
  try {
    const postData = editablePostData.value
    await postsService.createPost(postData)
  } catch (error) {
    Pop.error(error, `coundt create post`)
    logger.error(`no create man`, error);

  }
}
</script>


<template>
  <form onsubmit="createPost()">
    <div class="mb-3">
      <label for="carMake">body</label>
      <textarea v-model="editablePostData.body" id="postbody" name="post" type="text" required maxlength="500"
        placeholder="post ...">
      </textarea>
    </div>
    <button class="btn btn-success" type="submit">
      submit
    </button>
  </form>
</template>


<style lang="scss" scoped></style>