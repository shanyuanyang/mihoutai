import request from '../utils/request'

export function login(userName, password) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: { userName, password }
  })
}