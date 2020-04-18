import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ContentFirst from '../components/ContentFirst.vue';
import ContentSecond from '../components/ContentSecond.vue';
import ContentThird from '../components/ContentThird.vue';
import ContentFour from '../components/ContentFour.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/content-1', name:'content-1', component: ContentFirst},
    { path: '/content-2', name:'content-2', component: ContentSecond},
    { path: '/content-3', name:'content-3', component: ContentThird},
    { path: '/content-1', name:'content-4', component: ContentFour}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;