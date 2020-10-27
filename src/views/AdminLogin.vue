<template>
  <v-app>
    <v-main>
      <Login />
    </v-main>
    <FixedFooter />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import FixedFooter from '@/components/layout/FixedFooter.vue'

export default {
  name: 'AdminLogin',

  components: {
    Login,
    FixedFooter
  },

  data: () => ({

  })
}
</script>
