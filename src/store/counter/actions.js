import getRandomInt from "@/helpers/getRandomInt";


export const incrementRandomInt = async ({ commit }) => {
    // context.commit('setLoading', true);
    commit('setLoading', true);
    const randomInt = await getRandomInt(1, 10);
    commit('incrementBy', randomInt);
    commit('setLoading', false);
};