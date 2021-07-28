<template>
  <h1>Todo Page</h1>
  <ul>
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
      return {
       items: ['Lam viec', 'Tap the duc', 'Doc sach']
      }
    },
}
</script>

<style>
  ul {
    display: inline-block;
  }
</style>