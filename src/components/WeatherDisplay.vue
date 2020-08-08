<template>
    <div class="info">
     <div class="wrapper" v-for="(note, index) in weatherData" :key="index"> 
      <div class="weather-name">
        {{note.name}}
      </div>
      <!-- /.title -->
    <div class="weather-icon">
      <img :src="`http://openweathermap.org/img/wn/${note.weather[0].icon}.png`">
    </div>
    <!-- /.weather-icon -->
      <div class="descr">
        {{note.weather[0].main}}
      </div>
      <!-- /.descr -->
      <div class="weather-temp">
        {{`${Math.floor(note.main.temp)}` - 273 }}
      </div>
      <!-- /.weather-temp -->
    </div> 
     </div>
      <!-- /.info -->
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Array,
      required: true
    }
  }
   
}
</script>

<style scoped>
.weather-temp {
  display: flex;
}
</style>