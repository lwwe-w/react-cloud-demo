import React from "react";
import "./index.less";

interface props {
  music: {
    id: number;
    picUrl: string;
    name: string;
    playCount: number;
  };
}
const MusicBlock: React.FC<props> = ({ music }) => {
  return (
    <div className="block">
      <div className="block-img">
        <img src={music.picUrl} alt="img" className="inner-img" />
      </div>
      <div className="block-title multiline-text-overflow">{music.name}</div>
      {music.playCount > 0 && (
        <div className="block-num">
          <div className="block-num-img">
            <img
              src={require("../../assets/images/music-block-play.png")}
              alt="img"
              className="inner-img"
            />
          </div>
          <div className="block-num-text">
            {(music.playCount / 10000).toFixed(0)}万
          </div>
        </div>
      )}
    </div>
  );
};
export default MusicBlock;
