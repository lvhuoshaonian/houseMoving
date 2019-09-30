import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
