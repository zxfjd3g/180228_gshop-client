/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/*
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
*/
// 打包时进行代码分割, 只有当需要时才从后台请求获取
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        isShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        isShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true
      }
    },
    {
      path: '/login',
      component: Login
    },

    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    },

  ]
})