<template>
  <div class="moreswipe">
    <div 
    class="moreswipe-item">
        <span>MORE</span>
        <br>
        <span>SWIPE→</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moreswipe',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes bound{
    0% { transform:translateY(0px); }
    50% { transform:translateY(10px); }
    100% { transform:translateY(  0px); }
}
.moreswipe{
  position: absolute;
  right: 3px;
  bottom: 25px;
}
.moreswipe-item {
    text-align: left;
    width: 73px;
    animation: bound 3s infinite ;
    color: white;
}
.moreswipe-item span{
  text-decoration: underline;
}
</style>
