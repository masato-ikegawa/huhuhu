<template>
  <div class="fifth-box">
    <img 
    src="../../../assets/house/ko_home3.jpg"
    class="fifth-box__img">
    <p class="fifth-box__text">
      ゆ<br>っ<br>く<br>り<br>起<br>き<br>て<br>一<br>日<br>旅<br>に
    </p>
  </div>
</template>

<script>

export default {
  name: 'Fifthbox',
  components: {
  },
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
.fifth-box {
  margin-top: 90px;
  position: relative;
}
.fifth-box__img {
  width: 70%;
}
.fifth-box__text {
  position: absolute;
  line-height: 1em;
  position: absolute;
  top: 1px;
  right: 75px;
  font-size: 13px;
  color: white;
  font-weight: bold;
}

</style>
