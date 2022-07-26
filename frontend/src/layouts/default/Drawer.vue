<template>
  <v-navigation-drawer
    id="default-drawer"
    v-model="drawer"
    app
    width="260"
    height="100%"
  >
    <v-list>
      <v-btn
        :to="`/${item.title}`"
        plain
        v-for="item in items"
        :key="item.title"
        link
      width="260"
        height="50"
        class="sideBtn"
      >
        <div class="sideBtnIcon">
          <v-icon>{{ item.icon }}</v-icon>
        </div>
        {{ item.title }}
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',
    data () {
      return {
        items: [
          { title: 'about', icon: 'mdi-view-dashboard' },
          { title: 'room', icon: 'mdi-account-box' },
          { title: 'sns', icon: 'mdi-note-text-outline' },
          { title: 'login', icon: 'mdi-login' },
          { title: 'signup', icon: 'mdi-account-arrow-down-outline' },
          { title: 'table', icon: 'mdi-file-table-box' },
          { title: 'file', icon: 'mdi-file' },
          { title: 'Info', icon: 'mdi-information' },
        ],
      }
    },
    computed: {
      drawer: sync('app/drawer'),
    },
  }

</script>
