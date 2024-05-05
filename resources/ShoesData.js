import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const ShoesData = () => {
  const [shoes, setShoes] = useState([
    {
      title: "jordan 1",
      price: "100$",
      body: "bout jordan 1",
      key: "1",
      image: images.j1,
    },
    {
      title: "jordan 2",
      price: "200$",
      body: "bout jordan 2",
      key: "2",
      image: images.j2,
    },
    {
      title: "jordan 3",
      price: "300$",
      body: "bout jordan 3",
      key: "3",
      image: images.j3,
    },
    {
      title: "jordan 4",
      price: "100$",
      body: "bout jordan 1",
      key: "4",
      image: images.j4,
    },
    {
      title: "jordan 5",
      price: "200$",
      body: "bout jordan 2",
      key: "5",
      image: images.j5,
    },
    {
      title: "jordan 6",
      price: "300$",
      body: "bout jordan 3",
      key: "6",
      image: images.j6,
    },
    {
      title: "jordan 7",
      price: "100$",
      body: "bout jordan 1",
      key: "7",
      image: images.j1,
    },
    {
      title: "jordan 8",
      price: "200$",
      body: "bout jordan 2",
      key: "8",
      image: images.j1,
    },
    {
      title: "jordan 9",
      price: "300$",
      body: "bout jordan 3",
      key: "9",
      image: images.j1,
    },
  ]);

  return shoes;
};

export default ShoesData;
