<template>
  <div id="app">
    <NavBar />
    <div class="container">
       <NewWeather
         :search="search"
        @getWeatherByCoords="getWeatherByCoords" />
        <WeatherDisplay
        :weatherData="weatherData" />
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import NewWeather from '@/components/NewWeather.vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
import NavBar from '@/components/NavBar.vue'
export default {
 components: {
   NewWeather,
   WeatherDisplay,
   NavBar
 },
  data () {
    return {
      search: {
        city: ""
      },
      weatherData: [],
    };
  },
  methods: {
    getWeatherByCoords () {
      this.$axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ this.search.city}&appid=b385654260d2d01837d1c6041cb10101`)
      .then(response => (this.weatherData.push(response.data)))
      this.search.city = '';
    },
  },
}
</script>
<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 4ziozeoow0px;
  
}
</style>
