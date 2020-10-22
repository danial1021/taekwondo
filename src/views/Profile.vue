<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-row column>
              <v-col cols="12">
                <v-card
                  min-height="110px"
                  class="card-color"
                  outlined
                  dark
                >
                <div class="a">
                  <span class="b"><h3>파워점핑줄넘기</h3></span>
                </div>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card
                  outlined
                >
                  <v-card-actions>
                    <v-btn
                      text
                      block
                    >
                      <router-link class="route" to="/greeting">
                        인사말
                      </router-link>
                    </v-btn>
                  </v-card-actions>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-actions>
                    <v-btn
                      text
                      block
                      color="primary"
                    >
                      <router-link class="route" to="/profile">
                        관장프로필
                      </router-link>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="10">
            <ProfileCard />
          </v-col>
        </v-row>
      </v-container>
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

<style scoped>
.a {
  display: table;
  height: 100px;
  width: 100%;
  text-align: center;
}
.b {
  display: table-cell;
  vertical-align: middle;
}
.card-color {
  background-color:#968770
}
.route {
  text-decoration: none;
  color: inherit;
}
</style>
