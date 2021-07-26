<template>
    <button @click="onCount">
        <slot></slot>
    </button>
</template>

<script>
 export default {
      methods: {
        onCount() {
            this.$emit('onCount');
        }
      }
    }

</script>
