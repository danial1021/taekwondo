<template>
  <v-app>
    <v-main>
      <Carousels />
      <Confident />
      <Theme />
      <HomeBoard />
      <GoTop />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Carousels from '@/components/Carousels.vue'
import Confident from '@/components/Confident.vue'
import Theme from '@/components/Theme.vue'
import HomeBoard from '@/components/HomeBoard.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  name: 'Home',

  components: {
    Carousels,
    Confident,
    Theme,
    HomeBoard,
    GoTop
  },

  data: () => ({
  })
}
</script>
