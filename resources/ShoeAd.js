import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const ShoesData = () => {
  const [shoes, setShoes] = useState([
    {
      title: "jordan_add1",
      price: "$",
      body: " ",
      key: "1",
      image: images.jadd,
    },
    {
      title: "jordan_add2",
      price: "$",
      body: " ",
      key: "2",
      image: images.jadd2,
    },
   
  ]);

  return shoes;
};

export default ShoesData;
