import App  from "./App.js";
import AppHeader  from "./AppHeader.js";
import AppNav  from "./AppNav.js";
import AppView  from "./AppView.js";
import BookComponent  from "./BookComponent.js";

const app = Vue.createApp(App)
app.component('BookComponent', BookComponent)
app.component('AppView', AppView)
app.component('AppHeader', AppHeader)
app.component('AppNav', AppNav)
app.mount('#app');//react에선 return