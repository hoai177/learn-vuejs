<template>
    <button @click="decrement">decrement</button>
</template>

<script>
 export default {
      methods: {
        decrement() {
            this.$emit('decrementCount')
        }
      }
    }

</script>