<template>
  <div id="stFooter">
    <div id="stFooterWrap">
      <div id="stLink">
        <img 
        src="https://weebee1212.com/renewal/common/images/sp/follow.png" 
        alt="follow us" 
        id="stSns">
        <ul id="snsList">
          <li><a href="https://mobile.twitter.com/koobee_kobe_u" target="_blank"><img src="https://weebee1212.com/renewal/common/images/sp/twittter.png" alt="twitter" id="stTwitter" class="snsIcon"></a></li>
          <li><a href="https://m.facebook.com/KooBee.kobe.u/" target="_blank"><img src="https://weebee1212.com/renewal/common/images/sp/facebook.png" alt="facebook" id="stFacebook" class="snsIcon"></a></li>
          <li><a href="https://www.instagram.com/koobee_gram/" target="_blank"><img src="https://weebee1212.com/renewal/common/images/sp/instagram.png" alt="instagram" id="stInsta" class="snsIcon"></a></li>
        </ul>
      </div>
      <ul id="stAbout">
        <li><a href="https://weebee1212.com/about/index.php"><img src="https://weebee1212.com/renewal/common/images/sp/about.png"></a></li>
        <li><a href="mailto:koobee.kobe.u@gmail.com"><img src="https://weebee1212.com/renewal/common/images/sp/ask.png"></a></li>
      </ul>
      <p>Thank you!</p>
    </div>
  </div>
</template>

<style scoped>
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
/* footer */
#stFooter{
  position: relative;
  display: block;
  margin: 150px 0 0 0;
  padding: 30px 30px 10px 30px;
  background-color: black;
}
#stSns{
  display: block;
  width: 120px;
  margin: 10px auto;
}
#snsList{
  text-align: center;
}
#snsList>li{
  display: inline-block;
}
.snsIcon{
  height: 22px;
}
#stTwitter,#stFacebook{
  margin-right: 20px;
}
#stFooter p{
  color: white;
  text-align: center;
  font-weight: normal;
  font-size: 8pt;
}
#stAbout{
  text-align: center;
  margin: 20px 0;
}
#stAbout li{
  display: inline-block;
}
#stAbout li:first-child{
  margin-right: 35px;
}
#stAbout li a img{
  width: 110px;
}
@media screen and (min-width:640px){
    #stFooter{
    margin: 150px 0 0 0;
    padding: 20px 0;
    padding-top: 40px;
  }
  #stFooterWrap{
    width: 527px;
    margin: 0 auto;
  }
  #stSns{
    display: block;
    width: 170px;
    margin: 20px auto;
  }
  #stLink{
    display: inline-block;
  }
  #stAbout{
    display: inline-block;
    margin:0 0 0 50px;
  }
  #stAbout li a img{
    width: 120px;
  }
  .snsIcon{
    height: 35px;
  }
  #stTwitter,#stFacebook{
    margin-right: 35px;
  }
  #stFooter p{
    margin-top: 30px;
  }
}
@media screen and (min-width:961px){
    #stFooterWrap{
    width: 710px;
  }
  #stFooter{
    margin: 150px 0 0 0;
    padding: 10px 0;
    padding-top: 30px;
  }
  #stFooter p{
    font-size: 9pt;
  }
  #stAbout{
    margin:0 0 0 170px;
  }
  #stAbout li a img{
    width: 150px;
  }
  .snsIcon{
    height: 40px;
  }
  #stTwitter,#stFacebook{
    margin-right: 30px;
  }
}
</style>