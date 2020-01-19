import request from "@/utils/request";

//新碟 传参
const params = {
  offset: 1,
  limit: 3
};

//获取banner
function getBanner(): Promise<any> {
  return request({
    url: "/banner",
    method: "get",
    params: {
      type: 2
    }
  });
}
// 获取推荐歌单
function getRecMusicList() {
  return request({
    url: "/personalized",
    method: "get",
    params: {
      limit: 6
    }
  });
}

//获取新碟
function getNewAlbum() {
  return request({
    url: "/top/album",
    method: "get",
    params
  });
}

//获取新歌
function getNewMusic() {
  return request({
    url: "/personalized/newsong",
    method: "get"
  });
}
export { getBanner, getRecMusicList, getNewAlbum, getNewMusic };
