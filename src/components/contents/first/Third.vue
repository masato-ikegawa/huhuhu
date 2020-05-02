<template>
  <div class="third-box">
    <p class="third-box__text">か<br>く<br>け<br>ん<br>ま<br>ち</p>
  </div>
</template>

<script>

export default {
  name: 'Thirdbox',
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
.third-box {
  position:relative;
  height: 340px;
}
.third-box__text {
  position: absolute;
  top: 70px;
  left: 183px;
}
</style>
