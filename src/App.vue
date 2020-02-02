<template>
  <div id="app">
    <Gn/>
    <div id="gnCover"></div>
    <div id="gnWrapper" class="clearfix">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Gn from './components/gn.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components : {
    Gn,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#gnCover{
  display: none;
  background-color: white;
  opacity: 0.6;
  z-index: 9997;
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
  height: 100%;
}
#gnWrapper{
  position: relative;
  top: 70px;
  left: 0;
}
</style>
