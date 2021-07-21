<template>
  <h1>Learn vuejs</h1>
  <button @click="state.count++">Increment {{ state.count }}</button>
</template>

<script setup>
import {reactive } from 'vue'


const state = reactive({ count: 0 })
</script>

