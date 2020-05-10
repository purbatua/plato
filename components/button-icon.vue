<template>
  <!--
  <nuxt-link
    :to="to"
    class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded btn-icon hover:bg-gray-400"
  >
    <img
      v-if="icon"
      class="w-4 h-4 mr-2 fill-current"
      :src="require(`@/assets/icons/${icon}`)"
      :alt="title"
    />
    <span>{{ title }}</span>
  </nuxt-link>
  -->
  <button
    type="button"
    class="inline-flex flex-wrap items-center justify-center w-24 h-24 p-2 text-sm font-bold text-center text-gray-800 bg-gray-300 border rounded-sm shadow-sm focus:outline-none hover:bg-gray-400"
    :title="title"
  >
    <p class="text-center">{{ title }}</p>
  </button>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    to: {
      type: String,
      default: null,
      required: false
    },
    icon: {
      type: String,
      default: null,
      required: false
    },
    title: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>

<style scoped>
.btn-icon {
  padding: 0.5em;
}
</style>
