<template>
  <div 
  class="nineth-box"
  v-scroll="handleScroll">
    <p class="nineth-box__text">行ってきまーす</p>
  </div>
</template>

<script>

export default {
  name: 'Ninethbox',
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
.nineth-box {
  position:relative;
  height: 250px;
  opacity:0;
  animation: hide 1s ease;
}
.active {
  animation: show 5s ease;
}
.nineth-box__text {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 69px;
  right: 160px;
  font-weight: bold;
}

</style>
