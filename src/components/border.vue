<template>
  <div class="border">
    <div 
    v-scroll="handleScroll"
    class="border-item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'border',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleScroll (evt, el) {
        let top = el.getBoundingClientRect().top
        let height = window.screen.height
        let y = window.scrollY
        console.log(height)
        console.log(y + top)
        console.log(height/9 < y + top)
        if (height/9 < y + top) {
            console.log('sss')
            el.classList.add('active');
      }
      return window.scrollY > 100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes extend{
    from{
        height: 0px;
    }
    to{
        height: 200px;
    }
}

/* todo: position absoluteなど必要 */
.border-item {
    display:none;
    animation: extend 5s ;
    background-color: black;
    width:0.5vw;
}
.active {
    display: block;
    height: 200px;
}
</style>
