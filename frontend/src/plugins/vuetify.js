import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import ripple from 'vuetify/lib/directives/ripple'

Vue.use(Vuetify, { directives: { ripple } })

const lightTheme = {
  primary: '#1E88E5',
  secondary: '#1565C0',
  accent: '#e91e63',
  info: '#00CAE3',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#FF5252',
}

const dardTheme = {
  primary: '#1E88E5',
  secondary: '#1565C0',
  accent: '#e91e63',
  info: '#00CAE3',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#FF5252',
}

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: dardTheme,
      light: lightTheme,
    },
  },
})
