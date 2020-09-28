<template>
  <div>
    <v-app-bar
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click.stop="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Power Jumping</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>info</v-icon>
    </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({

  })
}
</script>

<style>

</style>
