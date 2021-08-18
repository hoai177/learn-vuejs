<template>
  <h2>{{ count }}</h2>
  <p>{{ message }}</p>
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
        <tr v-for="(post, index) in postList" v-bind:key="index" v-show="setPaginate(index)">
          <td>{{ post.id }}</td>
          <td>{{ post.userId }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="current--" v-if="current != 1"><i class="fas fa-chevron-left"></i></button>
      <button v-for="pageNumber in paginate_total" v-bind:key="pageNumber" @click="current = pageNumber" v-bind:class="{'active':current === pageNumber}">{{ pageNumber}}</button>
      <button @click="current++" v-if="current < paginate"><i class="fas fa-chevron-right"></i></button>
    </div>
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
       current: 1,
       postList: [],
       loading: true,
       timer: null,
       paginate: 10,
       paginate_total: 0
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
        },
        setPaginate(i) {
          this.paginate_total = this.postList.length/this.paginate;
          if (this.current == 1) return i < this.paginate;
          else return i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate);
        }
    },
    created() {
      this.timer = setTimeout(() => {
        this.getPost()
      }, 2000);
    },
    beforeUnmount() {
      clearTimout(this.timer)
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
</style>

