import React, { useState, useEffect } from "react";
import TitleSection from "./TitleSection";
import GallerySection from "./GallerySection";
import axios from "axios";

function GalleryObtainer(props) {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("");
  useEffect(() => {
    async function fetchData() {
      const subreddit = "/r/nextfuckinglevel";
      const { data } = await axios.get(
        `https://www.reddit.com${subreddit}.json`
      );
      const postsRaw = data.data.children;
      const posts = postsRaw.map((p) => p.data);
      setPosts(posts);
      setSubreddit("/r/nextfuckinglevel");
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <TitleSection subreddit={subreddit}></TitleSection>
      <GallerySection posts={posts}></GallerySection>
    </React.Fragment>
  );
}

export default GalleryObtainer;
