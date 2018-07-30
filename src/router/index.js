import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CategoryPromotions from '@/components/CategoryPromotions'
import AllPromotions from '@/components/AllPromotions'
import SinglePromotion from '@/components/SinglePromotion'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router, BootstrapVue)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'AllPromotions',
        component: AllPromotions
    }, {
        path: '/category/:CategoryID',
        name: 'CategoryPromotions',
        component: CategoryPromotions
    }, {
        path: '/promotions/:PromotionID',
        name: 'SinglePromotion',
        component: SinglePromotion
    }]
})