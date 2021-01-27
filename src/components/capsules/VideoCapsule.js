import React from "react";
import he from "he";
function VideoCapsule(props) {
  function createMarkup() {
    return {
      __html: he.decode(props.post.embed),
    };
  }

  if (props.post.embed) {
    return (
      <div
        style={{ maxHeight: 250, maxWidth: 250 }}
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    );
  }
  return (
    <React.Fragment>
      <video
        preload="auto"
        autoPlay="autoplay"
        loop="loop"
        width="200"
        height="400"
        src={props.post.url.replace(/(.gif)v?/, ".mp4")}
      ></video>
    </React.Fragment>
  );
}

export default VideoCapsule;
