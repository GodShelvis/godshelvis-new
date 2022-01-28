import { createApp } from 'vue'
import App from './App.vue'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import svgIcon from './components/svgIcon.vue'

const app = createApp(App)
app.use(VueClipboard)
app.component('svg-icon', svgIcon)
app.mount('#app')
