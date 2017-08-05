const axios = require('axios')

axios.defaults.headers.common['Authorization'] = 'TOKEN b3dc3f1cf78c651d5b63d90d9fbb4a1010a0907e'

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