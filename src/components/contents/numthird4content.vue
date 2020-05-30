<template>
  <div class="num">
    <div 
    class="num-main">
      <div class="num-index">
          <img src="../../assets/slice/ko_number_03.svg" alt="">
      </div>
      <!-- <div class="num-time">
          14:40
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'numthird4content',
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
    margin-top: 14px;
    width: 80%;
    text-align: left;
    position: absolute;
    left: 20px;
}
.num-main {
    height: 100%;
    width: 100%;
    margin-bottom: -4%;
}
.num-index {
    vertical-align: baseline;
    width: 15%;
    height: 34px;
}
.num-time {
    vertical-align: 42%;
    font-weight: bold;
    font-size: 25px;
    width: 25%;
}
.num-title {
    font-size: 20px;
}
</style>
