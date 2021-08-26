import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    postHome: [],
    paginate: 10,
    loading: true,
  },
  actions: {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            commit('SET_POSTS', response.data)
            this.state.loading = false
        })
      },
    addPost(vuexContext, postData) {
      vuexContext.commit('addPost', postData);
    },
  },
    mutations: { // thay đổi state
      loading(state) {
        state.loading = false
      },
      SET_POSTS(state, posts) {
        state.posts = posts
      },
      addPost(state, postData) {
        state.postHome.push(postData);
      }
    }
})