<template>
  <div class="content-fourth">
    <ldanime4content v-show="loading" />
    <margin v-show="!loading" />
    <div 
    class="top-title"
    v-show="!loading">
      <numfourth4content />
      <img
      src="../assets/4index/oya_kaeri.jpg"
      class="top-title__img"
      >
      <p class="top-title__tag"># おんせん</p>
    </div>
    <icon4scroll v-show="!loading" />
    <secondbox v-show="!loading" />
    <thirdbox v-show="!loading" />
    <fourthbox v-show="!loading" />
    <fifthbox v-show="!loading" />
    <footerlink v-show="!loading" />
  </div>
</template>

<script>
import Ldanime4content from './contents/Ldanime4content.vue'
import Margin from './Margin.vue'
import numfourth4content from './contents/numfourth4content.vue'
import icon4scroll from './contents/icon4scroll.vue'
import Secondbox from './contents/fourth/Second.vue'
import Thirdbox from './contents/fourth/Third.vue'
import Fourthbox from './contents/fourth/Fourth.vue'
import Fifthbox from './contents/fourth/Fifth.vue'
import Footerlink from './contents/FooterLink.vue'

export default {
  name: 'Contentfourth',
  components: {
    Ldanime4content,
    Margin,
    numfourth4content,
    icon4scroll,
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
    this.startLoading()
    setTimeout(this.stopLoading, 4000);
    // setTimeout(this.stopLoading, 130);
  },
  methods: {
    startLoading () {
      let elGn = document.getElementById('gn')
      let elFooter = document.getElementById('stFooter')
      elGn.style.display = 'none'
      elFooter.style.display = 'none'
    },
    stopLoading () {
      let elGn = document.getElementById('gn')
      let elFooter = document.getElementById('stFooter')
      elGn.style.display = 'block'
      elFooter.style.display = 'block'
      this.loading = false
    }
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
