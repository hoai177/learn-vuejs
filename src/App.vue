<template>
  <h1>Learn vuejs</h1>
  <br>
  <router-link to="/todo">Go to Todo</router-link> <br>
  <router-link to="/home">Go to home</router-link>
  <router-view />
</template>

<script setup>
import Home from './components/Home.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
@import './assets/css/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
