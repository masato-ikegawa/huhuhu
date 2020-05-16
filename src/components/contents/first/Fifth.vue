<template>
  <div 
  class="fifth-box"
  v-scroll="handleScroll">
    <img 
    src="../../../assets/house/ko_home3.jpg"
    class="fifth-box__img">
    <p class="fifth-box__text">
      ゆ<br>っ<br>く<br>り<br>起<br>き<br>て<br>一<br>日<br>旅<br>に
    </p>
  </div>
</template>

<script>

export default {
  name: 'Fifthbox',
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
      // console.log('top:'+top)
      // console.log('div:'+divHeiht)
      // console.log('height'+height)
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

.fifth-box {
  margin-top: 90px;
  position: relative;
  opacity: 0;
  animation: hide 1s ease;
}
.active {
  animation: show 1s ease;
}
.fifth-box__img {
  width: 70%;
}
.fifth-box__text {
  position: absolute;
  line-height: 1em;
  position: absolute;
  top: 1px;
  right: 75px;
  font-size: 13px;
  color: white;
  font-weight: bold;
}

</style>
