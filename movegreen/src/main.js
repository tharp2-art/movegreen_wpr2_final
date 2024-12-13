import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
