import React from "react";
import "./index.less";
// interface props {
//   name: number;
// }
const Sidebar: React.FC = () => {
  const blockItem = [
    { img: require("../../assets/images/drawer-ticket.png"), name: "演出" },
    { img: require("../../assets/images/drawer-shop.png"), name: "商城" },
    {
      img: require("../../assets/images/drawer-location.png"),
      name: "附近的人"
    },
    { img: require("../../assets/images/drawer-bell.png"), name: "口袋彩铃" },
    { img: require("../../assets/images/drawer-list.png"), name: "我的订单" },
    {
      img: require("../../assets/images/drawer-time.png"),
      name: "定时停止播放"
    },
    { img: require("../../assets/images/drawer-scan.png"), name: "扫一扫" },
    { img: require("../../assets/images/drawer-zhong.png"), name: "音乐闹钟" },
    { img: require("../../assets/images/drawer-cloud.png"), name: "音乐云盘" },
    {
      img: require("../../assets/images/drawer-liuliang.png"),
      name: "在线听歌面流量"
    },
    { img: require("../../assets/images/drawer-game.png"), name: "游戏推荐" },
    { img: require("../../assets/images/drawer-card.png"), name: "优惠卷" },
    {
      img: require("../../assets/images/drawer-music.png"),
      name: "加入网易云音乐人"
    },
    { img: require("../../assets/images/drawer-zhibo.png"), name: "我要直播" }
  ];
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <div className="header-info">
          <div className="avator"></div>
          <div>16-76</div>
        </div>
        <div className="header-sign">
          <img
            src={require("../../assets/images/jinbi.png")}
            alt="img"
            className="sign-img"
          />
          <span>签到</span>
        </div>
      </div>
      <div className="wrapper-blocks">
        <div className="blocks-top">
          <div className="left">
            <span>开通黑胶VIP</span>
            <span>新客仅5元</span>
          </div>
          <div className="right">黑胶新客仅需5元</div>
        </div>
        <div className="blocks-list">
          <div className="list-item">
            <img
              src={require("../../assets/images/drawer-info.png")}
              alt="img"
              className="list-img"
            />
            <span>我的消息</span>
          </div>
          <div className="list-item">
            <img
              src={require("../../assets/images/drawer-fre.png")}
              alt="img"
              className="list-img"
            />
            <span>我的好友</span>
          </div>
          <div className="list-item">
            <img
              src={require("../../assets/images/drawer-skin.png")}
              alt="img"
              className="list-img"
            />
            <span>个性换肤</span>
          </div>
          <div className="list-item">
            <img
              src={require("../../assets/images/drawer-sounds.png")}
              alt="img"
              className="list-img"
            />
            <span>听歌识曲</span>
          </div>
        </div>
        {blockItem.map((item, index) => (
          <div className="blocks-item" key={index}>
            <img src={item.img} alt="img" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="wrapper-footer">
        <div className="left">夜间模式</div>
        <div className="middle">设置</div>
        <div className="right">退出</div>
      </div>
    </div>
  );
};
export default Sidebar;
