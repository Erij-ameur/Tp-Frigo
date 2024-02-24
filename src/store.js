import { createStore } from 'vuex';

export default createStore({
  state: {
    editingElement: null,
  },
  mutations: {
    setEditingElement(state, element) {
      state.editingElement = element;
    },
  },
  actions: {
    editElement({ commit }, element) {
      commit('setEditingElement', element);
    },
  },
});
