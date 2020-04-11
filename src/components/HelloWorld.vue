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
      <li
      class="top_ul-li"
      v-touch:start="Taphandler"
      v-touch:end="holdEnd"
      v-touch:swipe.left=swipeHandler_1>
        <border v-show="!loading" />
        <numfirst v-show="!loading" />
        <moreswipe v-show="!loading" />
        <img
          src="../assets/4index/oya_home.jpg"
          class="top_ul-li-img"
          id="first">
      </li>
      <li
      class="top_ul-li"
      v-touch:start="Taphandler"
      v-touch:end="holdEnd"
      v-touch:swipe.left="swipeHandler_2">
        <border v-show="!loading" />
        <numsecond v-show="!loading" />
        <moreswipe v-show="!loading" />
        <img
          src="../assets/4index/oya_iki.jpg"
          class="top_ul-li-img">
      </li>
      <li
      class="top_ul-li"
      v-touch:start="Taphandler"
      v-touch:end="holdEnd"
      v-touch:swipe.left="swipeHandler_3">
        <border v-show="!loading" />
        <numthird v-show="!loading" />
        <moreswipe v-show="!loading" />
        <img
          src="../assets/4index/oya_arima.jpg"
          class="top_ul-li-img">
      </li>
      <li
      class="top_ul-li"
      v-touch:start="Taphandler"
      v-touch:end="holdEnd"
      v-touch:swipe.left="swipeHandler_4">
        <border v-show="!loading" />
        <numfour v-show="!loading" />
        <moreswipe v-show="!loading" />
        <img
          src="../assets/4index/oya_kaeri.jpg"
          class="top_ul-li-img">
      </li>
    </ul>
  </div>
</template>

<script>
import Border from './border.vue'
import Numfirst from './num/first.vue'
import Numsecond from './num/second.vue'
import Numthird from './num/third.vue'
import Numfour from './num/four.vue'
import Moreswipe from './moreswipe.vue'
export default {
  name: 'HelloWorld',
  components: {
    Border,
    Numfirst,
    Numsecond,
    Numthird,
    Numfour,
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
    // setTimeout(this.stopLoading, 13000);
    setTimeout(this.stopLoading, 130);
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
    },
    // 引数を渡せない、swipeのdirectionと衝突してしまう
    swipeHandler_1 () {
      let nextPageUrl = 'content-1'
      setTimeout(this.$router.push({name: nextPageUrl}), 130000);
    },
    swipeHandler_2 () {
      let nextPageUrl = 'content-2'
      this.$router.push({name: nextPageUrl})
    },
    swipeHandler_3 () {
      let nextPageUrl = 'content-3'
      this.$router.push({name: nextPageUrl})
    },
    swipeHandler_4 () {
      let nextPageUrl = 'content-4'
      this.$router.push({name: nextPageUrl})
    },
    Taphandler (e) {
      let obj = e.target
      obj.classList.add("active")
    },
    holdEnd (e) {
      let obj = e.target
      obj.classList.remove("active");
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

@keyframes swipe-opacity {
    from{
        opacity: 1;
        transform: translateX(0px);
    }
    to{
        opacity: 0.7;
        transform: translateX(-200px);
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
.top_ul-li{
  position: relative;
}
.top_ul-li-img{
  width: 100%;
}
.top_ul-li-img.active{
  animation: swipe-opacity 1.5s ease;
}
.top_ul-li-img.ha{
  animation: ha 1s ease;
}
</style>
