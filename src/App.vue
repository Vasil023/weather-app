<template>
  <div id="app" :class="{'light-thems' : !isDarkMode,
  'dark-thems' : isDarkMode}">
    <NavBar 
    :dark="isDarkMode"
    :toggle="active"
    @togleDarkMode="togleDarkMode" />
    <div class="container">
       <NewWeather
         :search="search"
        @getWeatherByCoords="getWeatherByCoords" />
        <WeatherDisplay
        :weatherData="weatherData"
        :dark="isDarkMode"
        :togleDarkMode="togleDarkMode"
        />
    
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
      weather: null,
      isDarkMode: false,
      active: true
    };
  },
  mounted () {
    if (localStorage.getItem('weatherData')) {
      try {
        this.weatherData = JSON.parse(localStorage.getItem('weatherData'));
      } catch (e) {
        localStorage.removeItem('weatherData');
      }
    }
  },
  methods: {
    getWeatherByCoords () {
      this.$axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ this.search.city}&appid=b385654260d2d01837d1c6041cb10101`)
      .then(response => (this.weatherData.push(response.data)))
      this.search.city = '';
      this.saveWeather();
    },
    removeItem (x) {
      this.weatherData.splice(x, 1)
      this.saveWeather()
    },
    saveWeather () {
      const parsed = JSON.stringify(this.weatherData);
      localStorage.setItem('weatherData', parsed)
    },
    togleDarkMode () {
    this.isDarkMode = !this.isDarkMode
    this.active = !this.active
  }
  },  
}
</script>
<style>
.dark-thems {
  background: linear-gradient(to bottom, #00057A,  #721C87);
}
.light-thems {
  background: while;
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
