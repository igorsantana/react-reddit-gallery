function reshapePosts(rawPosts) {
  return rawPosts.map((rP) => reshapePost(rP)).filter(p => p);

  function reshapePost(rawPost) {
    const {
      is_original_content,
      is_crosspostable,
      permalink,
      title,
      gilded,
      score,
      url,
    } = rawPost;
    const main = {
      title,
      score,
      gilded,
      permalink,
      xPost: is_crosspostable,
      oc: is_original_content,
      url,
    };
    if (url.includes(".png") || url.includes(".jpg") || url.includes(".jpeg")) {
      return { ...main, is: "image" };
    }
    if (url.includes(".gif")) {
      return { ...main, is: "gif" };
    }
    if (url.includes("redgifs")) {
      return { ...main, is: "redgif", embed: rawPost.media_embed.content };
    }
    if (url.includes("v.redd.it")) {
      const newUrl = rawPost.media.reddit_video.fallback_url.replace(
        "?source=fallback", ''
      );
      console.log(newUrl)
      return { ...main, is: "gif", url: newUrl };
    }
    if (url.includes("gfycat")) {
      return undefined;
    }
  }
}
export { reshapePosts };
