<template>
    <div class="searchWeather">
       <div class="click" @click="getWeatherByCoords">
         <svg @click="show =!show" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="48" height="48"
              viewBox="0 0 172 172"
              style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z" fill="#377763"></path><path d="M78.83333,53.75h14.33333v64.5h-14.33333z" fill="#ffffff"></path><path d="M53.75,78.83333h64.5v14.33333h-64.5z" fill="#ffffff"></path></g></g></svg>
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
input {
  width: 327px;
  height: 46px;
  left: 24px;
  top: 44px;
  border: none;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;

  color: #C4C4C4;

  background: #FDFCFC;
  border-radius: 15px;
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