<template>
  <br>
  <br>
  <div class="box-form">
    <h2 class="title">Todo List</h2>
    <form @submit="submitForm">
      <input type="text" v-model="name" placeholder="Add Todo">
      <input type="submit" value="Add"> 
    </form>
    <p class="error">{{ this.error }}</p>
    <p class="notify">{{ reversedMessage }}</p>
    <ul>
      <li v-for="(name, index) in dataName" v-bind:key="index">
        {{ name }} <button @click="removeName(index)" class="remove">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
      return {
        dataName: [],
        name:'',
        error: '',
        message: 'Bạn Cần Hoàn Thành Công Việc!!'
      }
    },
    methods: {
      submitForm (e) {
        e.preventDefault();
        if(!this.name) { return this.error = 'Please enter the value!' };
          this.dataName.push(this.name);
          this.name = '';
          this.error = ''
      },
      removeName (index) {
        this.dataName.splice(index, 1);
      },
    },
    computed: {
        reversedMessage: function () {
          if(this.dataName.length > 5) {return this.message}
        }
    },
}
</script>

<style>
body {
  background-color: #E8FEFD;
}
.title {
  text-align: left;
}
  .box-form {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #cccccc54;
    border-radius: 5px;
  }
  ul {
        width: 100%;
        padding-left: 0;
        text-align: left;
  }
  ul li {
    display: block;
    margin-bottom: 20px;
  }
  input[type="text"] {
    width: 85%;
    height: 30px;
    border: 1px solid #ccccccb3;
    border-radius: 3px;
    padding: 0 10px;
  }
  input[type="text"]:focus {
    outline: none;
  }
  input[type="submit"] {
    height: 30px;
    margin-left: 10px;
    border: 1.5px solid #13c2c2;
    color: #13c2c2;
    border-radius: 3px;
    background: #fff;
    cursor: pointer;
  }
  .remove {
      float: right;
      height: 30px;
      border: 1px solid #f5222d;
      border-radius: 3px;
      color: #f5222d;
      background: #fff;
      cursor: pointer;
  }
  .error{
    text-align: left;
    color: #f5222d;
  }
  .notify  {
    text-align: left;
    color: #ffc800;
  }
</style>