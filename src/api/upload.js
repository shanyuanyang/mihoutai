import request from '@/utils/request';

export function uploadImg(form) {
  return request({
    url: '/api/utils/upload',
    method: 'post',
    data: form
  })
}