import Vuex from 'vuex'
import Vue from 'vue'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});