<template>
  <v-app>
    <div class="bodyBox">
      <div class="loginForm">
        <v-form
          ref="form"
        >
          <v-row>
            <v-col>
              <v-text-field
                v-model="id"
                :rules="idRules"
                label="ID"
                required
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="pass"
                :rules="rules"
                class="input-group--focused"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                :type="show2 ? 'text' : 'password'"
                label="PASS"
                required
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-alert
              class="Box"
                v-if="!arma"
                dense
                :type="alert.type"
              >
                {{alert.text}}
              </v-alert>
            </v-col>
          </v-row>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            filled
            rounded
            dense
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            filled
            rounded
            dense
          >
            Reset Form
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: 'loginApp',
    data: () => {
      return {
        arma: true,
        alert: {
          text: '아이디 또는 비밀번호가 다릅니다.',
          type: 'error',
        },
        valid: true,
        id: null,
        idRules: [
          v => !!v || 'ID is required',
          v => /^[a-zA-Zㄱ-힣0-9]*$/.test(v) || 'Special characters cannot be entered',
        ],
        pass: null,
        rules: [
          v => !!v || 'Required.',
        ],
        show2: false,
      }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$axios.post('/api/userinfo/search', { id: this.id, pass: this.pass }).then(res => {
            console.log(res.data)
            if (res.data) {
              this.$router.push('/about')
            } else {
              // console.log('틀림')
              this.arma = res.data
            }
          })
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
  .bodyBox{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .loginForm{
    margin-top: 10%;
    display: inline-block;
    width: 80%;
    height: 100%;
    /* background-color: red; */
  }
</style>
