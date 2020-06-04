import React from "react";
import { Image } from "react-bootstrap";
import Thumbnail from "../images/thumbnail_img.jpg";

function HeaderImg() {
  return (
    <>
      <Image src={Thumbnail} fluid />
    </>
  );
}

export default HeaderImg;
