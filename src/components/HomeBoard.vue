<template>
  <div class="bgc">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            height="100%"
          >
            <v-card-text>
              <span>Word of the Day</span>
              <v-btn
                class="mx-2"
                small
                fab
                dark
                color="indigo"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <v-divider class="mx-2"></v-divider>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            height="100%"
          >
            <v-card-text>
              <span>Word of the Day</span>
              <v-btn
                class="mx-2"
                small
                fab
                dark
                color="indigo"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <v-divider class="mx-2"></v-divider>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="py-0">
          <v-row column>
            <v-col cols="12">
              <v-card
            class="mx-auto"
          >
            <v-card-text>
              <span>Word of the Day</span>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <v-divider class="mx-2"></v-divider>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
            class="mx-auto"
          >
            <v-card-text>
              <span>Word of the Day</span>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <v-divider class="mx-2"></v-divider>
              <div class="text--primary">
                well meaning and kindly.<br>df
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeBoard',

  data: () => ({
  })
}
</script>

<style scoped>
.bgc {
  background-color: #cccccc;
}
</style>
