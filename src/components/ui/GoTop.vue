<template>
  <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
  >
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'GoTop',

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style>

</style>
