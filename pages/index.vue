<template>
  <div
    class="container flex flex-col items-center min-h-screen mx-auto my-0 text-center"
  >
    <h1 class="mt-4 mb-8 text-2xl font-semibold">Kesalahan Logika & Bias</h1>
    <div class="flex justify-center">
      <ul class="flex flex-row flex-wrap justify-start w-4/12 -mx-2">
        <li v-for="(fallacy, index) in leftFallacies" :key="index" class="p-2">
          <ButtonIcon
            :to="fallacy.link"
            :icon="fallacy.icon"
            :title="fallacy.name"
            @click.native="clickHandler(fallacy)"
          />
        </li>
      </ul>
      <div class="w-4/12 mx-4">
        <img src="@/assets/images/hero.svg" alt="Logical Fallacy" />
        <div v-if="selected">
          <h4>{{ selected.name }}</h4>
          <p>{{ selected.excerpt }}</p>
        </div>
      </div>
      <ul class="flex flex-row flex-wrap justify-end w-4/12 -mx-2">
        <li v-for="(fallacy, index) in rightFallacies" :key="index" class="p-2">
          <ButtonIcon
            :to="fallacy.link"
            :icon="fallacy.icon"
            :title="fallacy.name"
            @click.native="clickHandler(fallacy)"
          />
        </li>
      </ul>
      <!-- <div class="w-1/3">
        <img src="@/assets/images/hero.svg" alt="Logical Fallacy" />
      </div>
      <ul class="flex flex-row flex-wrap w-1/3">
        <li v-for="(fallacy, index) in fallacies" :key="index" class="m-2">
          <ButtonIcon
            :to="fallacy.link"
            :icon="fallacy.icon"
            :title="fallacy.name"
          />
        </li>
      </ul> -->
      <!-- <logo />
      <h1 class="title">
        plato
      </h1>
      <h2 class="subtitle">
        logical fallacies &amp; bias cognitive
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
    <div class="flex">
      <div class="w-full">
        <p>
          A logical fallacy is a flaw in reasoning. Logical fallacies are like
          tricks or illusions of thought, and they're often very sneakily used
          by politicians and the media to fool people. Don't be fooled! This
          website has been designed to help you identify and call out dodgy
          logic wherever it may raise its ugly, incoherent head. Rollover the
          icons above and click for examples. If you see someone committing a
          fallacy, link them to it e.g. yourlogicalfallacyis.com/strawman
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fallacyList from '~/data/fallacies.json'
// import Logo from '~/components/Logo.vue'
import ButtonIcon from '~/components/button-icon.vue'

export default {
  components: {
    // Logo,
    ButtonIcon
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
    fallacies() {
      return fallacyList
    },
    leftFallacies() {
      return fallacyList.slice(0, 12)
    },
    rightFallacies() {
      return fallacyList.slice(12, 24)
    }
  },
  methods: {
    clickHandler(fallacy) {
      // eslint-disable-next-line no-console
      console.log('selected fallacy', fallacy)
      this.selected = fallacy
    }
  }
}
</script>

<style scoped>
.container {
  /* display: flex; */
  margin: 0 auto;
  min-height: 100vh;
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  /* max-width: 960px; */
  /* max-width: 1200px; */
  /* max-width: 1050px; */
  max-width: 1050px;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
/* 
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
