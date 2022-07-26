<template>
  <div class="snsApp">

    <div class="textCenter">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="plusBtn"
            color="red lighten-2"
            min-width="50px"
            min-height="53px"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 dark lighten-2">
            게시글 추가하기
          </v-card-title>

          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                dense
              ></v-text-field>

              <v-textarea
                v-model="text"
                label="내용"
                :rules="[v => !!v || 'Name is required']"
                hint="여기에 입력하세요"
                required
              ></v-textarea>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate()"
              >
                등록하기
              </v-btn>

              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
              >
                Reset Form
              </v-btn>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>

    <div class="textBox">
      <v-responsive
        class="overflow-y-auto"
      >
        <v-responsive
          class="text-center pa-2"
        >
          <v-lazy
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
            v-for="(e,i) in cardArray" :key="i"
            v-model="isActive[i]"
          >
            <v-card
              class="mx-auto text-left"
              max-width="100vh"
            >
              <v-card-title>{{e.user}}</v-card-title>
              <v-card-text>{{e.contents}}</v-card-text>
              <v-card-subtitle
              class="text-right dateDay"
              >{{e.date}}</v-card-subtitle>
            </v-card>
          </v-lazy>
        </v-responsive>
      </v-responsive>
    </div>

  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'SnsView',
    data () {
      return {
        cardArray: [],
        statusInput: false,
        valid: true,
        isActive: [],
        dialog: false,
        text: null,
        name: null,
        test: null,
        nameRules: [
          v => !!v || 'Name is required',
          // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
      }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.dialog = !this.dialog
          this.$axios.post('/api/notice/indata', {
            user: this.name,
            data: moment().format('YYYY-MM-DD'),
            contents: this.text,
          })
          this.$axios.post('/api/notice', { ok: 'ok' }).then(res => {
            for (let i = 0; i < res.data.length; i++) {
              // console.log(res.data[i])
              this.cardArray.unshift(res.data[i])
              this.isActive.push(false)
            }
          })
          this.$refs.form.reset()
        }
      },
      reset () {
        this.$refs.form.reset()
        // this.$router.push('/sns')
      },
    },
    mounted () {
      this.$axios.post('/api/notice', { ok: 'ok' }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data[i])
          this.cardArray.unshift(res.data[i])
        }
      })
    },
  }
</script>

<style scoped>
  .snsApp{
    width: 100%;
    height: 100%;
    /* background-color: blue; */
  }
  .dateDay{
    color: gray;
  }
  .v-lazy{
    margin-bottom: 30px;
  }
  .plusBtn{
    position: fixed;
    bottom: 10%;
    right: 10%;
    border-radius: 50%;
    z-index: 100;
  }
  .textBox{
    width: 100%;
    height: 100%;
    overflow: auto;
    /* background-color: red; */
  }
</style>
