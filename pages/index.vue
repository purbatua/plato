<template>
  <div
    class="container flex flex-col items-center min-h-screen mx-auto my-0 text-center"
  >
    <!-- <div class="flex items-center justify-between w-full">
      <ul class="flex justify-start invisible w-3/12 -mx-3 nav">
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
        <h1
          class="z-10 mt-4 mb-8 text-xl font-semibold text-gray-800 md:text-2xl"
        >
          Kesalahan Logika & Bias Kognitif
        </h1>
      </div>
      <div class="flex justify-end w-3/12">
        Night mode
      </div>
    </div> -->
    <Header :type="type" @choose="choose" />
    <div class="flex flex-col justify-center md:flex-row">
      <div class="flex flex-col items-center mx-4 mb-4 md:order-2 md:w-4/12">
        <img
          class="z-0 w-10/12 mb-4 img-hero md:w-full"
          src="@/assets/images/showing-list-1.svg"
          alt="Logical Fallacy"
        />
        <div v-if="selected">
          <nuxt-link
            :to="`/${selected.slug}`"
            class="text-lg text-blue-500 cursor-pointer"
          >
            {{ selected.title }}
          </nuxt-link>
          <div class="flex">
            <p class="text-base text-gray-800">
              {{ selected.excerpt }}
              <nuxt-link
                :to="`/${selected.slug}`"
                class="text-base text-blue-500 cursor-pointer"
              >
                Selengkapnya..
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <ul
        class="flex flex-row flex-wrap justify-center w-full md:-mx-2 md:order-1 md:justify-start md:w-4/12"
      >
        <li
          v-for="(fallacy, index) in leftList"
          :key="index"
          class="p-1 md:p-2"
        >
          <ButtonIcon
            :to="fallacy.link"
            :icon="fallacy.icon"
            :title="fallacy.title"
            :active="selected && fallacy.id === selected.id"
            @click.native="clickHandler(fallacy)"
          />
        </li>
      </ul>
      <ul
        class="flex flex-row flex-wrap justify-center w-full md:-mx-2 md:order-3 md:justify-end md:w-4/12"
      >
        <li
          v-for="(fallacy, index) in rightList"
          :key="index"
          class="p-1 md:p-2"
        >
          <ButtonIcon
            :to="fallacy.link"
            :icon="fallacy.icon"
            :title="fallacy.title"
            @click.native="clickHandler(fallacy)"
          />
        </li>
      </ul>
    </div>
    <div class="flex p-4 my-4 md:p-0">
      <div class="w-full">
        <p class="my-2 text-base text-gray-700">
          Kesalahan logika adalah kekeliruan dalam berfikir. Kekeliruan tersebut
          sering dijumpai dalam adu pendapat baik secara sadar maupun tak sadar.
          Proses berfikir yang benar dalam mempermudah semua orang untuk
          mendapatkan kesimpulan dari proses diskusi atau debat tadi. Situs ini
          dikhususkan untuk mereka yang ingin memahami cara berfikir yang benar.
          Jika ada melihat seseorang melakukan kekeliruan dalam berpendapat,
          Anda dapat membantu memberikan tautan tentang kesalah tersebut,
          sebagai contoh
          <a
            class="text-blue-400 underline"
            href="https://kesalahanlogika.com/straw-man"
            >https://kesalahanlogika.com/straw-man</a
          >
        </p>
        <p class="my-2 text-base text-gray-700">
          Karena dengan proses berfikir yang benar, tujuan awal dalam proses
          diskusi atau debat dapat tercapai dan tidak keluar jalur
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fallacies from '~/data/fallacies.json'
import biases from '~/data/biases.json'
import Header from '~/components/header.vue'
import ButtonIcon from '~/components/button-icon.vue'

export default {
  components: {
    Header,
    ButtonIcon
  },
  data() {
    return {
      selected: null,
      type: 'logical',
      list: []
    }
  },
  computed: {
    leftList() {
      return this.list.slice(0, 12)
    },
    rightList() {
      return this.list.slice(12, 24)
    }
  },
  mounted() {
    this.list = fallacies
    this.selected = this.list[0]
  },
  methods: {
    clickHandler(fallacy) {
      this.selected = fallacy
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    },
    choose(type) {
      if (this.type !== type) {
        this.type = type
        this.list = this.type === 'logical' ? fallacies : biases
        this.selected = this.list[0]
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1050px;
}

.img-hero {
  margin-top: -30px;
}
/* 
.nav li {
  border-bottom: 2px solid transparent;
}
.nav li.active {
  border-bottom: 2px solid blue;
} */
</style>
