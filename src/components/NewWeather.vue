<template>
    <div class="searchWeather">
       <div class="click" @click="getWeatherByCoords">
        <img @click="show = !show" src="https://img.icons8.com/ios/24/000000/search--v1.png"/>
      </div>
      <transition name="slide-fade"> 
        <input v-if="show" v-model="search.city" type="text" placeholder="Search city" v-on:keyup.enter="getWeatherByCoords">
      </transition>
    </div>
    <!-- /.searchWeather -->
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
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
.slide-fade-enter-active {
  transition: all .3s;
}
.slide-fade-leave-active {
  transition: .3s;
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-right: 100px;
}
.searchWeather {
  margin-top: 13px;
  display: flex;
  justify-content: flex-end;
}
.click {
  margin-left: 15px;
}
</style>