import React from "react"
import "./index.less"

interface props {
  content: {
      title: string
      img: string
      name: string
      avator: string
      zanNumber: number
      comNumber: number
  }
}
const VideoBlock: React.FC<props> = ({ content }) => {
  return (
    <div className="block">
      <div className="block-title">
        {content.title}
      </div>
      <div className="block-video">
          <div className="video-content">
              <img src={content.img} alt="img"/>
          </div>
          <div className="video-footer">
              <div className="footer-name">{content.name}</div>
              <div className="footer-avator">
                  <img src={content.avator} alt="img"/>
              </div>
          </div>
      </div>
      <div className="block-actions">
          <div className="actions-zan">
              <img src={require('../../assets/images/zan.png')} alt="img" className="inner-img"/>
              <span>{content.zanNumber}</span>
          </div>
          <div className="actions-com">
              <img src={require('../../assets/images/com.png')} alt="img" className="inner-img"/>
              <span>{content.comNumber}</span>
          </div>
          <div className="actions-set">
              <img src={require('../../assets/images/actions.png')} alt="img" className="inner-img"/>
          </div>
      </div>
    </div>
  )
}
export default VideoBlock
