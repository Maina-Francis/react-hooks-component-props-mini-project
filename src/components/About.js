import React from "react";

function About({ src, alt, about }) {
  return (
    <aside>
      <img src={src} alt={alt}></img>
      <p>{about}</p>
    </aside>
  );
}

export default About;
