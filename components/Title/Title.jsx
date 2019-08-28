import React from "react";

const Title = props => {
  const { text, imgSrc } = props;
  return (
    <h1 className="title">
      {text}
    </h1>
  );
};

Title.componentName = "Title";

export default Title;
