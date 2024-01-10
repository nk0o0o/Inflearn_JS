import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
import VueFinalModal from 'vue-final-modal'
import Toast, {useToast, POSITION} from "vue-toastification";
import {ToastInterface} from "vue-toastification/dist/types/ts/interface";
import { registerScrollSpy, Easing } from 'vue3-scroll-spy';
import VCalendar from 'v-calendar';

// loadFonts()

const app = createApp(App);
registerScrollSpy(app, {
  easing: Easing.Cubic.In
})

// set global properties
app.config.globalProperties.$toast = useToast();

// use plugins
app.use(router)
app.use(store)
app.use(vuetify)
app.use(VueFinalModal())
app.use(Toast, {timeout: 3000, position: POSITION.TOP_RIGHT})
app.use(VCalendar)



// mount to
app.mount('#app')

// for typescript
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
      readonly $toast: ToastInterface,
  }
}