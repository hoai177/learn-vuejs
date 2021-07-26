<template>
  <h1>Learn vuejs</h1>
  <h2>{{ this.count }}</h2>
  <button @click="increment">Increment</button>
  <Button @decrement-count="decrement"></Button>
</template>

<script>
import Button from "./Button.vue"
 export default {
    components: {
      Button
    },
    data () {
      return {
       count: 0
      }
    },
    methods: {
        increment() {
          this.count++
        },
        decrement() {
          this.count--
        }
    }
}

</script>

