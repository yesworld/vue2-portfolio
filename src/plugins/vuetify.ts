import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.amber.base,
    secondary: colors.blue.base,
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
