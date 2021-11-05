<template>
  <div class="nav-bar" :class="{'light-thems' : !dark,
  'dark' : dark}">
    <div class="wrapper-logo">
<!--      <div class="nav-bar&#45;&#45;button">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 49.945 32">-->
<!--        <g id="Menu_Burger_Icon" data-name="Menu Burger Icon" transform="translate(-31.528 -30)">-->
<!--          <rect id="Прямоугольник_9" data-name="Прямоугольник 9" width="49.945" height="4" rx="2" transform="translate(31.528 58)" fill="#594e78"/>-->
<!--          <rect id="Прямоугольник_10" data-name="Прямоугольник 10" width="49.945" height="4" rx="2" transform="translate(31.528 44)" fill="#594e78"/>-->
<!--          <rect id="Прямоугольник_11" data-name="Прямоугольник 11" width="49.945" height="4" rx="2" transform="translate(31.528 30)" fill="#594e78"/>-->
<!--        </g>-->
<!--      </svg>-->
<!--    </div>-->
    <!-- /.nav-bar--button -->
    <div class="nav-bar--logo" :class="{'color-white' : !dark,
    'color-logo' : dark}">
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" viewBox="0 0 206.708 42.841">
    <g id="Logo" transform="translate(-149.292 -17.159)">
      <path id="Контур_1" data-name="Контур 1" d="M588.076-43.217V-86.058l42.841,42.841Z" transform="translate(-438.784 103.216)" fill="#00ff9b"/>
      <path id="Контур_2" data-name="Контур 2" d="M0,42.841V0L42.841,42.841Z" transform="translate(149.292 60) rotate(-90)" fill="#003eff"/>
      <text id="Minimis" transform="translate(236 51)"  font-size="28" font-family="Helvetica" letter-spacing="0.1em"><tspan x="0" y="0">Weather</tspan></text>
    </g>
</svg>
    </div>
    <!-- /.nav-bar--logo -->
    </div>
    <!-- /.wrapper-logo -->
    
    <div class="nav-bar--title">
        <p>TODAY</p>
    </div>
    <!-- /.nav-bar--title -->
    <div class="nav-bar--checkbox">
      <div class="light">LIGHT</div>
       <div @click="togleDarkMode" class="switch-btn" :class="{switchOn: toggle}"></div>
       <div class="black">DARK</div>
    </div>
    <!-- /.nav-bar--checkbox -->
  </div>
  <!-- /.nav-bar -->
</template>

<script>

export default {
  props: {
    dark: {
      type: Boolean,
      required: true
    },
    toggle: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    togleDarkMode () {
      this.$emit('togleDarkMode')
    }
  }
}
</script>

<style lang="scss">
.dark {
  background: #2B244D;
  color: white;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 72px;
  box-shadow: 0px 0.5px 18px 0px rgba(243,244,255,1); 
}
.wrapper-logo {
  display: flex;
  margin-top: 18px;
}
.color-logo {
  fill: white;
}
.color-white {
  fill: #432c85
}
.nav-bar--button {
  margin-right: 30px;
  margin-left: 15px;
  margin-top: 4px;
  }
.nav-bar--title {
  padding-top: 20px;
  font-size: 25px;
}
.nav-bar--checkbox {
  display: flex;
  margin-top: 24px;
  margin-right: 20px;
}
</style>