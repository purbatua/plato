<template>
  <div class="flex items-center justify-between w-full">
    <ul
      class="flex justify-start w-3/12 -mx-3 nav"
      :class="{ invisible: !showNav }"
    >
      <li class="px-3 pb-1" :class="{ active: type === 'logical' }">
        <button
          type="button"
          class="focus:outline-none"
          @click="choose('logical')"
        >
          Kesalahan Logika
        </button>
      </li>
      <li class="px-3 pb-1" :class="{ active: type === 'bias' }">
        <button
          type="button"
          class="focus:outline-none"
          @click="choose('bias')"
        >
          Bias Kognitif
        </button>
      </li>
    </ul>
    <div class="flex justify-center w-6/12">
      <nuxt-link to="/">
        <h1
          class="z-10 mt-4 mb-8 text-xl font-semibold text-gray-800 md:text-2xl"
        >
          Kesalahan Logika & Bias Kognitif
        </h1>
      </nuxt-link>
    </div>
    <div class="flex justify-end w-3/12">
      Night mode
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    type: {
      type: String,
      default: 'logical',
      required: false
    },
    showNav: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  methods: {
    choose(type) {
      this.$emit('choose', type)
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1050px;
}

.nav li {
  border-bottom: 2px solid transparent;
}
.nav li.active {
  border-bottom: 2px solid blue;
}
</style>
