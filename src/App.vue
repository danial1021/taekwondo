<template>
  <v-app>
    <Header />
    <Nav v-if="$store.state.drawer == true"/>
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Nav from '@/components/layout/Nav.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Nav,
    Footer
  }
}
</script>
