<template>
  <div>
    <v-main>
      <ProfileCard />
    </v-main>
  </div>
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
