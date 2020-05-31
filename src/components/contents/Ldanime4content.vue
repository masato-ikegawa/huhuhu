<template>
  <div
    class="ld-anime"
    v-show="loading">
      <img 
      src="../../assets/slice/rocket.png" 
      class="ld-anime__img"
      alt="">
    </div>
</template>

<script>
export default {
  name: 'ldanime4content',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes rocket{
    from{
        transform:translateY(1000px);
    }
    to{
       transform:translateY(-1000px);
    }
}
.ld-anime {
  animation: rocket 6s ease;
}
.ld-anime__img {
  width: 30%;
}
</style>
