<template>
  <div class="bgc">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
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
        <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
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
        <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
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
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Theme',

  data: () => ({
  })
}
</script>

<style scoped>
.bgc {
  background-color: #aaaaaa;
}
.pos {
  float: right;
  top: 72%;
  right: 15px;
}
</style>
