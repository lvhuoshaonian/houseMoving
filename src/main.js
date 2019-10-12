import Vue from 'vue'
import App from './App.vue'
import router from './routers'


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
