import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import FontAwesomeIcon from "./utilities/fontawesome-icons.js";


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
