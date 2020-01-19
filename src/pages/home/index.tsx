import React, { useState } from "react";
import { Tabs, Drawer } from "antd-mobile";
import "./index.less";
import Explore from "@/components/explore";
import Sidebar from "@/components/sidebar";

const tabs = [
  { title: "我的" },
  { title: "发现" },
  { title: "云村" },
  { title: "视频" }
];
const Home: React.FC = () => {
  let [drawerState, setDrawerState] = useState(false);
  const body = document.getElementsByTagName("body")[0];
  return (
    <div className="home">
      <div className="home-header">
        <div
          className="header-list header-img"
          onClick={() => {
            body.style.overflow = "hidden";
            $(".drawer").css("z-index", 40);
            setDrawerState(true);
          }}
        >
          <img
            src={require("../../assets/images/home-list.png")}
            alt="img"
            className="inner-img"
          />
        </div>
        <Tabs
          tabs={tabs}
          initialPage={1}
          swipeable={false}
          tabBarActiveTextColor="#000"
          tabBarInactiveTextColor="#999"
          tabBarTextStyle={{ fontSize: "14px" }}
        >
          <div className="tab-text">我的</div>
          <Explore />
          <div className="tab-text">云村</div>
          <div className="tab-text">视频</div>
        </Tabs>
        <div className="header-search header-img">
          <img
            src={require("../../assets/images/home-search.png")}
            alt="img"
            className="inner-img"
          />
        </div>
      </div>
      <Drawer
        className="drawer"
        sidebar={<Sidebar />}
        open={drawerState}
        onOpenChange={() => {
          body.style.overflow = "auto";
          $(".drawer").css("z-index", 0);
          setDrawerState(false);
        }}
      >
        <span></span>
      </Drawer>
    </div>
  );
};

export default Home;
