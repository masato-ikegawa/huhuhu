<template>
  <div class="content-third">
    <margin />
    <div class="top-title">
      <numthird4content />
      <img
      src="../assets/4index/oya_arima.jpg"
      class="top-title__img"
      >
      <p class="top-title__tag"># わからん！</p>
    </div>
    <secondbox />
    <thirdbox />
    <fourthbox />
    <fifthbox />
    <sixthbox />
    <seventhbox />
    <eighthbox />
    <ninethbox />
    <footerlink />
  </div>
</template>

<script>
import Margin from './Margin.vue'
import numthird4content from './contents/numthird4content.vue'
import Secondbox from './contents/third/Second.vue'
import Thirdbox from './contents/third/Third.vue'
import Fourthbox from './contents/third/Fourth.vue'
import Fifthbox from './contents/third/Fifth.vue'
import Sixthbox from './contents/third/Sixth.vue'
import Seventhbox from './contents/third/Seventh.vue'
import Eighthbox from './contents/third/Eighth.vue'
import Ninethbox from './contents/third/Nineth.vue'
import Footerlink from './contents/FooterLink.vue'

export default {
  name: 'Contentthird',
  components: {
    Margin,
    numthird4content,
    Secondbox,
    Thirdbox,
    Fourthbox,
    Fifthbox,
    Sixthbox,
    Seventhbox,
    Eighthbox,
    Ninethbox,
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
