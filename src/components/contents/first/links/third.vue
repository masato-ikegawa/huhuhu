<template>
  <li class="link-third">
      <img 
      src="../../../../assets/slice/picutre_arima.png"
      class="link-third__img"
      >
      <span class="link-third__tag"># みてい？</span>
  </li>
</template>

<script>

export default {
  name: 'ThirdLink',
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
.link-third {
  width: 22%;
  display: inline-block;
  margin-right: 5px;
}
.link-third__img {
  width: 95%;
}
.link-third__tag {
  font-size: 14px;
}
</style>
