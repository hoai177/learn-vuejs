<template>
  <h1>Learn vuejs</h1>
  <button @click="increment">Increment {{ this.count }}</button>
</template>

<script>

 export default {
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

