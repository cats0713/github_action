<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn
      to="/"
    >
      Home
    </v-btn>
    <v-btn
      @click="test"
    >
      test
    </v-btn>
    <v-btn
    @click="test2"
    >
    test2
    </v-btn>
  </div>
</template>
<script>
  export default {
    name: 'AboutView',
    methods: {
      test: function () {
        this.$axios.post('/api/test', { a: 'testetstset' }).then(res => {
          console.log(res.data)
        })
      },
      test2: function () {
        this.$axios.post('/api/data', { ok: 'ok' }).then(res => {
          console.log(res.data)
        })
      },
    },
  }
</script>
