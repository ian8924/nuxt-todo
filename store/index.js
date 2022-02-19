export const state = () => ({
  loading: false,
});

export const mutations = {
  changeLoading(state, val) {
    state.loading = val;
  },
};

export const getters = {
  loading(state) {
    return state.loading;
  },
};
