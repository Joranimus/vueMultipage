import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        gif:{},
        time:{}
    },
    getters: {
        allGifs(state){
            return state.gif
        }
    },
    mutations: {
        updateGifs(state, gifs) {
            state.gif = gifs
        },
        setTime(state, time){
            state.time = time
        }
    },
    actions:{
        Actual(ctx){
            console.log("Actual", this.state.time)
            if ((Date.now() - this.state.time) > (1000*60*60) ) {
                this.getGifs;
                const time = Date.now();
                ctx.commit('setTime', time)}
        },
        getGifs(ctx){
            axios.get('https://api.giphy.com/v1/gifs/trending?api_key=nbbaXJY4oa7KE8bMbqIm8b8xXSNpKvm7&tag=&rating=g')
                .then(response => {
                const gifs = response.data;
                ctx.commit('updateGifs', gifs)
                }) 
                .catch(function (error) {
                // handle error
                console.log(error);
                })
                .then(function () {
                // always executed
                });
        }
    }
})