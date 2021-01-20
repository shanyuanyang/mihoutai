import request from '@/utils/request';

export default {
  getlist() {
    return request({
      url: '/member/list',
      method: 'get'
    })
  },
  search(page, size, searchMap) {
    return request({
      url: `/member/list/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  add(pojo) {
    return request({
      url: '/member',
      method: 'post',
      data: pojo
    })
  },
  getById(id) {
    return request({
      url: `/member/${id}`,
      method: 'get'
    })
  },
  update(pojo) {
    return request({
      url: `/member/${pojo.id}`, // 反单引号 ``
      method: 'put', // put 方式提交
      data: pojo
    })
  }
}