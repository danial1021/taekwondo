<template>
  <div>
    <v-container>
      <v-col cols="12" class="hidden-sm-and-down"></v-col>
      <v-col cols="12" class="hidden-sm-and-down"></v-col>
      <v-col cols="12" class="hidden-sm-and-down"></v-col>
      <h1 class="center">관리자 로그인</h1>
      <v-col cols="12" class="hidden-sm-and-down"></v-col>
      <v-row>
        <v-col md="1"></v-col>
        <v-col cols="12" sm="12" md="10">
          <v-text-field
            v-model="id"
            label="ID"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col md="1" class="hidden-sm-and-down"></v-col>

        <v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>
        <v-col cols="12" sm="12" md="10">
          <v-text-field
            v-model="pw"
            label="PW"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>

        <v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>
        <v-col cols="12" md="10">
          <v-btn class="right" color="info" large block @click="send">
            LOGIN
          </v-btn>
        </v-col>
        <v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data: () => ({
    id: '',
    pw: ''
  }),

  methods: {
    send () {
      const id = this.id
      const pw = this.pw
      this.$http.post('/user', { id, pw })
        .then((r) => {
          console.log(r.data)
        })
        .catch((e) => {
          console.error(e.message)
        })
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
.center {
  text-align: center;
}
</style>
