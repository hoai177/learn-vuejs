<template>
  <h2>{{ count }}</h2>
  <ButtonCount @onCount="onIncrement">Icrement</ButtonCount>
  <ButtonCount @onCount="onDecrement">Decrement</ButtonCount>
  <div class="box-posts">
    <h2 class="title">Post List</h2>
    <div v-if="loading"><i class="fas fa-spinner"></i></div>
    <table v-else>
      <thead>
        <tr>
          <th>id</th>
          <th>userId</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody v-if="postList && postList.length">
        <tr v-for="(post, index) in postList" v-bind:key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.userId }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonCount from "./ButtonCount.vue";
import axios from 'axios'
 export default {
    components: {
      ButtonCount
    },
    data () {
      return {
       count: 0,
       postList: [],
       loading: true,
       timer: null
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
        },
        getPost() {
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => this.postList = response.data)
          .catch(error => console.log(error))
          .finally(() => this.loading = false)
        }
    },
    created() {
      this.timer = setTimeout(() => {
        this.getPost()
      }, 2000)
    },
    beforeUnmount() {
      clearTimout(this.timer)
    },
}

</script>
<style scoped>
.box-posts {
  width: 1000px;
  margin: 0 auto;
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
</style>

