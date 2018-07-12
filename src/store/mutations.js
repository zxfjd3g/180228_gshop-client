import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },

  [RESET_USER] (state) {
    state.user = {}
  },

  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },

  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(!food.count) { // 第一次点+
      // 给food添加一个新的属性(没有数据绑定)
      // food.count = 1
      Vue.set( food, 'count', 1 ) // 新添加的属性就有数据绑定
      // 将一个新的food添加到购物车
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) {// 只有有count时
      food.count--
      if(food.count===0) {
        // 从购物车中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

}