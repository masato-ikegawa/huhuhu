<template>
  <router-link to="content-3">
    <li class="link-third">
        <img 
        src="../../../assets/slice/picutre_arima.png"
        class="link-third__img"
        >
        <span class="link-third__tag"># おまいり</span>
    </li>
  </router-link>
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

@keyframes bound{
    0% { transform:translateY(0px); }
    25% { transform:translateY(-20px); }
    50% { transform:translateY(  0px); }
}

.link-third {
  width: 22%;
  display: inline-block;
  margin-right: 5px;
}
.link-third__img {
  animation: bound 2.5s 0.4s infinite ;
  width: 95%;
}
.link-third__tag {
  color: black;
  font-size: 14px;
}
</style>
