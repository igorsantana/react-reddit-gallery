import React, { useState, useEffect } from "react";

function TitleSection(props) {
  return (
    <section className="header">
      <h1 className="subreddit-name">{props.subreddit}</h1>
    </section>
  );
}

export default TitleSection;
