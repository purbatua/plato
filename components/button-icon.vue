<template>
  <button
    type="button"
    class="inline-flex flex-wrap items-center justify-center p-2 font-bold text-center text-gray-800 bg-gray-300 border rounded-sm shadow-sm text-2xs w-18 h-18 md:text-sm md:w-24 md:h-24 btn-icon focus:outline-none hover:bg-gray-400"
    :title="title"
    :class="{ active: active }"
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
    },
    active: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style scoped>
.btn-icon.active {
  background-color: rgb(187, 199, 212);
}
</style>
