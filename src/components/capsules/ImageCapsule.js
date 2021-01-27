import React from "react";
function ImageCapsule(props) {
  return (
    <React.Fragment>
      <img src={props.post.url} width="200" height="200" />
    </React.Fragment>
  );
}

export default ImageCapsule;
