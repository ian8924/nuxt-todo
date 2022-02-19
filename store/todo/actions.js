import Cookies from "js-cookie";
export default {
  getTodoApi({ commit }, id) {
    return new Promise((resolve, reject) => {
      let res = Cookies.get("todo-list")
        ? JSON.parse(Cookies.get("todo-list"))
        : [];
      setTimeout(() => {
        commit("set", res);
        resolve();
      }, 1000);
    });
  },
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
