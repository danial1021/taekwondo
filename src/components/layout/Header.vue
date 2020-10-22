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
    <v-toolbar-title class="ho">
      <router-link class="route" to="/greeting">
        파워줄넘기
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="ho">
      <router-link class="route" to="/indoor">
        실내전경
      </router-link>
    </v-toolbar-title>
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
    <v-btn
      icon
      color="primary"
      style="margin-right:30px"
    >
      <router-link to="/" class="route">
        메인으로
      </router-link>
    </v-btn>
    <info-dialog />
    </v-app-bar>
<!-- responsive -->
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
import InfoDialog from '@/components/ui/InfoDialog.vue'

export default {
  name: 'Header',

  data: () => ({
    items: [
      { title: '포토갤러리', link: '' },
      { title: '영상갤러리', link: '' }
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
.route {
  text-decoration: none;
  color: inherit;
}
</style>
