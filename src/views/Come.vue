<template>
  <v-app>
    <v-main style="height:766px">
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
                  <span class="b"><h3>오시는길</h3></span>
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
                        <router-link class="route" to="/come">
                          오시는길
                        </router-link>
                      </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="10">
            <v-card>
              <v-card-title>오시는길</v-card-title>
              <v-divider class="mx-2"></v-divider>
              <v-row>
                <v-col cols="6">
                  <v-container>
                    <v-row column>
                      <v-col cols="12">
                        <div>
                          <v-icon large>mdi-map-marker</v-icon>
                          주소
                        </div>
                        <div style="margin:0 0px 20px 40px;">
                          <p>광주광역시 서구 금호동 239-7번지 6층</p>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div>
                          <v-icon large>mdi-phone</v-icon>
                          전화번호
                        </div>
                        <div style="margin:0 0px 20px 40px;">
                          <p>+82 062-416-3338</p>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div>
                          <v-icon large>mdi-email</v-icon>
                          이메일
                        </div>
                        <div style="margin:0 0px 20px 40px;">
                          <p>test@test.com</p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="6">
                  <v-container>
                    <div style="border: 10px solid #dddddd">
                      <Map />
                    </div>
                  </v-container>
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
import Map from '@/components/ui/Map.vue'
import FixedFooter from '@/components/layout/FixedFooter.vue'

export default {
  name: 'Indoor',

  components: {
    Map,
    FixedFooter
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
.route {
  text-decoration: none;
  color: inherit;
}
</style>
