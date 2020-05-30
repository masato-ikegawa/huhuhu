<template>
  <div 
  class="eighth-box"
  v-scroll="handleScroll">
      <img 
      src="../../../assets/train_leftfome/ko_iki6.jpg"
      class="eighth-box__img"
      >
      <p class="eighth-box__text">
        有馬温泉到着〜
      </p>
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
  opacity: 0;
  animation: hide 1s ease;
  margin-top: 90px;
  margin-bottom:150px;
  position: relative;
}
.active {
  animation: show 5s ease;
}
.eighth-box__img {
  width: 70%;
}
.eighth-box__text {
  line-height: 1em;
  position: absolute;
  top: 177px;
  left: 115px;
  font-size: 15px;
  color:white;
  font-weight: bold;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

</style>
