<template>
  <div class="seventh-box">
      <img 
      src="../../../assets/train_leftfome/ko_iki5.jpg"
      class="seventh-box__img"
      >
      <p class="seventh-box__text">
      ガ<br>タ<br>ン<br>ゴ<br>ト<br>ン
    </p>
  </div>
</template>

<script>

export default {
  name: 'Seventhbox',
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
.seventh-box {
  margin-top: 15px;
  text-align: right;
  position: relative;
}
.seventh-box__img {
  margin-right: 37.5px;
  width: 65%;
}
.seventh-box__text {
  line-height: 1em;
  position: absolute;
  top: 1px;
  left: 115px;
  font-size: 15px;
  color:black;
  font-weight: bold;
}

</style>
