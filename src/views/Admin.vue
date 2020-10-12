<template>
  <div>
    <Header />
    <Nav v-if="$store.state.drawer == true"/>
Hello World!
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/admin/Nav.vue'

export default {
  name: 'Admin',

  components: {
    Nav
  },

  data: () => ({

  })
}
</script>
