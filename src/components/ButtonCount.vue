<template>
    <button @click="onIncrement">Increment</button>
    <button @click="onDecrement">decrement</button>
</template>

<script>
 export default {
      methods: {
        onIncrement() {
            this.$emit('incrementCount')
        },
        onDecrement() {
            this.$emit('decrementCount')
        }
      }
    }

</script>