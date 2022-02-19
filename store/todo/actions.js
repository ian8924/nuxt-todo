export default {
  addTodoApi({ commit }, req) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("add", req);
        resolve();
      }, 1000);
    });
  },
  removeTodoApi({ commit }, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("remove", id);
        resolve();
      }, 1000);
    });
  },
};
