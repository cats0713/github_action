<template>
  <v-app class="loginApp">
    <div class="app">
      <div class="loginForm">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
        <v-row>
          <v-col
          cols="9"
          >
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
          <v-col
          cols="3"
          >
            <v-btn
              :disabled="!valid"
              color="success"
              @click="checkId"
              filled
              rounded
              dense
            >
              {{checkBtn}}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="pass"
              :rules="rules"
              class="input-group--focused"
              hint="At least 8 characters"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              label="PASS"
              required
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="check"
              class="input-group--focused"
              hint="At least 8 characters"
              :rules="checkFunc(v)"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
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
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
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
            v-model="number"
            :rules="numberRules"
            label="Phone number"
            required
            filled
            rounded
            dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="8"
          >
            <v-text-field
            v-model="addr"
            :rules="addrRules"
            label="addr"
            required
            filled
            rounded
            dense
          ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="sex"
              required
              filled
              rounded
              dense
            ></v-select>
          </v-col>
        </v-row>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v  || 'You must agree to continue!']"
            label="Do you agree?"
            required
            filled
            rounded
            dense
          ></v-checkbox>

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
    data: () => ({
      valid: true,
      name: null,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      number: null,
      numberRules: [
        v => !!v || 'number is required',
        v => /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(v) || 'number must be valid',
      ],
      addr: null,
      addrRules: [
        v => !!v || 'E-mail is required',
      ],
      id: null,
      idRules: [
        v => !!v || 'ID is required',
        v => /^[a-zA-Zㄱ-힣0-9]*$/.test(v) || 'Special characters cannot be entered',
      ],
      pass: null,
      rules: [
        v => !!v || 'Required.',
        v => v.length >= 8 || 'Min 8 characters',
      ],
      check: null,
      show1: false,
      show2: false,
      select: null,
      items: [
        '남성',
        '여성',
        '안알랴줌',
        '외계인',
      ],
      checkbox: false,
      checkBtn: 'ID확인',
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$axios.post('/api/userinfo/in', { name: this.name, addr: this.addr, number: this.number, id: this.id, pass: this.pass, sex: this.select }).then(res => {
            // console.log(res.data)
          }).then(() => {
          })
        }
      },
      checkId () {
        if (this.id != null) { // 아이디 입력함
          this.$axios.post('/api/userinfo/idcheck', { id: this.id }).then(res => {
            console.log(res)
            if (res.data) { // 아이디 해도됨
              this.checkBtn = '해도됨'
            } else {
              this.checkBtn = '안됨'
            }
          })
        } else { // 아이디 입력 안함

        }
      },
      reset () {
        this.$refs.form.reset()
      },
      checkFunc () {
        return [
          v => v === this.pass || 'not match',
          v => !!v || 'Required.',
          v => v.length >= 8 || 'Min 8 characters',
        ]
      },
    },
  }
</script>

<style scoped>
  .loginApp{
    text-align: center;
  }
  .a{
    width: 100vw;
    height: 100vh;
    background-color: black;
  }
  .app{
    text-align: center;
  }
  .loginForm{
    display: inline-block;
    text-align: center;
    width: 80%;
    height: 100%;
    /* background-color: red; */
  }
</style>
