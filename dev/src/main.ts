import { createApp } from 'vue'

// Using import aliases in Vite
import MyLibrary from 'shadcn-vue-ui'
import  'shadcn-vue-ui/assets/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(MyLibrary)

app.mount('#app')
