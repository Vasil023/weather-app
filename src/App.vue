<template>
  <div id="app">

   <NewWeather
   :search="search"
   @getWeatherByCoords="getWeatherByCoords" />
  <WeatherDisplay
  :weatherData="weatherData" />
  </div>
  
</template>

<script>
import NewWeather from '@/components/NewWeather.vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
export default {
 components: {
   NewWeather,
   WeatherDisplay
 },
  data () {
    return {
      search: {
        city: ''
      },
      weatherData: []
    };
  },
  methods: {
    getWeatherByCoords () {
    
 this.$axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ this.search.city }&appid=b385654260d2d01837d1c6041cb10101`)
      .then(response => (this.weatherData.push(response.data)))
      if (this.search == '') {
        return false
      }
      this.search = '';
    },
    
  },
}
</script>
<style>
#app {
   
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #fcfcfc;
}
.wrapper {
  background: white;
  border-radius: 3%;
  margin-top: 50px;
  margin-left: 30px;
  box-shadow: -1px 3px 19px -9px rgba(0,0,0,0.75);
  width: 175px;
  height: 260px;
}
.info {
 display: flex;
}
</style>
