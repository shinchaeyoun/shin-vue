import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './assets/js/common'
import './assets/scss/_index.scss'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.use(store)
app.use(router)
app.use(common)
app.mount('#app')
