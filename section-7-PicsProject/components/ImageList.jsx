import React from "react";
import "./imageList.css";
import ImageCards from "./ImageCards";

const ImageList = (props) => {
  const images = props.images.map((item) => {
    return <ImageCards image={item} key={item.id} />;
  });

  return (
    <>
      <div className="images-list">{images}</div>
    </>
  );
};

export default ImageList;
