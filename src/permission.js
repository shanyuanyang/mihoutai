import router from './router'
import Cookies from './utils/cookies'

router.beforeEach((to, from, next) => {
  let {
    title,
  } = to.meta;
  document.title = title;
  // console.log(Cookies.getCookie("userId"))
  if (to.path.startsWith('/login')) {
    next()
  } else {
    if (Cookies.getCookie("userId")) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  }

})