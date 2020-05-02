<template>
  <div class="sixth-box">
    <img 
    src="../../../assets/train_leftfome/ko_iki4.jpg"
    class="sixth-box__img"
    >
    <p class="sixth-box__text">
      ガ<br>タ<br>ン<br>ゴ<br>ト<br>ン
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
  margin-top: 90px;
  text-align: left;
  position: relative;
}
.sixth-box__img {
  margin-left: 37.5px;
  width: 65%;
}
.sixth-box__text {
  line-height: 1em;
  position: absolute;
  top: 1px;
  left: 86px;
  font-size: 15px;
  color:black;
  font-weight: bold;
}
</style>
