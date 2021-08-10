import { createWebHistory, createRouter } from "vue-router";
import Todo from './../components/Todo.vue'
import Home from './../components/Home.vue'

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
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;