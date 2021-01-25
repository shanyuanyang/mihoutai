import Cookies from 'js-cookie'

export default {
  setCookie(userId) {
    return Cookies.set('userId', userId, { expires: 1 })
  },
  removeCookie(userId) {
    return Cookies.remove(userId)
  },
  getCookie(userId) {
    return Cookies.get(userId)
  },
}