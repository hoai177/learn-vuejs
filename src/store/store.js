import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  actions: {
    addPost(vuexContext, postData) {
      vuexContext.commit('addPost', postData);
    },
  },
    mutations: { // thay đổi state
      addPost(state, postData) {
        state.posts.push(postData);
      }
    }
})