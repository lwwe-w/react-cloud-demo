import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
  withCredentials: true
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      if (res.code === 500) {
        console.log("服务端错误");
      } else {
        console.log("[err-" + res.code + "]:", res);
        return Promise.reject(res);
      }
    } else {
      return res;
    }
  },
  error => {
    console.log("接口返回错误" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
