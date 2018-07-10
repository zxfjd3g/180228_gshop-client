/*
使用mockjs模拟数据接口
 */
import Mock from 'mockjs'
import data from './data.json' // js对象


// 获取goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})

// 获取ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})

// 获取info的接口
Mock.mock('/info', {code: 0, data: data.info})



