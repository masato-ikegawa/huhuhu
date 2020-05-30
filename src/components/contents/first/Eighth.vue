<template>
  <div 
  class="eighth-box"
  v-scroll="handleScroll">
      <img 
      src="../../../assets/house/ko_home6.jpg"
      class="eighth-box__img"
      >
  </div>
</template>

<script>

export default {
  name: 'Eighthbox',
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
.eighth-box {
  margin-top: 15px;
  text-align: right;
  opacity: 0;
  animation: hide 1s ease;
}
.active {
  animation: show 1s ease;
}
.eighth-box__img {
  margin-right: 27.5px;
  width: 65%;
}

</style>
