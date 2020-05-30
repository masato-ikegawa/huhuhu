<template>
  <div 
  class="fourth-box"
  v-scroll="handleScroll">
      <img 
      src="../../../assets/house/ko_home2.jpg"
      class="fourth-box__img">
    </div>
</template>

<script>

export default {
  name: 'Fourthbox',
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
      }else {
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

.fourth-box {
  opacity: 0;
  animation: hide 1s ease;
}
.active {
  animation: show 5s ease;
}
.fourth-box__img {
  width: 80%;
}
</style>
