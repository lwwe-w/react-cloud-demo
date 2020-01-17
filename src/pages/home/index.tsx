import React, { useState } from "react";
import { Tabs, Drawer } from "antd-mobile";
import "./index.less";
import Explore from "@/components/explore";
import Sidebar from "@/components/sidebar";

interface Props {}
const tabs = [
  { title: "我的" },
  { title: "发现" },
  { title: "云村" },
  { title: "视频" }
];
const Home: React.FC = () => {
  let [drawerState, setDrawerState] = useState(true);
  return (
    <div className="home">
      <div className="home-header">
        <div
          className="header-list header-img"
          onClick={() => {
            setDrawerState(true);
          }}
        >
          <img
            src={require("../../assets/images/home-list.png")}
            alt="img"
            className="inner-img"
          />
        </div>
        <Tabs tabs={tabs} initialPage={1} swipeable={false}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              backgroundColor: "#fff"
            }}
          >
            我的
          </div>
          <Explore />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              backgroundColor: "#fff"
            }}
          >
            云村
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              backgroundColor: "#fff"
            }}
          >
            视频
          </div>
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
        contentStyle={{ color: "#A6A6A6", textAlign: "center", paddingTop: 42 }}
        sidebar={<Sidebar />}
        open={drawerState}
        onOpenChange={() => {
          setDrawerState(false);
        }}
      >
        12
      </Drawer>
    </div>
  );
};

export default Home;
