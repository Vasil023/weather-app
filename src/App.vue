<template>
  <div id="app">

    <input v-model="search" type="text">
    <button @click="getWeatherByCoords">Add</button>
    <div class="wrapper" v-if="info">
      
      <div class="sity-name">
      {{info.name}}
    </div>
    <div class="icon">
      <img :src="`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`">
    </div>
    <!-- /.icon -->
    <div class="status">
      {{info.weather[0].main}}
    </div>
    <!-- /.status -->
    <div class="temp">
      {{`${Math.floor(info.main.temp - 273)}&#176C`}}
    </div>
    <!-- /.temp -->
    </div> 
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      info: null,
      search: '',

    };
  },
  methods: {
    getWeatherByCoords () {
      this.$axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ this.search }&appid=b385654260d2d01837d1c6041cb10101`)
      .then(response => (this.info = response.data))
      if (this.search == '') {
        return false
      }
      this.search = '';
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.rapper {
  margin-left: 260px;
  border: 1px solid gray;
  width: 200px;
  height: 250px;
}
</style>
