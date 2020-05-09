<template>
  <div class="nineth-box">
      <p class="nineth-box__text">食べてばっかな日が<br>あってもいいよね</p>
      <img 
      src="../../../assets/arima/ko_arima7.jpg"
      class="nineth-box__img"
      >
  </div>
</template>

<script>

export default {
  name: 'Ninethbox',
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
.nineth-box {
  margin-top: 15px;
  margin-bottom: 150px;
  text-align: left;
  position: relative;
}
.nineth-box__img {
  width: 70%;
  margin-left: 27.5px;
}
.nineth-box__text {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 12px;
  left: 196px;
  color: white;
}

</style>
