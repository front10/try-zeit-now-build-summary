import React from "react";

const Title = props => {
  const { text, imgSrc } = props;
  return (
    <h1 className="title">
      {/* <img
        className="logo"
        with="32"
        height="32"
        alt=""
        src={imgSrc}
      /> */}
      {text}
    </h1>
  );
};

Title.componentName = "Title";

export default Title;
