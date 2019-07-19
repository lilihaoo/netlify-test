/* eslint-disable */
import { getToken, checkToken } from './request/request'
import { getCookiesToken } from './auth/auth'
class Permission {
  constructor(router) {
    this._router = router //将vue项目中的vue-router实例引入
  }
  /**
   * @method vue项目全局初始化，加入全局路由守卫
   * @param {Object} config vue中main.js的初始化配置
   */
  init(config) {
    this._router.beforeEach(async (to, from, next) => {
      // 定义并合并方法传入的对象
      const authConfig = Object.assign(
        {
          redirectUrl: window.location.href, // 调用authcode和token接口需要用到的回调地址
          requestUrl: '', // 由外部初始化传入
          loginUrl: `${config.requestUrl}/ssoserver/moc2/authorize?response_type=code&client_id=csxt&redirect_uri=${window.location.href}&state=200`, // 未授权或token失效跳转登陆页地址
          client_id: '', // 由外部初始化传入
          client_secret: '', // 由外部初始化传入
          code: to.query.code, // 登陆成功后的授权码，用来获取token的参数
          token: getCookiesToken() // 获取存在cookies中的token
        },
        config // 外部初始化传入的对象
      )
      if (to.path === '/deletecookies') { // 第三方平台主动登出时调用此路径删除cookies
        removeCookiesToken()
        // window.location.href = window.location.origin

      }
      if (authConfig.token) { // 判断cookies中token存在，进行token校验
        await checkToken(authConfig)
        next()
      } else { // 判断cookies中token不存在
        if (to.query.code) { // token不存在，登陆后有了授权码，进入分支获取token，并将url后的参数去掉
          await getToken(authConfig)
          window.location.href = authConfig.redirectUrl.substring(
            0,
            authConfig.redirectUrl.indexOf('?')
          )
          next()
        } else { // token不存在且无授权码时或者从单点登陆平台首次跳转过来时直接跳转登陆页
            window.location.href = authConfig.loginUrl
        }
      }
    })
  }
}

export default Permission
