<template>
  <li class="link-second">
      <img 
      src="../../../assets/slice/picutre_iki.png"
      class="link-second__img"
      >
      <span class="link-second__tag"># 行き電車</span>
  </li>
</template>

<script>

export default {
  name: 'SecondLink',
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

.link-second {
  width: 22%;
  display: inline-block;
  margin-right: 5px;
}
.link-second__img {
  animation: bound 2.5s 0.2s infinite ;
  width: 95%;
}
.link-second__tag {
  font-size: 14px;
}
</style>
