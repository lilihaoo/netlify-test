/* eslint-disable */
import Cookies from 'js-cookie';

const TokenKey = 'taicang_token'

//getToken
export function getCookiesToken() {
  return Cookies.get(TokenKey)
}
//setToken ，有效期7天
export function setCookiesToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 })
}
//removeToken
export function removeCookiesToken() {
  return Cookies.remove(TokenKey)
}
