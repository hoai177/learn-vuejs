<template>
  <h2>{{ count }}</h2>
  <p>{{ message }}</p>
  <ButtonCount @onCount="onIncrement">Icrement</ButtonCount>
  <ButtonCount @onCount="onDecrement">Decrement</ButtonCount>
  <div class="box-posts">
    <h2 class="title">Post List</h2>
    <ul v-for="(post, index) in postHome" :key="index">
      <li>id: {{ post.id }}</li>
      <li>userId: {{ post.userId }}</li>
      <li>title: {{ post.title }}</li>
      <li>body: {{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
import ButtonCount from "./ButtonCount.vue";
 export default {
    components: {
      ButtonCount
    },
    data () {
      return {
       count: 0,
       current: 1,
       paginate_total: 0,
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
    },
    computed: {
      postHome() {
        return this.$store.state.postHome
      }
    }
}

</script>
<style scoped>
.box-posts {
  width: 1000px;
  margin: 0 auto;
}
table {
  margin-bottom: 20px;
}
table th, table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #888;
}
.title {
  margin-top: 25px;
  text-align: left;
}
.pagination button {
    width: 50px;
    height: 30px;
    margin-right: 10px;
    border: 2px solid #2AB564;
    background: #fff;
    color: #2AB564;
    font-weight: bold;
    cursor: pointer;
}
.pagination button.active {
  background: #2AB564;
  color: #fff;
}
.box-posts ul {
  padding-left: 0;
  border-bottom: 1px solid;
  padding: 10px 0;
}
.box-posts li {
  display: block;
  text-align: left;
}
</style>

