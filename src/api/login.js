import request from '@/utils/request';

export function login(userName, passsWord) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      userName,
      passsWord
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: `/user/info/${token}`, // 注意是反单引号 ``
    method: 'get'
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    data: {
      token
    }
  })
}