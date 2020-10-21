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
                  <span class="b">파워점핑줄넘기</span>
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
            <v-card min-height="500px">
              <v-card-title>인사말</v-card-title>
              <v-container>
                <v-img
                  height="300"
                  width="100%"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'Greeting',

  components: {
    // ProfileCard
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
