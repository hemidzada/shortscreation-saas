import { createStore } from 'vuex'

export default createStore({
  state: {
    // host: 'http://localhost/',
    host: 'https://api.vidhub.ai',
  },
  modules: {
    user: {
      namespaced: true,
      ...require('./user.js')
    },
    youtubeAccounts: require('./youtubeAccounts.js')
  }
})
