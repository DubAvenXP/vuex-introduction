export const increment = (state) => {
    state.count++;
    state.lastMutation = 'increment';
};

export const incrementBy = (state, value) => {
    state.count += value;
    state.lastMutation = 'incrementBy ' + value;
    state.lastRandomNumber = value;
};

export const setLoading = (state, status) => {
    state.isLoading = status;
    state.lastMutation = 'setLoading ' + status;
};