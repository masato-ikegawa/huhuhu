<template>
  <div class="content-first">
    <div
    class="message"
    >
      <p>
        This site was created to make people around the world 'ほっこり'
      </p>
    </div>
    <div class="top-title">
      <numfirst4content />
      <img
      src="../assets/4index/oya_home.jpg"
      class="top-title__img"
      >
      <p class="top-title__tag"># おはよう</p>
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
import numfirst4content from './contents/numfirst4content.vue'
import Secondbox from './contents/first/Second.vue'
import Thirdbox from './contents/first/Third.vue'
import Fourthbox from './contents/first/Fourth.vue'
import Fifthbox from './contents/first/Fifth.vue'
import Sixthbox from './contents/first/Sixth.vue'
import Seventhbox from './contents/first/Seventh.vue'
import Eighthbox from './contents/first/Eighth.vue'
import Ninethbox from './contents/first/Nineth.vue'
import Footerlink from './contents/first/FooterLink.vue'

export default {
  name: 'ContentFirst',
  components: {
    numfirst4content,
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
