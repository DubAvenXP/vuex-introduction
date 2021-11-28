
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
    namespaced: true,
    
    state,
    mutations, // mutations are synchronous
    actions, // actions are asynchronous
    getters // getters are used to retrieve data from the store
};

export default counterStore;