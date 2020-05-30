<template>
  <div class="icon4scroll">
    <img 
    src="../../assets/slice/scroll.svg"
    class="icon4scroll-item">
  </div>
</template>

<script>
export default {
  name: 'icon4scroll',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes bound{
    0% { transform:translateY(0px); }
    50% { transform:translateY(-20px); }
    100% { transform:translateY(  0px); }
}
.icon4scroll{
  position: absolute;
  left: 3px;
}
.icon4scroll-item{
    z-index: 999;
    width: 50%;
    animation: bound 3s infinite ;
}
</style>
