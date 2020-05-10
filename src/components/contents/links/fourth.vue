<template>
  <router-link to='content-4'>
    <li class="link-fourth">
        <img 
        src="../../../assets/slice/picutre_kaeri.png"
        class="link-fourth__img"
        >
        <span class="link-fourth__tag"># おんせん</span>
    </li>
  </router-link>
</template>

<script>

export default {
  name: 'FourthLink',
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

.link-fourth {
  width: 22%;
  display: inline-block;
}
.link-fourth__img {
  animation: bound 2.5s 0.6s infinite ;
  width: 95%;
}
.link-fourth__tag {
  color: black;
  font-size: 14px;
}
</style>
