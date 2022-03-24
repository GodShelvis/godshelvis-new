import { reactive, ref } from "vue"
import SMap from '../components/s-map/index.vue'

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
      this.username = 'admin'
      this.bilibiliUid = '36066423'
      this.vipDeadline = '2099-01-01'
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


const primaryColor = ref('')
const contentColor = ref('')
const bgColor = ref('')
const shadowLightColor = ref('')
const shadowDarkColor = ref('')
const shadowInsetColor = ref('')

const hslToRgb = function(h:number, s:number, l:number) {
  h = Number((h/359).toFixed(2))
  s = s/100
  l = l/100
  
  var r, g, b;
  if(s == 0){
    r = g = b = l; // achromatic
  }else{
    var hue2rgb = function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  r = Math.round(r * 255)
  g = Math.round(g * 255)
  b = Math.round(b* 255)
  
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

export { user, login, logout, UserInfo, primaryColor, contentColor, bgColor, shadowLightColor, shadowDarkColor, shadowInsetColor, hslToRgb };