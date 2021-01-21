export default {
  saveUserInfo(context, userInfo) {
    console.log(userInfo)
    context.commit('saveUserInfoMutation', userInfo)
  },
}