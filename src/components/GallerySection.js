import React, { useState, useEffect } from "react";
import { reshapePosts } from "../helpers/posts";

import GifCapsule from "./capsules/GifCapsule";
import VideoCapsule from "./capsules/VideoCapsule";
import ImageCapsule from "./capsules/ImageCapsule";
import he from "he";
function GallerySection(props) {
  const [readyPosts, setReadyPosts] = useState([]);
  useEffect(() => {
    const posts = reshapePosts(props.posts);
    setReadyPosts(posts);
  }, [props.posts]);
  return (
    <section className="mainContent">
      {readyPosts ? (
        readyPosts.map((post) => {
          if (post.is === "image") {
            return <ImageCapsule key={post.url} post={post} />;
          }
          if (post.is === "gif") {
            return <GifCapsule key={post.url} post={post} />;
          }
          if (post.is === "redgif") {
            return <VideoCapsule key={post.url} post={post} />;
          }
        })
      ) : (
        <React.Fragment></React.Fragment>
      )}
      
    </section>
  );
}

export default GallerySection;
