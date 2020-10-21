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
                  style="background-color:#968770"
                  outlined
                  dark
                  class="mx-auto"
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
                      @click="$router.push('/greeting')"
                      color="primary"
                    >
                      인사말
                    </v-btn>
                  </v-card-actions>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-actions>
                    <v-btn
                      text
                      block
                      @click="$router.push('/profile')"
                    >
                      관장프로필
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="10">
            <GreetingCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import GreetingCard from '@/components/GreetingCard.vue'

export default {
  name: 'Greeting',

  components: {
    GreetingCard
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
</style>
