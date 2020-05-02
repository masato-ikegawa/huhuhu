<template>
  <li class="link-first">
      <img 
      src="../../../../assets/slice/picutre_home.png"
      class="link-first__img"
      >
      <span class="link-first__tag"># おはよう</span>
  </li>
</template>

<script>

export default {
  name: 'FirstLink',
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
.link-first {
  width: 22%;
  display: inline-block;
  margin-right: 5px;
}
.link-first__img {
  width: 95%;
}
.link-first__tag {
  font-size: 14px;
}
</style>
