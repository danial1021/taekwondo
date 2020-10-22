<template>
  <v-app>
    <Header />
    <Nav v-if="$store.state.drawer == true"/>
    <router-view />
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Nav from '@/components/layout/Nav.vue'

export default {
  name: 'App',

  components: {
    Header,
    Nav
  }
}
</script>
