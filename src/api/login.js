import request from '@/utils/request';

export function login(userName, password) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: { userName, password }
  })
}

export function getUserInfo() {
  return request({
    url: '/api/user/userInfo',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post',
  })
}