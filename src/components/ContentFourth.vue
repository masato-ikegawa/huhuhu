<template>
  <div class="content-fourth">
    <margin />
    <div class="top-title">
      <numfourth4content />
      <img
      src="../assets/4index/oya_kaeri.jpg"
      class="top-title__img"
      >
      <p class="top-title__tag"># おんせん</p>
    </div>
    <secondbox />
    <thirdbox />
    <fourthbox />
    <fifthbox />
    <footerlink />
  </div>
</template>

<script>
import Margin from './Margin.vue'
import numfourth4content from './contents/numfourth4content.vue'
import Secondbox from './contents/fourth/Second.vue'
import Thirdbox from './contents/fourth/Third.vue'
import Fourthbox from './contents/fourth/Fourth.vue'
import Fifthbox from './contents/fourth/Fifth.vue'
import Footerlink from './contents/FooterLink.vue'

export default {
  name: 'Contentfourth',
  components: {
    Margin,
    numfourth4content,
    Secondbox,
    Thirdbox,
    Fourthbox,
    Fifthbox,
    Footerlink
  },
  data () {
    return {
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
.top-title {
  position: relative;
}
.top-title__img {
  width: 100%;
}
.top-title__tag {
  bottom: 2%;
  font-weight: bold;
  font-size: 18px;
  right: 6%;
  color: white;
  position: absolute;
}

</style>
