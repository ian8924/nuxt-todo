export default {
  add(state, todo) {
    state.list.push({ ...todo });
  },
  remove(state, id) {
    let idx = state.list.findIndex((i) => i.id === id);
    state.list.splice(idx, 1);
  },
  toggle(state, todo) {
    let { id, val } = todo;
    let idx = state.list.findIndex((i) => i.id === id);
    state.list[idx].checked = val;
    console.log(state.list);
  },
};
