<template>
  <div>
    <Header />
    <Nav v-if="$store.state.drawer == true"/>

    <v-main>
      <Carousels />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Carousels from '@/components/Carousels.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Nav,
    Carousels
  },

  data: () => ({

  })
}
</script>
