<template>
  <li class="link-first">
      <img 
      src="../../../assets/slice/picutre_home.png"
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

@keyframes bound{
    0% { transform:translateY(0px); }
    25% { transform:translateY(-20px); }
    50% { transform:translateY(  0px); }
}

.link-first {
  width: 22%;
  display: inline-block;
  margin-right: 5px;
}
.link-first__img {
  animation: bound 2.5s infinite ;
  width: 95%;
}
.link-first__tag {
  font-size: 14px;
}
</style>
