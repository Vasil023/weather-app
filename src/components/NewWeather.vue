<template>
    <div class="searchWeather">
      <input v-model="search.city" type="text" placeholder="Search city" v-on:keyup.enter="getWeatherByCoords">
      <div class="click" @click="getWeatherByCoords">
        <img src="https://img.icons8.com/ios/24/000000/search--v1.png"/>
      </div>
    </div>
    <!-- /.searchWeather -->
</template>

<script>
export default {
  props: {
    search: {
      type: Object,
      requaired: true
    }
  },
  methods: {
    getWeatherByCoords () {
      this.$emit('getWeatherByCoords', this.search)
    }
  }
    
}
</script>

<style scoped>
.searchWeather {
  display: flex;
  margin-left: 300px;
}
.click {
  margin-left: 15px;
}
</style>