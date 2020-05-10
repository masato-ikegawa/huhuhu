import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ContentFirst from '../components/ContentFirst.vue';
import ContentSecond from '../components/ContentSecond.vue';
import ContentThird from '../components/ContentThird.vue';
import ContentFourth from '../components/ContentFourth.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/content-1', name:'content-1', component: ContentFirst},
    { path: '/content-2', name:'content-2', component: ContentSecond},
    { path: '/content-3', name:'content-3', component: ContentThird},
    { path: '/content-4', name:'content-4', component: ContentFourth}
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }; // トップに移動
      }
});

export default router;