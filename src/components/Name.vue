<template>
<h1>Learn vuejs</h1>
  <h2>{{ this.count }}</h2>
<ButtonCount @onCount="onIncrement">Icrement</ButtonCount>
<ButtonCount @onCount="onDecrement">Decrement</ButtonCount>
</template>

<script>
import ButtonCount from "./ButtonCount.vue"
 export default {
    components: {
      ButtonCount
    },
    data () {
      return {
       count: 0
      }
    },
    methods: {
        onIncrement() {
          this.count++
        },
        onDecrement() {
          if(this.count > 0) {
            this.count--
          }
        }
    }
}

</script>

