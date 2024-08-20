import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vClickOutside from './directives/v-click-outside'

const app = createApp(App)

app.directive('click-outside', vClickOutside)

app.mount('#app')
