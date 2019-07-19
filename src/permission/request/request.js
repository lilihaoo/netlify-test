/* eslint-disable */
import axios from 'axios'
import { setCookiesToken, removeCookiesToken } from '../auth/auth'
import { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
/**
 * @method 获取OAUTH_TOKEN，并设置Cookies
 * @param {Object} authConfig 访问系统的配置参数
 */
export function getToken(authConfig) {
  debugger
  if(!authConfig.code) { //如果授权码不存在，不进行下面请求
    return
  }
  
  const params = {
    grant_type: 'authorization_code',
    client_id: authConfig.client_id,
    client_secret: authConfig.client_secret,
    code: authConfig.code,
    redirect_uri: authConfig.redirectUrl,
  }

  axios
    .get(`${authConfig.requestUrl}/ssoserver/moc2/token`, { params })
    .then(res => {
      if (res.data.ret === 0) { // 请求成功返回的正常值时，将获取到的token存入cookies
        setCookiesToken(res.data.access_token)
      } else { // 请求成功，但ret不等于0时，输出错误日志，并弹出消息框给用户，重新登陆
        console.error(res.data.code, res.data.msg)
        MessageBox.alert(`${res.data.msg}`, '温馨提示', {
          confirmButtonText: '重新登录',
          showClose: false,
          type: 'warning'
        }).then(() => {
          window.location.href = authConfig.loginUrl
        })
      }
    })
    .catch(error => {
      console.error('请检查初始化参数',error)
    })
}

/**
 * @method 校验token是否过期或者用户主动登出（扩展：可在成功回调中获取openid）
 * @param {Object} authConfig 访问系统的配置参数
 */
export function checkToken(authConfig) {
  debugger
  axios
    .get(`${authConfig.requestUrl}/ssoserver/moc2/me?access_token=${authConfig.token}`)
    .then(res => {
      if (res.data.ret === 0) {
        //通过res.data.openid 来获取openid，后续可以通过openid来调用/user/info获取用户详细信息
       console.log('授权校验ok') 
      } else { // 请求成功，但ret不等于0时，输出错误日志，并弹出消息框给用户，先清除掉cookies中的token，再重新登陆
        console.error(res.data.code, res.data.msg)
        MessageBox.alert(`${res.data.msg}`, '温馨提示', {
          confirmButtonText: '重新登录',
          showClose: false,
          type: 'warning'
        }).then(() => {
          removeCookiesToken()
          window.location.href = authConfig.loginUrl
        })
      }
    })
    .catch(error => {
      console.error('请检查初始化参数',error)
    })
}