import Cookies from "js-cookie";
export default {
  set(state, todo) {
    state.list = [...todo];
  },
  add(state, todo) {
    state.list.unshift({ ...todo });
    Cookies.set("todo-list", JSON.stringify(state.list));
  },
  remove(state, id) {
    let idx = state.list.findIndex((i) => i.id === id);
    state.list.splice(idx, 1);
    Cookies.set("todo-list", JSON.stringify(state.list));
  },
  edit(state, todo) {
    let { id, text, checked, updateTime } = todo;
    let idx = state.list.findIndex((i) => i.id === id);

    state.list[idx].checked = checked;
    state.list[idx].text = text;
    state.list[idx].updateTime = updateTime;
    Cookies.set("todo-list", JSON.stringify(state.list));
  },
};
