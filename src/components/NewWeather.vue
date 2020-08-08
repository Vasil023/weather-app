<template>
    <div class="searchWeather">
      <input v-model="search.city" type="text">
      <button @click="getWeatherByCoords">Add</button>
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