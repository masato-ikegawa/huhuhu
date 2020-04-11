<template>
  <div class="content-first">
    <div
    class="message"
    v-show="!loading">
      <p>
        This site was created to make people around the world 'ほっこり'
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentFirst',
  components: {
  },
  data () {
    return {
      msg: 'HELLO FUFUFU',
      loading: true
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
