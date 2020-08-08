import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    weatherData: []
  },
  mutations: {
    setWeather (state, payload) {
      state.weatherData = payload

    }
  },
  actions: {
    getWeather ({commit}, payload) {
      let info = null
      let weatherFromApi =  axios 
      .get('api.openweathermap.org/data/2.5/weather?id=2172797&appid=b385654260d2d01837d1c6041cb10101')
      .then(response => (info = response.data))
      commit('getWeather', info)

        }
    },
    getters: {
      getWeather (state) {
        return state.weatherData
      }
    }
})

