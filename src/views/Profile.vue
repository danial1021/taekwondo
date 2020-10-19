<template>
  <v-app>
    <v-main>
      <ProfileCard />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'Profile',

  components: {
    ProfileCard
  },

  data: () => ({
  })
}
</script>
