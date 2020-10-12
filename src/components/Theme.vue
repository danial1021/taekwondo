<template>
  <div class="t_size">
    <v-container>
      <v-layout row wrap>
        <v-row>
          <v-col xs12 sm="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              >
                <v-btn
                  class="mx-2 pos"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-img>
            </v-card>
          </v-col>
          <v-col xs12 sm="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              >
                <v-btn
                  class="mx-2 pos"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-img>
            </v-card>
          </v-col>
          <v-col xs12 sm="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              >
                <v-btn
                  class="mx-2 pos"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Confident',

  data: () => ({
  })
}
</script>

<style>
.t_size {
  background-color: #aaaaaa;
  /* height: 50vh; */
}
.pos {
  float: right;
  top: 66%;
  right: 15px;
}
</style>
