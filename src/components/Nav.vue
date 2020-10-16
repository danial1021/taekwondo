<template>
  <nav>
    <v-navigation-drawer app temporary v-model="$store.state.drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            대한민국 No.1 줄넘기
          </v-list-item-title>
          <v-list-item-subtitle>
            파워점핑
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        rounded
      >
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
            color="primary"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Nav',

  data: () => ({
    items: [
      { title: '메인', icon: 'call_to_action', link: '/' },
      { title: '인사말', icon: 'pan_tool', link: '/profile' },
      { title: '관장프로필', icon: 'account_box', link: '/profile' },
      { title: '실내전경', icon: 'home_work', link: '' },
      { title: '포토갤러리', icon: 'photo', link: '' },
      { title: '비디오갤러리', icon: 'videocam', link: '' },
      { title: '오시는길', icon: 'location_on', link: '' },
      { title: '공지사항', icon: 'notifications', link: '' }
    ],
    group: null
  }),

  watch: {
    group () {
      this.$store.state.drawer = !this.$store.state.drawer
    }
  }
}
</script>

<style>

</style>
