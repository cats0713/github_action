<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />

    <v-toolbar-title
      class="font-weight-light text-h5"
      v-text="name"
    />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',
    data () {
      return {
        snackbarText: '',
      }
    },
    computed: {
      drawer: sync('app/drawer'),
      name: get('route/name'),
    },
    methods: {
    },
  }
</script>
