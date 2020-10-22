<template>
  <v-app>
    <v-main>
      <Carousels />
      <Confident />
      <Theme />
      <HomeBoard />
      <GoTop />
      <MainFooter />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Carousels from '@/components/home/Carousels.vue'
import Confident from '@/components/home/Confident.vue'
import Theme from '@/components/home/Theme.vue'
import HomeBoard from '@/components/home/HomeBoard.vue'
import GoTop from '@/components/ui/GoTop.vue'
import MainFooter from '@/components/layout/MainFooter.vue'

export default {
  name: 'Home',

  components: {
    Carousels,
    Confident,
    Theme,
    HomeBoard,
    GoTop,
    MainFooter
  },

  data: () => ({
  })
}
</script>
