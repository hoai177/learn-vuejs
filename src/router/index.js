import { createWebHistory, createRouter } from "vue-router";
import Todo from './../components/Todo.vue'
import Home from './../components/Home.vue'
import News from './../components/News.vue'

const routes = [
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;