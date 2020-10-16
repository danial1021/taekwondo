<template>
  <header>
    <v-app-bar
      prominent
      app
      src="https://picsum.photos/1920/1080?random"
      class="hidden-sm-and-down"
    >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-spacer></v-spacer>
    <v-toolbar-title class="ho">파워줄넘기</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="ho">실내전경</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu
      open-on-hover
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title>
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
          >
            <span>갤러리</span>
          </v-btn>
        </v-toolbar-title>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title class="ho">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>
    <v-toolbar-title class="ho">오시는길</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="ho">공지사항</v-toolbar-title>

    <v-spacer></v-spacer>
    <info-dialog />
    </v-app-bar>

    <v-app-bar
      prominent
      app
      src="https://picsum.photos/1920/1080?random"
      class="hidden-md-and-up"
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
    <info-dialog />
    </v-app-bar>
  </header>
</template>

<script>
import InfoDialog from '@/components/InfoDialog.vue'

export default {
  name: 'Header',

  data: () => ({
    items: [
      { title: '포토갤러리', links: '' },
      { title: '영상갤러리', links: '' }
    ]
  }),

  components: {
    InfoDialog
  },

  methods: {
  }
}
</script>

<style scoped>
span {
  font-size: 24px;
}
.ho:hover {
  color: blue;
}
</style>
