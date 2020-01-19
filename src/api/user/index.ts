import request from "@/utils/request";

interface loginInfo {
  phone: String;
  password: String;
}
//获取banner
function login(loginInfo: loginInfo): Promise<any> {
  return request({
    url: "/login/cellphone",
    method: "get",
    params: loginInfo
  });
}

export { login };
