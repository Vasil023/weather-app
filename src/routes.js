// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) 

// Pages
import WeatherDisplay from './components/WeatherDisplay'
import Week from './pages/WeatherWeek'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weatherDisplay',
      component: WeatherDisplay
    },
    {
      path: '/weather',
      name: 'weather',
      component: Week
    }
  ]
})