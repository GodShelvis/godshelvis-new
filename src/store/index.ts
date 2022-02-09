import { reactive } from "vue"

class UserInfo {
  username?: string
  bilibiliUid?: string
  vipDeadline?: string

  constructor(userInfo?: UserInfo){
    if (userInfo!=null) {
      this.username = userInfo.username
      this.bilibiliUid = userInfo.bilibiliUid
      this.vipDeadline = userInfo.vipDeadline
    } else {
      this.username = undefined
      this.bilibiliUid = undefined
      this.vipDeadline = undefined
    }
  }
}

const user = reactive(new UserInfo())
const login = (info:UserInfo)=>{
  console.log('login');
  user.username = info.username
  user.bilibiliUid = info.bilibiliUid
  user.vipDeadline = info.vipDeadline
}
const logout = ()=>{
  console.log('logout');
  user.username = undefined
  user.bilibiliUid = undefined
  user.vipDeadline = undefined
}

export { user, login, logout, UserInfo };