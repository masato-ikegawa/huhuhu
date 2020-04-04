<template>
  <div id="wrapper">
    <div 
    id="gn" 
    class="clearfix"
    >
      <div 
      id="gnHome" 
      class="clearfix"
      ref="gnHome">
        <picture>
        <source 
        media="(min-width: 640px)" 
        srcset="https://weebee1212.com/renewal/common/images/pc/weebeelogo.png">
        <img 
        src="https://weebee1212.com/renewal/common/images/sp/weebeelogo.png" 
        alt="WeeBee" 
        id="gnLogo">
        </picture>
        <p id="gnConcept">"つながりで笑顔に"<br>神大生のための情報サイト</p>
        <div id="gnMenuWrap">
          <img 
          v-bind:src="srcMenuImage"
          id="gnMenu"
          v-on:click="switchMenu">
        </div>
      </div>
      <transition name="gn-menu">
        <ul v-if="showMenu">
          <li><a href=""><div class="hover"></div>情熱取材</a></li>
          <li><div class="hover"></div><a href="">SNAP×SNAP</a></li>
          <li><div class="hover"></div><a href="">Shiandai365</a></li>
          <li><div class="hover"></div><a href="">美男美女</a></li>
          <li><div class="hover"></div><a href="">シンタメ</a></li>
          <li><div class="hover"></div><a href="">Photo×Club</a></li>
          <li><div class="hover"></div><a href="">ミセナビ</a></li>
          <li><div class="hover"></div><a href="">団体図鑑</a></li>
          <li><div class="hover"></div><a href="">特別コンテンツ</a></li>
        </ul>
      </transition>
    </div>
    <div 
    id="gnCover"
    class="clearfix"
    v-bind:style="{width:gnCoverWidth,height:gnCoverHeight}"
    v-show="showGnCover">
    </div>
    <div 
    id="gnWrapper" 
    class="clearfix"
    ref="gnWrapper"
    >
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable no-console */
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components : {
    Footer
  },
  data () {
    return {
      srcMenuImage: 'https://weebee1212.com/common/images/sp/menu.png',
      gnCoverWidth: '100%',
      gnCoverHeight: '100%',
      gnWrapperTop: '70px',
      status: 'none',
      showGnCover: false,
      showMenu: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeWindow())
  },
  methods: {
    resizeWindow () {
      const elGnWrapper = this.$refs.gnWrapper
      // const elGnHome = this.$refs.gnHome
      this.gnCoverWidth = String(window.innerWidth) + 'px'
      this.gnCoverHeight = String(elGnWrapper.clientHeight) + 'px'
    },
    switchMenu () {
      if(this.showMenu) {
        this.showMenu = false
        this.showGnCover = false
        this.srcMenuImage = 'https://weebee1212.com/common/images/sp/menu.png'
      } else {
        this.showMenu = true
        this.showGnCover = true
        this.srcMenuImage = 'https://weebee1212.com/common/images/sp/close.png'
      }
    }
  }
}
</script>

<style>
body{
  margin: 0;
  margin-top: -4.5%;
}
ul{
  padding-inline-start:0;
  margin: 0;
}

@keyframes show{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
#wrapper {
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 375px;
}
#gnCover{
  background-color: white;
  opacity: 0.6;
  z-index: 9997;
  position: absolute;
  top: 70px;
  left: 0px;
  /* width: 100%;
  height: 100%; */
}
#gnWrapper{
  position: relative;
  top: 70px;
  left: 0;
}

.gn-menu-enter-active, .gn-menu-leave-active {
     transition: all .4s;
}
.gn-menu-enter, .gn-menu-leave-to {
   max-height: 0;
   /* opacity: 0; */
   overflow: hidden;
}
.gn-menu-enter-to, .gn-menu-leave {
   max-height: 250px;
   overflow: hidden;
}

@charset "utf-8";
*, *:before, *:after {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
/* gn */
#gn{
  top: 0%;
  position: fixed;
  width: 375px;
  background-color: white;
  z-index: 10000;
  animation: show 2s linear 0s;
}
#gnHome{
  position: relative;
  border-bottom: 1px solid #B7B7B7;
}
#gnLogo{
  display: block;
  margin: 0 auto;
  width: 90px;
  padding: 13px 0;
}
#gnConcept{
  display: none;
}
#gnMenuWrap{
  position: absolute;
  width: 60px;
  right: 0;
  top: 0;
  background-color: black;
  height: 59px
}
#gnMenu{
  display: block;
  background-color: black;
  position: absolute;
  width: 22px;
  height: auto;
  top: 0;
  right: 0;
  padding: 16.5px 19px;
  z-index: 100;
}
#gn>ul{
  /* display: none; */
   height: 250px;
}
#gn>ul>li{
  position: relative;
  font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif"!important;
  display:inline-block;
  list-style: none;
  width: 49.8%;
  float: left;
  padding: 14px 0;
  font-size: 10pt;
  text-align: center;
  border-right: 1px solid #B7B7B7;
  border-bottom: 1px solid #B7B7B7;
}
#gn>ul>li>a{
  text-decoration: none;
  font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif"!important;
  color: black;
  display:block;
  font-weight: bold;
  width: 100%;
}
#gn>ul>li:nth-child(2n){
  border-right: none;
}
#gn>ul>li .hover{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #C61D32;
  -webkit-tap-highlight-color: #C61D32;
  z-index: -1;
}
#gn>ul>li:nth-child(2) .hover{
  -webkit-tap-highlight-color: #646666;
  background-color: #646666;
}
#gn>ul>li:nth-child(3) .hover{
  -webkit-tap-highlight-color: rgb(89,179,91);
  background-color: rgb(89,179,91);
}
#gn>ul>li:nth-child(4) .hover{
  -webkit-tap-highlight-color: #F9B4B7;
  background-color: #F9B4B7;
}
#gn>ul>li:nth-child(5) .hover{
  -webkit-tap-highlight-color: #CDDA34;
  background-color: #CDDA34;
}
#gn>ul>li:nth-child(6) .hover{
  -webkit-tap-highlight-color: #5999BD;
  background-color: #5999BD;
}
#gn>ul>li:nth-child(7) .hover{
  -webkit-tap-highlight-color: #F7931E;
  background-color: #F7931E;
}
#gn>ul>li:nth-child(8) .hover{
  -webkit-tap-highlight-color: #FFD543;
  background-color: #FFD543;
}
#gn>ul>li:nth-child(9) .hover{
  -webkit-tap-highlight-color: #56CBC2;
  background-color: #56CBC2;
}
#gnWrapper{
  position: relative;
  top: 70px;
  left: 0;
}

@media screen and (min-width:640px){
  #gnWrapper{
  position: relative;
  top: 90px;
  left: 0;
  }
}

@media screen and (min-width:961px){
  #gnWrapper{
  position: relative;
  top: 120px;
  left: 0;
  }
}


/* @media screen and (min-width:640px){
    #gn>ul{
    margin: 0 5%;
  }
  #gn>ul>li{
    z-index: 0;
    border: none;
    width: 20%;
    padding: 20px 0;
  }
  #gn>ul>li>a{
    font-size: 9pt;
  }
  #gnLogo{
    width: 125px;
    padding: 15px 0px;
  }
  #gnMenuWrap{
    height: 77.61px;
    width: 78px;
  }
  #gnMenu{
    width: 30px;
    padding: 20.9px 24px;
  }
  #gn>ul>li .hover{
    top: 14px;
    left: 40%;
    width:30px;
    height:30px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
  }
}

@media screen and (min-width:961px){
    #gnHome{
    border: none;
  }
  #gnLogo{
    display: block;
    width: 140px;
    margin: 0;
    padding: 23px 30px 18px 30px;
    float: left;
  }
  #gnConcept{
    font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif"!important;
    display: block;
    position: relative;
    font-size: 8pt;
    top: 40px;
  }
  #gnMenuWrap{
    height: 92px;
    width: 94.5px;
  }
  #gnMenu{
    width: 32px;
    padding: 27px 30px;
  }
  #gn>ul{
    margin: 0 10%;
  }
  #gn>ul>li{
    z-index: 0;
    border: none;
    width: 20%;
  }
  #gn>ul>li a{
    font-size: 11pt
  }
  #gn>ul>li:first-child{
    background-color: white;
  }
} */

</style>
