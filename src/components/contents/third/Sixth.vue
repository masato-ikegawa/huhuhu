<template>
  <div class="sixth-box">
    <img 
    src="../../../assets/arima/ko_arima4.jpg"
    class="sixth-box__img"
    >
    <p class="sixth-box__text1">
      ホカ
    </p>
    <p class="sixth-box__text2">
      ホカ
    </p>
  </div>
</template>

<script>

export default {
  name: 'Sixthbox',
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
.sixth-box {
  margin-top: 15px;
  text-align: right;
  position: relative;
}
.sixth-box__img {
  margin-right: 27.5px;
  width: 50%;
}
.sixth-box__text1 {
  line-height: 1em;
  position: absolute;
  top: 8px;
  right: 39px;
  font-size: 15px;
  color:white;
  font-weight: bold;
  transform: rotate(7deg);
}
.sixth-box__text2 {
  line-height: 1em;
  position: absolute;
  top: 56px;
  left: 194px;
  font-size: 15px;
  color:white;
  font-weight: bold;
  transform: rotate(-12deg);
}
</style>
