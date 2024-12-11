import { createApp } from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomeView from "@/view/HomeView.vue";
import ReactivityFundamentals from "@/view/ReactivityFundamentals.vue";
import TemplateSyntax from "@/view/TemplateSyntax.vue";

const app = createApp(App);

const routes = [
    {"path": "/",component: HomeView},
    {"path": "/template-syntax",component: TemplateSyntax},
    {"path": "/reactivity-fundamentals",component: ReactivityFundamentals},

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

app.use(router);
app.mount('#app')
