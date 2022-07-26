<template>
  <v-fade-transition mode="out-in">
    <v-app>
    <router-view />
    </v-app>
  </v-fade-transition>
</template>

<script>
  // Styles
  import '@/styles/overrides.sass'

  export default {
    name: 'App',
    metaInfo: {
      title: 'EXAMPLE',
      titleTemplate: '%s | PROJECT',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
    created () {
    },
  }
</script>
