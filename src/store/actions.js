import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'
import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqUser,
  reqLogout
} from '../api'

export default {
  // 异步获取地址信息的异步action
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    // 发送异步请求, 得到响应数据
    const result = await reqAddress(geohash)  // {code: 0, data: address}
    if(result.code===0) {
      // 提交mutation
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取分类列表的异步action
  async getCategorys ({commit, state}) {
    // 发送异步请求, 得到响应数据
    const result = await reqFoodTypes()  // {code: 0, data: types}
    if(result.code===0) {
      // 提交mutation
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表的异步action
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    // 发送异步请求, 得到响应数据
    const result = await reqShops({latitude, longitude})  // {code: 0, data: shops}
    if(result.code===0) {
      // 提交mutation
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 同步保存user
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  // 异步获取当前用户
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  // 异步请求退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  }
}