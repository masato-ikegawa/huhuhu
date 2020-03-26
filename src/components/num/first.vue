<template>
  <div class="num">
    <div 
    class="num-main">
      <div class="num-index">
          <img src="../../assets/slice/number_01.svg" alt="">
      </div>
      <div class="num-time">
          10:40
      </div>
    </div>
    <div class="num-title">
        #おはよう
    </div>
  </div>
</template>

<script>
export default {
  name: 'numfirst',
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
    width: 80%;
    left: 10%;
    top: 7%;
    position: absolute;
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
