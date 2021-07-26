<template>
  <h1>Learn vuejs</h1>
  <button @click="increment">Increment {{ this.count }}</button>
  <Button></Button>
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
            this.count = this.count+1
        }
    }
}

</script>

