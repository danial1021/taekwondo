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
                >
                <div class="a">
                  <span class="b"><h3>실내전경</h3></span>
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
                        color="primary"
                      >
                        <router-link class="route" to="/indoor">
                          실내전경
                        </router-link>
                      </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="10">
            <v-card>
              <v-card-title>실내전경</v-card-title>
              <v-divider class="mx-2"></v-divider>
              <v-row>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-card
                    class="mx-auto"
                    max-width="200"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                    ></v-img>
                    <v-card-title>Cafe Badilico</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FixedFooter />
  </v-app>
</template>

<script>
// @ is an alias to /src
import FixedFooter from '@/components/layout/FixedFooter.vue'
import axios from 'axios'

export default {
  name: 'Indoor',

  components: {
    FixedFooter
  },

  data: () => ({
  }),

  mounted () {
    axios.get('http://localhost:3000/api/user')
    .then((r) => {
      console.log(r)
    })
    .catch((e) => {
      console.error(e.message)
    })
  }
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
.route {
  text-decoration: none;
  color: inherit;
}
</style>
