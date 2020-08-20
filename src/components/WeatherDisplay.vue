<template>
    <div class="info">
      <div class="info-wrraper">
        <carousel
       :perPage="3"
       ::perPageCustom="[[540, 2], [1024, 3]]"
       >
        <slide
        v-for="(note, index) in weatherData" :key="index">
      <div class="wrapper" > 
          <div class="weather-name">
            {{note.name}}
          </div>
          <!-- /.title -->
        <div class="weather-icon">
          <img :src="`http://openweathermap.org/img/wn/${note.weather[0].icon}@4x.png`">
        </div>
        <!-- /.weather-icon -->
          <div class="weather-temp">
            {{`${Math.floor(note.main.temp)}` - 273 }}&#176
          </div>
          <!-- /.weather-temp -->
          <div class="weather-status">
            {{note.weather[0].main}}
          </div>
          <!-- /.descr -->
          <div class="temp">
            <div class="temp-max-wrapper">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="14" height="14"
                  viewBox="0 0 172 172"
                  style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#098c29"><path d="M86,70.08173l57.98798,56.79928c2.58413,2.53245 6.71875,2.50661 9.30288,-0.05169l10.15565,-10.15565c2.58413,-2.60997 2.58413,-6.79628 -0.02584,-9.38041l-72.74339,-72.27824c-1.29206,-1.29207 -2.97175,-1.9381 -4.67728,-1.9381c-1.70553,0 -3.38522,0.64603 -4.67728,1.9381l-72.74339,72.27824c-2.60997,2.58413 -2.60997,6.77044 -0.02584,9.38041l10.15565,10.15565c2.58413,2.55829 6.71875,2.58413 9.30288,0.05169z"></path></g></g></svg>
            </div>
            <div class="temp-max">
              {{`${Math.floor(note.main.temp_max)}` - 273}}
            </div>
            <!-- /.temp-min -->
            <div class="temp-title">
              Max
            </div>
            <!-- /.temp-title -->
            </div>
            <!-- /.temp-max-wrapper -->
            <div class="temp-min-wrapper">
              <div class="temp-min-icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="24" height="24"
                  viewBox="0 0 172 172"
                  style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ff0606"><path d="M53.24609,68.08333l-10.75,10.75l43.50391,43.5039l43.5039,-43.5039l-10.75,-10.75l-32.7539,32.7539z"></path></g></g></svg>
              </div>
        <!-- /.temp-min-icon -->
              <div class="temp-min">
              {{`${Math.floor(note.main.temp_min)}` - 273}}
            </div>
            <div class="temp-min-title">
              Min
            </div>
            <!-- /.temp-title -->
            </div>
            <!-- /.temp-min-wrapper -->
          
          </div>
          <!-- /.temp -->
        </div> 
        </slide>
       
</carousel>
      </div>
      <!-- /.info-wrraper -->
       
    
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
  },
}
</script>

<style scoped>
.info {
  width: 720px;
}
.wrapper:hover {
  box-shadow: 4px 3px 19px -9px rgba(0,0,0,0.75);
}
.weather-name {
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Thasadith';
}
img {
    height: 168px;
    margin-top: -20px;
  }
.weather-temp {
  margin-left: 21px;
  font-size: 47px;
  font-family: 'Thasadith';
}
.weather-status {
  font-size: 16px;
  font-family: 'Thasadith';
}
.temp {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.temp-max {
  font-size: 14px;
}
.temp-min {
  font-size: 15px;
}
.temp-max-wrapper {
  margin-top: 2px;
}
.temp-title {
  font-size: 12px;
  color: green;
  font-family: 'Thasadith';
}
.temp-min-title {
  font-size: 12px;
  color: red;
  font-family: 'Thasadith';
}
@media screen and (max-width: 480px) {
    .info {
      width: 320px;
    }
  }
  @media screen and (max-width: 520px) {
    .info {
      width: 420px;
    }
  }
</style>