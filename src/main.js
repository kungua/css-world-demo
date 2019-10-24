import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import VueHighlightJS from 'vue-highlight.js'
import scss from 'highlight.js/lib/languages/scss'
import html from 'highlight.js/lib/languages/htmlbars'
import js from 'highlight.js/lib/languages/javascript'
import vueJSHighlight from 'vue-highlight.js/lib/languages/vue'
import 'highlight.js/styles/default.css'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)

Vue.use(VueHighlightJS, {
  languages: {
    scss,
    js,
    html,
    vueJSHighlight
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
