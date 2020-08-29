// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#9652ff',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70'

  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',// default - only for display purposes
  },
})