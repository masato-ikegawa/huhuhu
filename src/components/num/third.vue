<template>
  <div class="num">
    <div 
    class="num-main">
      <div class="num-index">
          <img src="../../assets/slice/number_03.svg" alt="">
      </div>
      <div class="num-time">
          14:40
      </div>
    </div>
    <div class="num-title">
        #有馬
    </div>
  </div>
</template>

<script>
export default {
  name: 'numsecond',
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
.num {
    position: absolute;
    left: 20px;
    width: 80%;
    text-align: left;
}
.num-main {
    height: 100%;
    width: 100%;
    margin-bottom: -4%;
}
.num-index {
    vertical-align: baseline;
    width: 15%;
    display: inline-block;
}
.num-time {
    vertical-align: 42%;
    font-weight: bold;
    font-size: 25px;
    width: 25%;
    display: inline-block;
}
.num-title {
    font-size: 20px;
}
</style>
