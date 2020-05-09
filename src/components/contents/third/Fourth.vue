<template>
  <div class="fourth-box">
      <p class="fourth-box__text">これからも毎日ほっこり<br>過ごせますように・・・</p>
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
  left: 148px;
}
</style>
