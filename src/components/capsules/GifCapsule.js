import React from "react";
function GifCapsule(props) {
  return (
    <React.Fragment>
      <video
        preload="auto"
        autoPlay="autoplay"
        loop="loop"
        width="200"
        height="400"
        src={props.post.url.replace(/(\.gif)v?/, ".mp4")}
      ></video>
    </React.Fragment>
  );
}

export default GifCapsule;
