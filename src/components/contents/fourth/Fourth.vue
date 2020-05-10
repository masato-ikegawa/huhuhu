<template>
  <div class="fourth-box">
      <p class="fourth-box__text">夜の駅はまた違った雰囲気</p>
    </div>
</template>

<script>

export default {
  name: 'Fourthbox',
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
.fourth-box {
  position:relative;
  height: 340px;
}
.fourth-box__text {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 70px;
  left: 159px;
}
</style>
