import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

// スクロールのためのカスタムディレクティブ
Vue.directive('scroll', {
  // 紐づいている要素がdomに挿入される時
  inserted: function (el, binding) {
    let f = function (evt) {
      // binding.valueにはhandleScroll (evt, el)が格納されてる
      // つまりhandleScrollがtrueを返したらスクロール検知をしない
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
