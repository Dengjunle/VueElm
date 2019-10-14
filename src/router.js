import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/goods' },
        { path: '/goods', component: goods },
        { path: '/ratings', component: ratings },
        { path: '/seller', component: seller }
    ],
    linkActiveClass: 'active'
});

export default router;
