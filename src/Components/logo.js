import React from "react";
import video1 from '../assets/video-1596665337.mp4'

function Video() {
  return (
    <div>
      <video
        src={video1}
        width="800"
        height="800"
        loop autoPlay
        style={{backgroundColor: "#000",
                width: "100%", marginTop: "0"}}
        
      />
      
    </div>
  );
}

export default Video;
