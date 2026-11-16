// Bootstrap first so the app's own styles (in App.vue) come later and win without !important
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

createApp(App).use(router).use(i18n).mount('#app')
