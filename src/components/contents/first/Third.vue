<template>
  <div 
  class="third-box"
  v-scroll="handleScroll">
    <p class="third-box__text">目覚ましはかけない。<br>気持ちいい目覚め</p>
  </div>
</template>

<script>

export default {
  name: 'Thirdbox',
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

.third-box {
  position:relative;
  height: 340px;
  opacity: 0;
  animation: hide 1s ease;
}
.active {
  animation: show 5s ease;
}
.third-box__text {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 70px;
  left: 148px;
  font-weight: bold;
  text-align: -webkit-auto;
}
</style>
