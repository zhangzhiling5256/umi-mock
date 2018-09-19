
let host = 'https://backend5.hanguangbaihuo.com/api';

if (process.env.SPARROW_ENVIRONMENT !== 'online') {
  host = 'https://backend5.dongyouliang.com/api';
}

const apiConfig = {
  // host
  host: host,
  /**
   * 登录
   */
  // 发送短信验证码
  code: `${host}/sms/send/`,
  // 短信登录
  login: `${host}/sms/login/`,
  // 验证access_token
  accountTokenVerification: `${host}/account/token/verification/`,
  // 服务号登录第一步
  wechatAuthUrl: `${host}/wechat/mp/auth/url/`,
  // 服务号登录第二步
  wechatAuthLogin: `${host}/wechat/mp/auth/login/`,
  // 服务号登录第三步 - 服务号登录绑定创建用户
  wechatAuthBind: `${host}/wechat/mp/auth/login/bind/`,

};

export default apiConfig;