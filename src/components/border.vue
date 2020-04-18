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
        if (height/9 < y + top) {
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
        opacity: 0;
    }
    to{
        height: 235px;
        opacity: 1;
    }
}

@keyframes changeOpa{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

/* todo: position absoluteなど必要 */
.border-item {
    display:none;
    animation: extend 3s ;
    background-color: black;
    width:0.5vw;
    position: absolute;
    left: 14px;
}
.active {
    display: block;
    height: 235px;
}
</style>
