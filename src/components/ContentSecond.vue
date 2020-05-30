<template>
  <div class="content-second">
    <margin />
    <div class="top-title">
      <numsecond4content />
      <img
      src="../assets/4index/oya_iki.jpg"
      class="top-title__img"
      >
      <p class="top-title__tag"># おでかけ</p>
    </div>
    <icon4scroll />
    <secondbox />
    <thirdbox />
    <fourthbox />
    <fifthbox />
    <sixthbox />
    <seventhbox />
    <eighthbox />
    <footerlink />
  </div>
</template>

<script>
import Margin from './Margin.vue'
import numsecond4content from './contents/numsecond4content.vue'
import icon4scroll from './contents/icon4scroll.vue'
import Secondbox from './contents/second/Second.vue'
import Thirdbox from './contents/second/Third.vue'
import Fourthbox from './contents/second/Fourth.vue'
import Fifthbox from './contents/second/Fifth.vue'
import Sixthbox from './contents/second/Sixth.vue'
import Seventhbox from './contents/second/Seventh.vue'
import Eighthbox from './contents/second/Eighth.vue'
import Footerlink from './contents/FooterLink.vue'

export default {
  name: 'ContentSecond',
  components: {
    Margin,
    numsecond4content,
    icon4scroll,
    Secondbox,
    Thirdbox,
    Fourthbox,
    Fifthbox,
    Sixthbox,
    Seventhbox,
    Eighthbox,
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
  color: black;
  position: absolute;
}

</style>
