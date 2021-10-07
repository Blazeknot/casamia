import { createStore } from 'vuex'
import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase/db'

export default createStore({
  state: {
    todos: []
  },

  mutations: {
    FETCH_TODOS: (state, value) => {
      state.todos = value
    }
  },

  actions: {
    loadTodos: async ({ commit }) => {
      const todosSnapshot = await getDocs(collection(db, 'todos'))
      const todoList = todosSnapshot.docs.map((doc) => doc.data())

      commit('FETCH_TODOS', todoList)
    }
  },

  getters: {}
})
