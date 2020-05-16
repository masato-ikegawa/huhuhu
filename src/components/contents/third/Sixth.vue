<template>
  <div 
  class="sixth-box"
  v-scroll="handleScroll">
    <img 
    src="../../../assets/arima/ko_arima4.jpg"
    class="sixth-box__img"
    >
    <p class="sixth-box__text1">
      ホカ
    </p>
    <p class="sixth-box__text2">
      ホカ
    </p>
  </div>
</template>

<script>

export default {
  name: 'Sixthbox',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleScroll (evt, el) {
      // display:noneだと0になってしまう
      let top = el.getBoundingClientRect().top
      let divHeiht = el.clientHeight
      let height = window.screen.height
      if (top > 0 && height > top + divHeiht/2) {
        el.classList.add('active');
        el.style.opacity = 1
      } else {
        el.classList.remove('active')
        el.style.opacity = 0
      }
      // return tureでscroll検知されなくなる
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes show{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes hide{
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}

.sixth-box {
  opacity: 0;
  animation: hide 1s ease;
  margin-top: 15px;
  text-align: right;
  position: relative;
}
.active {
  animation: show 1s ease;
}
.sixth-box__img {
  margin-right: 27.5px;
  width: 50%;
}
.sixth-box__text1 {
  line-height: 1em;
  position: absolute;
  top: 8px;
  right: 39px;
  font-size: 15px;
  color:white;
  font-weight: bold;
  transform: rotate(7deg);
}
.sixth-box__text2 {
  line-height: 1em;
  position: absolute;
  top: 56px;
  left: 194px;
  font-size: 15px;
  color:white;
  font-weight: bold;
  transform: rotate(-12deg);
}
</style>
