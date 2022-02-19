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
    console.log(todo);
    let { id, text, checked } = todo;
    let idx = state.list.findIndex((i) => i.id === id);

    state.list[idx].checked = checked;
    state.list[idx].text = text;
    console.log(state.list);
    Cookies.set("todo-list", JSON.stringify(state.list));
  },
};
