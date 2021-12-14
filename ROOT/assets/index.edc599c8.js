import{d as e,p as a,a as t,r as s,o,c as l,b as n,u as c,S as r,e as i,t as d,w as p,v as u,i as m,f as v,F as h,g as w,h as k,j as b,k as g,l as f,m as y,n as x,q as _,s as $,V as q}from"./vendor.7b3fbc95.js";a("data-v-f331489e");const D={class:"search-area"};t();var U=e({expose:[],setup(e){let a=s(0),t=s("");const h=[{name:"百度搜索",redirect:"http://www.baidu.com/s?wd="},{name:"谷歌搜索",redirect:"https://www.google.com/search?hl=zh-CN&q="}],w=function(){a.value<h.length-1?a.value+=1:a.value=0},k=()=>{""!=t.value&&(window.location.href=h[a.value].redirect+t.value)};return(e,s)=>(o(),l("div",D,[n("div",{class:"search-channel no-select",onClick:w},[n(c(r),{class:"search-logo"}),i(" "+d(h[c(a)].name),1)]),p(n("input",{type:"text",class:"search-input",spellcheck:"“false”","onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:t=e),onKeydown:v(k,["enter"])},null,40,["onKeydown"]),[[u,c(t)]])]))}});U.__scopeId="data-v-f331489e",a("data-v-73fd0f34");const C={class:"bookmark-area no-select"},M={class:"bookmark-name"},S={class:"bookmark-description"};t();var F=e({expose:[],props:{bookmark:Object},setup(e){const a=e.bookmark.bookmarks;return(t,s)=>(o(),l("div",C,[n("div",{class:"bookmark-title",style:{backgroundColor:e.bookmark.color}},d(e.bookmark.title),5),(o(!0),l(h,null,w(c(a),(e=>(o(),l("div",{class:"bookmark",onClick:a=>{return(t=e.url).startsWith("http://")||t.startsWith("https://")||(t="https://"+t),void(window.location.href=t);var t}},[n("div",M,d(e.name),1),n("div",S,d(e.description),1)],8,["onClick"])))),256))]))}});F.__scopeId="data-v-73fd0f34",a("data-v-68a755a4");const I={class:"calendar-area no-select"},N={class:"calendar-header"},K={class:"mini-calendar"},j={class:"weekday"};t();var H=e({expose:[],setup(e){const a=["SUN","MON","TUE","WED","THU","FRI","SAT","SUN"],t=new Date,s=t.getFullYear(),r=t.getMonth()+1,i=t.getDate(),p=t.getDay();let u=new Date(t.setDate(i-p)),m=[];for(let o=0;o<7;o++){let e=u;u.setDate(u.getDate()+1),m.push({weekday:e.getDay(),date:e.getDate()})}return(e,t)=>(o(),l("div",I,[n("div",N,[n("span",null,d(r)+" 月"),n("span",null,d(c(s))+" 年",1)]),n("div",K,[(o(!0),l(h,null,w(c(m),(e=>(o(),l("div",{class:"calendar-day"+(e.date==c(i)?"-today":""),key:e.date},[n("div",j,d(a[e.weekday]),1),n("div",{class:"date"+(e.date==c(i)?"-today":"")},d(e.date),3)],2)))),128))])]))}});H.__scopeId="data-v-68a755a4",a("data-v-a1d792b6");const T={key:0},W={class:"weather"},z={class:"weather-info"},A={class:"weather-location"},G={class:"weather-message"},P={class:"weather-message2"};t();var Q=e({expose:[],setup(e){let a,t=s(121.6),r=s(31.2),i=s(""),p=s({}),u=s(!1),m=s(!1);k("https://api.map.baidu.com/location/ip?ak=UM0qhKUufFxQXhGSNuvdSKyhQ6CQ1U36&coor=bd09ll").then((e=>{i.value=e.content.address;let s=e.content.point;t.value=Number(Number(s.x).toFixed(2)),r.value=Number(Number(s.y).toFixed(2)),a=`https://devapi.qweather.com/v7/weather/now?location=${t.value},${r.value}&key=6099ae81fe7a4d508f625c01cebe41a3`,b.get(a).then((e=>{200==e.data.code&&(p.value=e.data.now,u.value=!0)})).catch((e=>{console.log(e)}))}));const v=function(){m.value=!1},h=function(){m.value=!0};return(e,a)=>(o(),l("div",{class:"no-select weather-area",onMouseenter:v,onMouseleave:h},[c(u)?(o(),l("div",T,[n("div",W,[n("img",{class:"weather-icon s1",src:`/weather/${c(p).icon}.png`,alt:""},null,8,["src"]),n("div",z,[n("p",A,d(c(i)),1),n("p",G,d(c(p).temp)+"°C",1),n("p",P,d(c(p).text),1)])])])):g("",!0)],32))}});Q.__scopeId="data-v-a1d792b6",a("data-v-37fef28a");const R={class:"clock-area no-select"},V=n("p",{class:"clock-title"},"时钟",-1),E={class:"hhmm led"},O={class:"ss led"};t();var X=e({expose:[],setup(e){const a=s("00:00"),t=s("00"),c=()=>{const e=new Date,s=e.getHours()<10?`0${e.getHours()}`:e.getHours(),o=e.getMinutes()<10?`0${e.getMinutes()}`:e.getMinutes(),l=e.getSeconds()<10?`0${e.getSeconds()}`:e.getSeconds();a.value=`${s}:${o}`,t.value=`${l}`,setTimeout(c,1e3)};return c(),(e,s)=>(o(),l("div",R,[V,n("p",E,d(a.value),1),n("p",O,d(t.value),1)]))}});X.__scopeId="data-v-37fef28a";a("data-v-4c69eba2");const Y={class:"translate-area"},Z={class:"translate-input"},B={class:"input-area"},J=n("img",{style:{width:"30px",height:"30px",margin:"8px"},src:"./assets/translate.a95d97ab.png",alt:""},null,-1);t();var L=e({expose:[],setup(e){let a=s(""),t=s(!1),r=f({q:"",from:"auto",to:"",appid:"20211130001014730",salt:"shelvis",sign:""});const m=()=>{a.value="",t.value=!1},h=e=>{if(""==e)a.value="",t.value=!1;else{t.value=!1,r.q=e.trim();let s=w(r.q,r.appid,r.salt);r.sign=s,/.*[\u4e00-\u9fa5]+.*$/.test(e)?r.to="en":r.to="zh",k("https://fanyi-api.baidu.com/api/trans/vip/translate",r).then((e=>{null==e.error_code?a.value=e.trans_result[0].dst:54004==e.error_code?a.value="今日次数已用完.":a.value="接口异常请联系管理员."}))}},w=(e,t,s)=>{if(""!=e){return x(`${t}${e}${s}pHAAiPR_e8ZRT5l9zSQU`)}a.value=""},b=()=>{t.value=!0};return(e,s)=>{const w=_("clipboard");return o(),l("div",Y,[n("div",Z,[n("div",B,[p(n("input",{class:"real-input",spellcheck:"“false”",type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>c(r).q=e),onKeydown:s[2]||(s[2]=v((e=>h(c(r).q)),["enter"]))},null,544),[[u,c(r).q]])]),n("div",{class:"translate-button",onClick:s[3]||(s[3]=e=>h(c(r).q))},[J])]),p(n("p",{class:`translate-output${""==c(a)?"-before":""} ${c(t)?"copied":""}`,onContextmenu:y(m,["prevent"])},[i(d(c(a)),1)],42,["onContextmenu"]),[[w,c(a).trim()],[w,b,"success"]])])}}});L.__scopeId="data-v-4c69eba2",a("data-v-494ace12");const ee={class:"home-space"},ae={class:"home-layor"},te={class:"home-list"},se={class:"plugin-list"},oe={style:{width:"100%",display:"flex","flex-direction":"row","justify-content":"space-between"}},le=n("div",{class:"beian-area"},[n("a",{class:"beian",href:"http://www.beian.miit.gov.cn/"},"鄂ICP备19004172号-1")],-1);t();var ne=e({expose:[],setup(e){const a={title:"视频",color:"#F26D48",bookmarks:[{name:"bilibili",description:"哔哩哔哩弹幕视频网",url:"https://www.bilibili.com"},{name:"斗鱼",description:"斗鱼直播平台",url:"https://www.douyu.com/directory/myFollow"},{name:"音范丝",description:"音范丝|影音集|精选4K蓝光原盘下载，顶级收藏",url:"www.yinfans.me"},{name:"高清网",description:"高清电影网|720P|1080P|蓝光原盘|磁力链迅雷下载高清的电影天堂",url:"http://gaoqing.la/"}]},t={title:"生活常用",color:"#75CD5F",bookmarks:[{name:"淘宝",description:"淘宝网",url:"https://www.taobao.com/"},{name:"京东",description:"京东商城",url:"https://www.jd.com/"},{name:"知乎",description:"有问题就会有答案",url:"https://www.zhihu.com/"},{name:"MacWk",description:"MacWk - 精品mac软件下载",url:"https://www.macwk.com/"}]},s={title:"工作常用",color:"rgb(81 134 213)",bookmarks:[{name:"阿里云",description:"阿里云服务",url:"https://www.aliyun.com/"},{name:"Github",description:"代码托管平台",url:"https://github.com/"},{name:"腾讯文档",description:"在线文档编辑分享",url:"https://docs.qq.com/"},{name:"Gmail",description:"Google邮箱",url:"https://accounts.google.com/b/0/AddMailService"}]};return(e,r)=>(o(),l("div",ee,[n("div",ae,[n("div",te,[n(c(U)),n(c(F),{style:{"margin-top":"30px"},bookmark:a,"onUpdate:bookmark":r[1]||(r[1]=e=>a=e)}),n(c(F),{style:{"margin-top":"30px"},bookmark:t,"onUpdate:bookmark":r[2]||(r[2]=e=>t=e)}),n(c(F),{style:{"margin-top":"30px"},bookmark:s,"onUpdate:bookmark":r[3]||(r[3]=e=>s=e)})]),n("div",se,[n(c(H),{style:{"margin-bottom":"30px"}}),n("div",oe,[n(c(Q)),n(c(X))]),n(c(L),{style:{"margin-top":"30px"}})])]),le]))}});ne.__scopeId="data-v-494ace12";const ce=$(e({expose:[],setup:e=>(e,a)=>(o(),l(c(ne)))}));ce.use(q),ce.mount("#app");