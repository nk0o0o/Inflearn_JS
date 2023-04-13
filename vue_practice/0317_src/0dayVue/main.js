import { createApp } from 'vue';
import App  from "./App.vue";
import AppHeader  from "./AppHeader.vue";
import AppNav  from "./AppNav.vue";
import AppView  from "./AppView.vue";
import BookComponent  from "./BookComponent.vue";

const app = createApp(App)
app.component('BookComponent', BookComponent)
app.component('AppView', AppView)
app.component('AppHeader', AppHeader)
app.component('AppNav', AppNav)
app.mount('#app');//react에선 return