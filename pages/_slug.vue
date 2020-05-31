<template>
  <div class="container flex flex-col min-h-screen mx-auto my-0 text-center">
    <div class="header-wrapper">
      <Header />
    </div>
    <div class="content-wrapper">
      <div class="flex justify-center">
        <div class="w-8/12">
          <h1 class="my-4 text-2xl font-bold text-center">{{ post.title }}</h1>
          <p class="my-2 text-xl text-center text-gray-700">
            {{ post.excerpt }}
          </p>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span class="description" v-html="post.description" />
          <p class="my-2 text-base text-left text-gray-700">
            {{ post.example }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fallacies from '../data/fallacies.json'
import Header from '~/components/header.vue'

export default {
  name: 'Detail',
  components: {
    Header
  },
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
.description,
.description >>> p {
  @apply block;
  @apply my-4;
  @apply text-base;
  @apply text-gray-700;
  @apply text-left;
}
</style>
