<template>
  <dir class="flex justify-center">
    <div class="w-6/12">
      <h1 class="my-4 text-2xl font-bold text-center">{{ post.title }}</h1>
      <p class="my-2 text-xl text-center text-gray-700">{{ post.excerpt }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span class="description" v-html="post.description" />
    </div>
  </dir>
</template>

<script>
import fallacies from '../data/fallacies.json'

export default {
  name: 'Detail',
  fetch() {
    this.post = fallacies.find((f) => f.slug === this.$route.params.slug)
  },
  data() {
    return {
      post: {}
    }
  }
}
</script>

<style scoped>
.description >>> p {
  @apply my-4;
  @apply text-base;
  @apply text-gray-700;
}
</style>
