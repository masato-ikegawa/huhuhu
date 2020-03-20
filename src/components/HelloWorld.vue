<template>
  <div class="hello">
    <div
    class="ld-anime"
    v-show="loading">
      <p class="loading-msg">huhuhu?</p>
    </div>
    <div
    class="message"
    v-show="!loading">
      <p>
        This site was created to make people around the world 'ほっこり'
      </p>
    </div>
    <ul v-show="!loading">
      <border v-show="!loading" />
      <li>
        <img
          src="../assets/favicon.jpg"
          class="top_ul-li-img">
      </li>
      <border v-show="!loading" />
      <li>
        <img
          src="../assets/favicon.jpg"
          class="top_ul-li-img">
      </li>
      <border v-show="!loading" />
      <li>
        <img
          src="../assets/favicon.jpg"
          class="top_ul-li-img">
      </li>
      <border v-show="!loading" />
      <li>
        <img
          src="../assets/favicon.jpg"
          class="top_ul-li-img">
      </li>
    </ul>
    <moreswipe v-show="!loading" />
  </div>
</template>

<script>
import Border from './border.vue'
import Moreswipe from './moreswipe.vue'
export default {
  name: 'HelloWorld',
  components: {
    Border,
    Moreswipe
  },
  data () {
    return {
      msg: 'HELLO FUFUFU',
      loading: true
    }
  },
  mounted () {
    this.startLoading()
    setTimeout(this.stopLoading, 13000);
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@keyframes show{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes typing {
  0% {
    width: 0;
  }
  /* 10% {
    width: 3%;
  }
  20% {
    width: 11%;
  }
  30% {
    width: 18%;
  }
  40% {
    width: 25%;
  }
  50% {
    width: 29%;
  }
  60% {
    width: 36%;
  }
  70% {
    width: 44%;
  } */
  100% { 
    width:55%;
  }
}

@keyframes cursor {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
  100% {
    border-color: transparent;
  }
}
.ld-anime{
  height: 100%;
  color: black;
  text-align: center;
}
.loading-msg{
  border-right: 0.1em solid #000;
  letter-spacing: 10%;
  margin-left: 22%;
  margin-right: 22%;
  margin-top: 70%;
  font-size: 14vw;
   white-space: nowrap;
    overflow: hidden;
  animation: typing 10s steps(7, end), cursor 1.4s step-end infinite;
}
.message{
  animation: show 4s linear 0s;
}
.top_ul-li-img{
  width: 100%;
}
</style>
