import React, { useState, useEffect } from "react";
import { Carousel } from "antd-mobile";
import MusicBlock from "../musicBlock";
import {
  getBanner,
  getRecMusicList,
  getNewAlbum,
  getNewMusic
} from "@/api/home";
import "./index.less";
import cs from "classnames";
const Explore: React.FC = () => {
  const classifies = [
    { title: "每日推荐" },
    { title: "歌单" },
    { title: "排行榜" },
    { title: "电台" },
    { title: "直播" }
  ];
  const albumParams = {
    offset: 1,
    limit: 3
  };

  //state
  let [banners, setBanners] = useState([]);
  let [recMusics, setRecMusics] = useState([]);
  let [newMusicState, setNewMusicState] = useState(true);
  let [newMusics, setNewMusics] = useState([]);
  let [oldAlbums, setOldAlbums] = useState([]);
  let [oldMusics, setOldMusics] = useState([]);

  // 接口调用
  useEffect(() => {
    getBannerList();
    getRecMusics();
    getNewAlbums();
  }, []);

  //切换新碟、新歌的状态
  async function changeState(event: any): Promise<any> {
    let name = event.currentTarget.getAttribute("data-name");
    if (
      (newMusicState && name === "album") ||
      (!newMusicState && name === "music")
    ) {
      return;
    } else {
      if (name === "album") {
        setNewMusics(oldAlbums);
      } else {
        if (oldMusics.length > 0) {
          setNewMusics(oldMusics);
        } else {
          getNewMusics();
        }
      }
      setNewMusicState(!newMusicState);
    }
  }

  // 获取banner
  async function getBannerList() {
    try {
      let { banners } = await getBanner();
      setBanners(banners);
    } catch (error) {
      console.log(error);
    }
  }
  // 获取推荐歌单
  async function getRecMusics() {
    try {
      let { result } = await getRecMusicList();
      setRecMusics(result);
    } catch (error) {
      console.log(error);
    }
  }
  //获取新碟
  async function getNewAlbums() {
    try {
      let { albums } = await getNewAlbum(albumParams);
      setNewMusics(albums);
      setOldAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  }
  //获取新歌
  async function getNewMusics() {
    try {
      let { result } = await getNewMusic();
      let list = result.slice(0, 3);
      setNewMusics(list);
      setOldMusics(list);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="explore">
      <Carousel autoplay infinite className="explore-carousel">
        {banners.map((val: any) => (
          <div className="carousel-item" key={val}>
            <img src={val.pic} alt="img" className="inner-img" />
          </div>
        ))}
      </Carousel>
      <div className="explore-classify">
        {classifies.map((item, index) => (
          <div className="classify-item" key={index}>
            <div className="item-img"></div>
            <div className="item-title">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="explore-music">
        <div className="music-header">
          <div className="header-title">推荐歌单</div>
          <div className="header-right" style={{ fontSize: 12 }}>
            歌单广场
          </div>
        </div>
        <div className="music-content">
          {recMusics.map((item, index) => (
            <MusicBlock music={item} key={index} />
          ))}
        </div>
      </div>

      <div className="explore-music new-music">
        <div className="music-header">
          <div className="header-title new-music-title">
            <div
              className={cs({ "active-title": newMusicState })}
              data-name="album"
              onClick={changeState}
            >
              新碟
            </div>
            <div
              className={cs({ "active-title": !newMusicState })}
              data-name="music"
              onClick={changeState}
            >
              新歌
            </div>
          </div>
          <div className="header-right" style={{ fontSize: 10 }}>
            {newMusicState ? "更多新碟" : "新歌推荐"}
          </div>
        </div>
        <div className="music-content">
          {newMusics.map((item, index) => (
            <MusicBlock music={item} key={index} />
          ))}
        </div>
      </div>
      <div className="explore-video">
        <div className="stick-header">
          <div className="header-title">云村精选</div>
          <div className="header-right">获取新内容</div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
