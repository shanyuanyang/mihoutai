import request from '@/utils/request';

export default {
  getlist(pageIndex, pageSize) {
    return request({
      url: `/api/good/list/${pageIndex}/${pageSize}`,
      method: 'get'
    })
  },
  // search(page, size, searchMap) {
  //   return request({
  //     url: `/member/list/search/${page}/${size}`,
  //     method: 'post',
  //     data: searchMap
  //   })
  // },
  addGood(pojo) {
    return request({
      url: '/api/good/addGood',
      method: 'post',
      data: pojo
    })
  },
  getDetail(id) {
    return request({
      url: `/api/good/detail/${id}`,
      method: 'get'
    })
  },
  deleteGood(id){
    return request({
      url: `/api/good/deleteGood/${id}`,
      method: 'delete'
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