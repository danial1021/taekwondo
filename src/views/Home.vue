<template>
  <div>
    <Header />
    <Nav v-if="$store.state.drawer == true"/>

    <v-main>
      <Carousels />
      <Confident />
      <Theme />
      <HomeBoard />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Carousels from '@/components/Carousels.vue'
import Confident from '@/components/Confident.vue'
import Theme from '@/components/Theme.vue'
import HomeBoard from '@/components/HomeBoard'

export default {
  name: 'Home',

  components: {
    Header,
    Nav,
    Carousels,
    Confident,
    Theme,
    HomeBoard
  },

  data: () => ({

  })
}
</script>
