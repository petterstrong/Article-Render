const axios = require('axios')
// Todo: 当前的所有文章内容为公开，Token 待处理
axios.interceptors.response.use(
  function (response) {
    let data = response.data || {};
    // Do something with response data
    if (data.errcode) {
      _.extend(data, {url: response.config.url, time: new Date()});
      console.log(data);
      return Promise.reject(data);
    }
    return data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

module.exports = axios;